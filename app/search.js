import {recipes} from "./data/recipes.js"
import {Card} from "./class/card.js"
import {Dropdown} from "./class/dropdown.js"

const main = document.querySelector(".card_recette");




  





const searchInput = document.getElementById('searchInput');
// const results = document.getElementById('results');

let search ="";
let searchTerm ="";

let resultSearch = recipes;




// rechercher un element //
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    if (searchTerm.length > 2){
        // const filteredCard = searchRecipes(recipesList,value)
    }
    resultSearch = searchRecipes(recipes, searchTerm);
    console.log(resultSearch)

    //shoot previous data
    document.getElementById("results").innerHTML="";
    
    for (let i = 0; i<resultSearch.length; i++) {
        const filteredRecipe = new Card(resultSearch[i].name,resultSearch[i].ingredients,resultSearch[i].time, resultSearch[i].description )
      filteredRecipe.render();
    }


    if (resultSearch.length === 0){
        console.log("Aucune recette ne correspond")
    }
    //genere list sur la valeur donnée : ici ResultSearch défini plus haut
    console.log("appliance list ", generateApplianceList(resultSearch));
    console.log ("ustensils list ", generateUstensilsList(resultSearch));
    

    
})


//ajouter les paramètres de recherche
function searchRecipes(recipesList, value) {
    return recipesList.filter(recipe => recipe.name.toLowerCase().includes(value.toLowerCase()) ||
    recipe.appliance.toString().toLowerCase().includes(value)||
    recipe.description.includes(value) )
    // ||recipe.ingredients.toLowerCase().includes(value.toLowerCase()) /* 2nd condition */  );
}



function generateIngredientList(recipesList) {
    let arrayIng = [];
    recipes.forEach(recipe => {
        if (recipe.display) {
        recipe.ingredients.forEach(ingredient => {
           const ingredientList = ingredient.ingredient
           arrayIng.push(ingredientList)

    })

       }
   })
}

function generateApplianceList(recipesList) {
    let allAppliance = [];
    for ( let i = 0; i < recipesList.length ; i++) {
        allAppliance.push(recipesList[i].appliance)

    }

    // filtrer les doublons
    return allAppliance;

    /// ajouter allAppliance au Dom ///

  

}



function generateUstensilsList(recipesList) {
    let allUstensils = [];
    for (let i = 0; i< recipesList.length ; i++) {
        allUstensils.push(recipesList[i].ustensils) //tableau
    }

    return allUstensils;
    
}









// const result = searchRecipes(recipes, "tarte");
// const result2 = filterByIngredient(result, "ail");

// console.log(result2)

//searchbyingredient
//searchby aplliance
//searchbyustensils

// render recipe, ingredit





// search by tags
//for (let i = 0; i< Appareils.length; i++)
// -> appareils.[i].addEventlistener(click) 
// this.tagSelected.push appareil[i] => add class list visible
// = > print cards

// createDropdown() {
//     const dropContainer = document.querySelector(".dropdowns-container");
//     dropContainer.innerHTML = "";
//     this.sort.forEach((el) => {
//         if (el === "Ingredients") {
//             dropContainer.innerHTML += new Dropdown(
//                 this.recipesList.getAllIngredients(),
//                 el).dropdown;
//         }
       
//     })


// getAllIngredients(){
//     const AllIngredients = "";
//     for (let recipe of this.recipes) {
//         for (let i=0; i < recipe.ingredients.length; i++) {
//             AllIngredients.add(recipe.ingredients[i].ingredient)
//         }
    
// }



// *** test de rendu card ***//
// const myCard = new Card("Nom recette",[{ingredient: "coco"},{ingredient: "ail"}], "teteetter", "fdffsfds");
// myCard.render();

