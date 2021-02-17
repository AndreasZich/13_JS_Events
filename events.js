
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

// Definition des Buttons

let modus;
let btn = document.getElementById("trigBtn");


btn.addEventListener("click",dayMode);
btn.addEventListener("click",toggleText);
btn.addEventListener("click",nightMode);



//actOnClick();
/*function actOnClick() {
    ausgabe("Click abgefangen");
}*/

function nightMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    toggleText;
  }

  function dayMode() {
    let element = document.getElementById("trigBtn");
    element.classList.toggle("day-mode");
    toggleText;

  }


  function toggleText(trigBtn) 
{
   let el = document.getElementById("trigBtn").innerHTML;
   if (el == "Dark-Mode") 
   {
    ausgabe("Day Mode");
       document.getElementById("trigBtn").innerHTML = "Day-Mode";
       
   }
   else 
   {
    ausgabe("Night Mode");
    document.getElementById("trigBtn").innerHTML = "Dark-Mode";
     
   }
}