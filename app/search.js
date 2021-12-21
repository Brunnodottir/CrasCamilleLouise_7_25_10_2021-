import {recipes} from "./data/recipes.js"
import {Card} from "./class/card.js"
// import {Dropdown} from "./class/dropdown.js"

const main = document.querySelector(".card_recette");




  





const searchInput = document.getElementById('searchInput');
// const results = document.getElementById('results');

let search ="";
let searchTerm ="";

let resultSearch = recipes;
let resultFilter = [];

// generer les listes au chargement de la page
let ingredientList = generateIngredientList(recipes);
displayIngredientList(ingredientList);

let applianceList = generateApplianceList(recipes);
displayApplianceList(applianceList);

let ustensilList = generateUstensilList(recipes);
displayUstensilList(ustensilList);

function updateListsRender() {
    

    resultFilter = applyFilter(resultSearch);
    displayRecipes(resultFilter);

    ingredientList = generateIngredientList(resultFilter);
     displayIngredientList(ingredientList);

      applianceList = generateApplianceList(resultFilter);
     displayApplianceList(applianceList);

     ustensilList = generateUstensilList(resultFilter);
     displayUstensilList(ustensilList);

    
}


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

    ingredientList = generateIngredientList(resultSearch);
    displayIngredientList(ingredientList);

     applianceList = generateApplianceList(resultSearch);
    displayApplianceList(applianceList);

    ustensilList = generateUstensilList(resultSearch);
    displayUstensilList(ustensilList);
 
    
})



//ajouter les paramètres de recherche

// function searchRecipes(recipesList, value) {
//     return recipesList.filter(recipe => recipe.name.toLowerCase().includes(value.toLowerCase()) ||
//     // recipe.appliance.toString().toLowerCase().includes(value)||
//     recipe.description.includes(value) 
//     || recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(value.toLowerCase()))  );
// }


function searchRecipes(recipesList) {
    const cardsContainer = document.querySelector("#results");
    let htmlContent ="";
    for (let i =0; i< recipesList.length; i++) {
        console.log("test")

    }
   
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

           filterElem.addEventListener("click", () => {
               filterElem.remove();
           
            updateListsRender();
           })

           updateListsRender();

           ////////////////////////////////

           

        //    resultFilter = applyFilter(resultSearch);
        //    displayRecipes(resultFilter);

        //    ingredientList = generateIngredientList(resultFilter);
        //     displayIngredientList(ingredientList);

        //      applianceList = generateApplianceList(resultFilter);
        //     displayApplianceList(applianceList);

        //     ustensilList = generateUstensilList(resultFilter);
        //     displayUstensilList(ustensilList);
       
           

            //////////////////
       })
       li.textContent = ingredientsList[i];

       ul.append(li);

   }
   // reclick
// function closeTag







}

const inputIngr = document.getElementById("searchInputIngr");
inputIngr.addEventListener('input', e => {
    // console.log('test input')
    const newIngList = ingredientList.filter(ingredient => ingredient.toLowerCase().startsWith(e.target.value.toLowerCase()));
    displayIngredientList(newIngList);
})




function applyFilter(recipesList) {
    let filteredRecipe = [...recipesList];
    const tag = document.getElementsByClassName("tag");
    const tagArray = [...tag];

    for (let i=0; i<tagArray.length; i++){
       const filterVal =  tagArray[i].getAttribute("data-value");
       const filterType =  tagArray[i].getAttribute("data-type");
       
    if (filterType === "ingredient") {
        //filterbyIngredients(); //regarder switchcase
        filteredRecipe = filterbyIngredients(filteredRecipe, filterVal)
        

    }
    if (filterType === "appliance") {
        filteredRecipe = filterbyAppliance(filteredRecipe, filterVal)
        //filterbyAppliance();
    }
    if (filterType === "ustensil") {
        filteredRecipe = filterbyUstensil(filteredRecipe, filterVal)
        //filterbyUstensil();

    }
}
    return filteredRecipe;
}

function filterbyIngredients(recipesList, value){

    return recipesList.filter(recipe => recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase() === value.toLowerCase()))

}

// const result25 = filterbyIngredients(recipes, "Jus de citron");
// console.log(result25) 


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

           filterElem.addEventListener("click", () => {
            filterElem.remove();
            updateListsRender();

        })
        updateListsRender();



       })
       li.textContent = applianceList[i];

       ul.append(li);

   }

}


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
           filterElem.addEventListener("click", () => {
            filterElem.remove();
        
         updateListsRender();
        })

        updateListsRender();

       })
       li.textContent = ustensilsList[i];

       ul.append(li);

   }
}


