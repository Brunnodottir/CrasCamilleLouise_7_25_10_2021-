// export class Dropdown {
//     constructor (dropList, type) {
//         this.dropList = dropList;
//         this.type = type;
//     }

//     render(){
//         const container = document.createElement("div");
//         container.className="dropdown dropdown-ingredients";

//         const button = document.createElement("button");
//         button.classList="btn"+this.type;
//         button.innerHTML = this.type;
    
//     }
// }

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
