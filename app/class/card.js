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
    info.className="card_recette_content";

    const top = document.createElement("div");
    top.className="card_recette_content_top"

    const cardName = document.createElement("span");
    cardName.className ="card_recette_title";
    cardName.textContent =this.name;

    const cardTime = document.createElement("div");
    cardTime.className ="card_recette_time";
    cardTime.textContent = this.time;

    const bottom = document.createElement("div");
    bottom.className="card_recette_content_bottom";

    const ingrList = document.createElement("div");
    ingrList.className="ingredient_list";

    for (let i =0; i<this.ingredients.length; i++) {
        const cardIngr = document.createElement("span");
    cardIngr.className ="card_recette_infos_ingred";
    cardIngr.textContent=this.ingredients[i].ingredient;
   ingrList.append(cardIngr)
       

    } 

    const cardInst = document.createElement("span")
    cardInst.className="card_recette_infos_instr";
    cardInst.textContent=this.description;

    //addlogo//



    container.append(photo, info);
    info.append(top, bottom)
    top.append(cardName,cardTime)
    bottom.append( ingrList,cardInst)
}



}
