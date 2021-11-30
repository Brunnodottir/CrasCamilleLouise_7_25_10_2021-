import {recipes} from "./data/recipes.js"
import {Card} from "./class/card.js"
// import {Dropdown} from "./class/dropdown.js"

const main = document.querySelector(".card_recette");




  





const searchInput = document.getElementById('searchInput');
// const results = document.getElementById('results');

let search ="";
let searchTerm ="";

let resultSearch = recipes;


function displayRecipes(recipesList) { 
    document.getElementById("results").innerHTML="";
    for (let i = 0; i<recipesList.length; i++) {
        const filteredRecipe = new Card(recipesList[i].name,recipesList[i].ingredients,recipesList[i].time, recipesList[i].description )
      filteredRecipe.render();
    }
}

// rechercher un element //
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    if (searchTerm.length > 2){
        // const filteredCard = searchRecipes(recipesList,value)
    }
    resultSearch = searchRecipes(recipes, searchTerm);
    // const filteredResult = applyFilter(resultSearch)
    displayRecipes(resultSearch);


    if (resultSearch.length === 0){
        console.log("Aucune recette ne correspond")
    }
    //genere list sur la valeur donnée : ici ResultSearch défini plus haut
    console.log("appliance list ", generateApplianceList(resultSearch));
    console.log ("ustensils list ", generateUstensilList(resultSearch));
    console.log("ingredients list", generateIngredientList(resultSearch));

    const ingredientList = generateIngredientList(resultSearch);
    displayIngredientList(ingredientList);

    const applianceList = generateApplianceList(resultSearch);
    displayApplianceList(applianceList);

    const ustensilList = generateUstensilList(resultSearch);
    displayUstensilList(ustensilList);
 
    
})

// generer les listes au chargement de la page
const ingredientList = generateIngredientList(recipes);
displayIngredientList(ingredientList);

const applianceList = generateApplianceList(recipes);
displayApplianceList(applianceList);

const ustensilList = generateUstensilList(recipes);
displayUstensilList(ustensilList);



//ajouter les paramètres de recherche
function searchRecipes(recipesList, value) {
    return recipesList.filter(recipe => recipe.name.toLowerCase().includes(value.toLowerCase()) ||
    // recipe.appliance.toString().toLowerCase().includes(value)||
    recipe.description.includes(value) 
    || recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(value.toLowerCase()))  );
}



function generateIngredientList(recipesList) {
    let allIngredients = [];
    recipesList.forEach(recipe => {

        recipe.ingredients.forEach(ingredient => {
           allIngredients.push(ingredient.ingredient)

    })
// filtrer les doublons
       
   })
   
   const noDuplicate = [...new Set(allIngredients)];
   return noDuplicate.sort();


}

function displayIngredientList(ingredientsList) {
   const ul = document.getElementById("ingredientlist");
   ul.innerHTML=""; //shoot previous data//

   for ( let i = 0; i< ingredientsList.length; i++) {
       const li = document.createElement("li");
       li.addEventListener("click", e => {
           const filterElem = document.createElement("button");
           filterElem.textContent = ingredientsList[i];
           filterElem.setAttribute("data-value", ingredientsList[i]);
           filterElem.setAttribute("data-type", "ingredient");
           filterElem.classList.add("tag");
           const container = document.getElementsByClassName("tags-container")[0];
           container.append(filterElem);

           ////////////////////////////////

           applyFilter();
       

            //////////////////
       })
       li.textContent = ingredientsList[i];

       ul.append(li);

   }
   // reclick
// function closeTag







}
function applyFilter(recipesList) {
    let filteredRecipe = [...recipesList];
    const tag = document.getElementsByClassName("tag");
    const tagArray = [...tag];

    for (let i=0; i<tagArray.length; i++){
       const filterVal =  tagArray[i].getAttribute("data-value");
       const filterType =  tagArray[i].getAttribute("data-type");
       
    if (filterType === "ingredients") {
        //filterbyIngredients(); //regarder switchcase
        filteredRecipe = filterbyIngredients(filteredRecipe, filterVal)
        

    }
    if (filterType === "appliance") {
        //filterbyAppliance();
    }
    if (filterType === "ustensil") {
        //filterbyUstensil();

    }
}
    return filteredRecipe;
}

function filterbyIngredients(recipesList, value){

    return recipesList.filter(recipe => recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(value.toLowerCase())))

}

