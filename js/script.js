let menuLis = document.querySelectorAll('.sidebar-menu-item li');

for(let li in menuLis) {
    if(menuLis.hasOwnProperty(li)) {
        if(menuLis[li].querySelector('ul')) {
            
            menuLis[li].addEventListener('click',openSubMenu);
        }
    }    
}

function openSubMenu(event) {
    event.preventDefault();
    let showedSubmenu = document.querySelectorAll('.sidebar-menu-item li.show');
    for(let ul in showedSubmenu) {
        if(showedSubmenu.hasOwnProperty(ul)) {
            if(this.querySelector('ul') != showedSubmenu[ul])
                showedSubmenu[ul].classList.remove('show');
        }    
    }
    this.querySelector('ul').classList.toggle('show');
    
}