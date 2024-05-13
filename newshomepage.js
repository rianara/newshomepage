let button = document.querySelector(".navButton")
let iconOpen = document.querySelector(".menu-icon1")
let iconClosed = document.querySelector(".menu-icon2")
let container = document.querySelector(".opaque")
button.onclick = function(){ 
    if (button.classList.contains("collapsed")){
        iconOpen.hidden = false;
        iconClosed.hidden = true;
    }
    else{
        iconOpen.hidden = true;
        iconClosed.hidden = false;
    }
};
