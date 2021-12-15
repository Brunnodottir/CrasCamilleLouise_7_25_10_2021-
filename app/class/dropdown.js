

const dropdown = document.querySelectorAll(".dropdown");
const btnDrop = document.querySelectorAll(".bloc-top");
const chevronDown = document.querySelector(".fa-chevron-down");


let toggleIndex =0;
for (let i = 0 ; i<dropdown.length; i++){
    btnDrop[i].addEventListener("click", () => {
      
        

        console.log(dropdown[i].scrollHeight);
        // modifier span en input
        if (toggleIndex === 0){
            dropdown[i].style.height = `${dropdown[i].scrollHeight}px`;
            toggleIndex++;
            dropdown.classList.add("active");
            // const chevronDown = display.none;
    
        }else {
            dropdown[i].style.height = `${btnDrop[i].scrollHeight}px`;
            toggleIndex--;
    
        }
    
    })
}