const result25 = filterbyIngredients(recipes, "Jus de citron");
console.log(result25) 


function filterbyAppliance(recipesList, value){
    return recipesList.filter(recipe =>recipe.appliance === value)
}

function filterbyUstensil(recipesList,value){
    return recipesList.filter(recipe => recipe.ustensils.includes(value))
}








function generateApplianceList(recipesList) {
    let allAppliance = [];
    recipesList.forEach(recipe => {

        // recipe.appliance.forEach(appliance => {
           allAppliance.push(recipe.appliance)

    // })
// filtrer les doublons
       
   })

   const noDuplicate =[...new Set(allAppliance)];
   return noDuplicate.sort();

    /// ajouter allAppliance au Dom ///

  

}

function displayApplianceList(applianceList) {
    const ul = document.getElementById("appliancelist");
   ul.innerHTML=""; //shoot previous data//

   for ( let i = 0; i< applianceList.length; i++) {
       const li = document.createElement("li");
       li.addEventListener("click",e => {
           const filterElem = document.createElement("button");
           filterElem.textContent = applianceList[i];
           filterElem.setAttribute("data-value",applianceList[i] );
           filterElem.setAttribute("data-type", "appliance");
           filterElem.classList.add("tag");
           const container = document.getElementsByClassName("tags-container")[0]; //ajouter dans un div dédié
           container.append(filterElem);
           //applianceFilter();
           applyFilter(resultSearch);//ajouter 
       })
       li.textContent = applianceList[i];

       ul.append(li);

   }

}
//1.recup elements du dom avec class tag

 




//2. faire un tableau et parcourir


//3. recup leur valeur et type

// function searchByTags(valeur) {
//     let filteredRecipes = [];

//     for (let i = 0; i< this.filteredRecipes.length; i++){
//         if (this.filteredRecipes[i].stringifyRecipes.includes(valeur.tags)) {
//             filteredRecipes.push(filteredRecipes[i]);
//         }
//         //return ??//
//     }


// }
// function searchBy // ajouter parametres de recherche
//4. => prendre la liste des recettes actives (resultSearch) et la filtrer avec (valeur,type)
// return tableau de recettes filtrées
// fonction d'affichage des recettes





// function generateUstensilsList(recipesList) {
//     let allUstensils = [];
//     for (let i = 0; i< recipesList.length ; i++) {
//         allUstensils.push(recipesList[i].ustensils) //tableau
//     }

//     return allUstensils;
    
// }

function generateUstensilList(recipesList) {
    let allUstensils = [];
    recipesList.forEach(recipe => {

        recipe.ustensils.forEach(ustensil => {
           allUstensils.push(ustensil)

    })
// filtrer les doublons
       
   })
   
   const noDuplicate = [...new Set(allUstensils)];
   return noDuplicate.sort();


}

function displayUstensilList(ustensilsList) {
   const ul = document.getElementById("ustensillist");
   ul.innerHTML=""; //shoot previous data//

   for ( let i = 0; i< ustensilsList.length; i++) {
       const li = document.createElement("li");
       li.addEventListener("click", e => {
           const filterElem = document.createElement("button");
           filterElem.textContent = ustensilsList[i];
           filterElem.setAttribute("data-value", ustensilsList[i]);
           filterElem.setAttribute("data-type", "ustensil");
           filterElem.classList.add("tag");
           const container = document.getElementsByClassName("tags-container")[0];
           container.append(filterElem);
           applyFilter();
       })
       li.textContent = ustensilsList[i];

       ul.append(li);

   }
}



// Ajouter les "li" au DOM

//1. ajouter un attribut "data-value ail" +"data-type ingredient"





// const result = searchRecipes(recipes, "tarte");
// const result2 = filterByIngredient(result, "ail");

// console.log(result2)

//function searchbyingredient
//
//function searchby aplliance
//function searchbyustensils

// render recipe, ingredit



// tags.forEach(tag => {
    // tag.addEventListener("click", e => {
    //     const newTag = e.target.getAttribute("new-value");
    //     const filteredRecipes = recipesList.filter((recipes) => {
    //         return recipes.tags.includes(newTag);
    //     }
    // })
// })

// shootprevious data ? 
//


// *** test de rendu card ***//
// const myCard = new Card("Nom recette",[{ingredient: "coco"},{ingredient: "ail"}], "teteetter", "fdffsfds");
// myCard.render();
