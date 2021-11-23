

// export class Dropdown {
//     constructor (name) {
//         this.name = name;
//     }
//     render(){
//         const container = document.createElement("div");
//         container.className = "bloc-links";

//         document.querySelectorAll(".bloc-top").append(container);
      


//         const ul = document.createElement("ul");
//         ul.className= "drop-flag";
     
//         const item = document.createElement("li");
//        item.className ="drop_item";

//        container.append(ul);
//        ul.append(item);
       
//     }
// }

// const myDrop= new Dropdown("Nom", [{item1}, {item2}]);
// myDrop.render();


const dropdown = document.querySelectorAll(".dropdown");
const btnDrop = document.querySelectorAll(".bloc-top");
const chevronDown = document.querySelector(".fa-chevron-down");


let toggleIndex =0;
for (let i = 0 ; i<dropdown.length; i++){
    btnDrop[i].addEventListener("click", () => {
        console.log(dropdown[i].scrollHeight);
        if (toggleIndex === 0){
            dropdown[i].style.height = `${dropdown[i].scrollHeight}px`;
            toggleIndex++;
            // const chevronDown = display.none;
    
        }else {
            dropdown[i].style.height = `${btnDrop[i].scrollHeight}px`;
            toggleIndex--;
    
        }
    
    })
}

