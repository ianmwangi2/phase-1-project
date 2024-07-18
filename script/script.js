document.addEventListener('DOMContentLoaded', () => {
    const drinkList = document.getElementById('drink-list');
    const searchBar = document.getElementById('search-bar');
    const addDrinkForm = document.getElementById('add-drink-form');
  
    //Created variable apiURL for the API link
    const apiUrl = 'https://phase-1-project-backend.vercel.app/drinks';

    //Created a function to fetch and display the data from the apiURL
    function fetchDrinks() {
      fetch(apiUrl)
        .then(response => response.json())
        .then(drinks => {
          drinkList.innerHTML = '';
          drinks.forEach(displayDrink);
        });
    }
  
    //function used to display drinks
    function displayDrink(drink) {
      const drinkItem = document.createElement('div');
      drinkItem.className = 'drink-item';
      drinkItem.innerHTML = `
        <h3>${drink.name}</h3>
        <h4>Ingredients:</h4>
        <ul>
          ${drink.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h4>Instructions</h4>
        <p>${drink.instructions}</p>
        <img src="${drink.image}" alt="${drink.name}">
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
      `;
      //Event-listeners for the edit and delete button
      drinkItem.querySelector('.delete-button').addEventListener('click', () => deleteDrink(drink.id));
      drinkItem.querySelector('.edit-button').addEventListener('click', () => editDrink(drink));
      drinkList.appendChild(drinkItem);
    }
  
    // Created a function used to search for a drink
    function searchDrinks(event) {
      const query = event.target.value.toLowerCase();
      fetch(apiUrl)
        .then(response => response.json())
        .then(drinks => {
          drinkList.innerHTML = '';
          const filteredDrinks = drinks.filter(drink => drink.name.toLowerCase().includes(query));
          if (filteredDrinks.length > 0) {
            filteredDrinks.forEach(displayDrink);
          } else {
            drinkList.innerHTML = '<p>No drinks found</p>';
          }
        });
    }
  
    // Created a function for adding a new drink
    function addDrink(event) {
      event.preventDefault();
      const newDrink = {
        name: document.getElementById('new-drink-name').value,
        category: document.getElementById('new-drink-category').value,
        instructions: document.getElementById('new-drink-instructions').value,
        image: document.getElementById('new-drink-image').value
      };
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDrink)
      })
      .then(response => response.json())
      .then(displayDrink);
      addDrinkForm.reset();
    }
  
    // Creates a function to delete a drink
    function deleteDrink(id) {
      fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
      })
      .then(() => {
        fetchDrinks();
      });
    }
  
    function editDrink(drink) {
      const newName = prompt('Enter new name', drink.name);
      if (newName) {
        const updatedDrink = { ...drink, name: newName };
        fetch(`${apiUrl}/${drink.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedDrink)
        })
        .then(() => fetchDrinks());
      }
    }
  
    // Event listener for search-bar
    searchBar.addEventListener('input', searchDrinks);
    // Event listener for the Add button
    addDrinkForm.addEventListener('submit', addDrink);
  
    fetchDrinks();
  });
  