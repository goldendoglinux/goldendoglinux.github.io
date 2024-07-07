const aside = document.getElementsByTagName('aside')
const divAside = document.getElementsByClassName('openClose')

function clickaldiv(){

    if(  aside[0].classList != "contenedor-close"){
    aside[0].classList.add('contenedor-close')
    divAside[0].innerHTML = ">"
    }else{
        aside[0].classList.remove('contenedor-close')
    divAside[0].innerHTML = "<"
    }
}

divAside[0].addEventListener('click', clickaldiv)
