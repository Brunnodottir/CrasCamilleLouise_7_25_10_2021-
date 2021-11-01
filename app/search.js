const searchInput = document.getElementById('searchInput');
// const results = document.getElementById('results');

let search ="";
let searchTerm ="";


let array = ["poulet", "carottes", "thym", "ail"];
// console.log(array);

searchInput.addEventListener('input', (e) => {
    // console.log(e.target.value);
    searchTerm = e.target.value;
    searchIng();
})

function searchIng(){
   array.filter(ingr => ingr.includes(searchTerm.toLowerCase()
   )).map(ingr => (
    console.log(searchTerm)
    

   )).join('')
}


// search by tags
//for (let i = 0; i< Appareils.length; i++)
// -> appareils.[i].addEventlistener(click) 
// this.tagSelected.push appareil[i] => add class list visible
// = > print cards