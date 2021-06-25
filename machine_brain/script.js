var menu = document.getElementById("hamburger")

menu.onmouseover = function(event){
    var menu = document.getElementById("menu")
    menu.style.display = 'block'
}

document.onmouseover = function(event){
    var target = event.target
    if(target.className != "hamburger" &&
        target.className != "menu-lst" &&
        target.className != "last" &&
        target.className != "row align-items-center" &&
        target.className != "menu-a"){
        closeMenu()
    }

}

function closeMenu(){
    var menu = document.getElementById("menu")
    menu.style.display = 'none'
}