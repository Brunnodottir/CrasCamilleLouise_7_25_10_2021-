export class Card {
    constructor(name, ingredients, time, description) {
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description
    }


render(){
    const container = document.createElement("div");
    container.className ="card_recette";
    container.title = "Recette";


    document.querySelector("#results").append(container);

    const photo = document.createElement("div");
    photo.className="card_recette_photo";

    const info = document.createElement("div");
    info.className="card_recette_infos";

    const cardName = document.createElement("span");
    cardName.className ="card_recette_infos_title";
    cardName.textContent =this.name;

    const cardTime = document.createElement("div");
    cardTime.className ="card_recette_infos_time";
    cardTime.textContent = this.time;

    

    for (let i =0; i<this.ingredients.length; i++) {
        const cardIngr = document.createElement("span");
    cardIngr.className ="card_recette_infos_ingred";
    cardIngr.textContent=this.ingredients[i].ingredient;
    info.append(cardIngr)
       

    } 

    const cardInst = document.createElement("span")
    cardInst.className="card_recette_infos_instr";
    cardInst.textContent=this.description;

    //addlogo//



    container.append(photo, info);
    info.append(cardName, cardTime, cardInst)
}



}
