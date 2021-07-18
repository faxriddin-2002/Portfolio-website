window.addEventListener("DOMContentLoaded", function(){
    let ulelement = document.getElementById("menu");
    let menu = document.getElementById("nabar");

    ulelement.addEventListener("click", function(){
        menu.classList.toggle("ulClass");
    })
})