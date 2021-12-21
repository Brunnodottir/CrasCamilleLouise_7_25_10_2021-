

const dropdown = document.querySelectorAll(".dropdown");
const title = document.querySelectorAll(".droptitle")
const btnDrop = document.querySelectorAll(".bloc-top");
const chevronDown = document.querySelectorAll(".fa-chevron-down");
const chevronUp = document.querySelectorAll(".fa-chevron-up");


let toggleIndex =0;
for (let i = 0 ; i<dropdown.length; i++){
    btnDrop[i].addEventListener("click", () => {
      
        

        btnDrop[i].querySelector("input").style.display = "inline";
        title[i].style.display ="none";
        // chevronDown[i].style.display ="none";
        // chevronUp[i].style.display ="inline";
        console.log(dropdown[i].scrollHeight);
        // modifier span en input
        if (toggleIndex === 0){
            dropdown[i].style.height = `${dropdown[i].scrollHeight}px`;
            toggleIndex++;
            // dropdown.classList.add("active");
            // const chevronDown = display.none;
    
        }else {
            btnDrop[i].querySelector("input").style.display = "none";
            title[i].style.display ="inline";
            // chevronDown[i].style.display ="inline";
            // chevronUp[i].style.display ="none";




            dropdown[i].style.height = `${btnDrop[i].scrollHeight}px`;
            toggleIndex--;
    
        }
    
    })
}

