# PHASE-1 PROJECT

## COCKTAIL RECIPE
### Description
This is a single pag web application that allows users to view,search, edit and delete cocktail recipes. It communicates with a JSON server to fetch and manage cocktail data

## PLANNING
The user should be able to perform simple tasks on the web-page and the page should be responsive.

### Features
- Viewing cocktails - Display a list of cocktails with details including name, ingredients, instructions, and an image.
- Searching for cocktails - Filter cocktails by name using a search bar.
- Adding of cocktails - Add new cocktails to the list using a form.
- Editing of cocktail details - Edit the details of existing cocktails.
- Deleting cocktails - Remove cocktails from the list.

## Project requirements
1. Should be built with HTML, CSS and Javascript
2. Fetch data from the JSON SERVER
3. The API returns a collection of at least 5 objects, each with at least 3 attributes.
4. All interactions with the API are asynchronous and use JSON as the communication format.
5. The app runs on a single page with no redirects or reloads.
6. The project includes at least 3 distinct event listeners enabling interactivity.
7. The project implements at least one instance of array iteration using available array methods (map, forEach, filter, etc).
8. Good coding practices are followed, including DRY (Do Not Repeat Yourself) principles.

## INSTALLATION
1. Clone the repository to your local machine by:
``` git clone git@github.com:ianmwangi2/phase-1-project.git ```

2. Open the code on your prefered text editor i.e VS Code
3. Run live server to view the created web-page

NOTE: You will not run the JSON Server on vscode because it has been deployed as an API using vercel
Here is the deployed JSON server:
[Link](https://phase-1-project-backend.vercel.app/drinks)

### How the webpage works
- Upon loading the page, the list of cocktails will appear.
- Use the search bar to filter a cocktail by it's name.
- To add a new cocktail add all new drink details and then click "Add Drink" to add the new cocktail to the list.
- Click the edit button of the cocktail to enter new details of the cocktail.
The delete button removes a cocktail from the list when the button is clicked.

