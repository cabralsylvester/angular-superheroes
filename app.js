//1. Bootstrap your angular application (i.e., create a module, use `ng-app`).
//2. Create a controller.
//3. Attach a controller to your view.
//4. Define a collection of superheroes in your `app.js`. Each superhero should have a name, phone number, comics affiliation and image URL.
//5. Use `ng-repeat` to render the list of superheroes.
//6. Create a search form. Use `ng-model` to bind that form's input to a value in the view model.
//7. Use `filter` to limit the number of superheroes shown in the browser based on user input
//8. Use `ng-class` to add a class to each superhero in the list indicating their comics affiliation (e.g., `ng-class="marvel"`). Use that class to color code the list depending on their affiliation (e.g., all Marvel heroes should appear as blue).
//9. Add a button next to each superhero. When clicked, their image should appear within their listing (hint: use `$index`).

var superheroData = [
{
  name:'Superman',
  phone_number: '516-333 - 4555',
  comic_affiliation: 'DC',
  image_url: 'http://static.srcdn.com/wp-content/uploads/Superman-3D-Art.jpg'
},

{
  name:'Incredible Hulk',
  phone_number:'212-444-5676',
  comic_affiliation: 'Marvel',
  image_url:'http://bit.ly/2m4eZd0'
},

{
  name:'Inspector Gadget',
  phone_number: '232-222-4323',
  comic_affiliation: 'Nickalodean',
  image_url:'http://bit.ly/2mBSO0V'
}
]

angular
.module('superheroApp', [])
.controller('superheroCtrl', [ superheroControllerFunction ])

function superheroControllerFunction () {
  this.mySuperheros = superheroData;
}
