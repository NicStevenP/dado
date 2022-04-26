function aleatorio() {

    return Math.round(Math.random()*6);

}


var boton = document.querySelector("button");
document.addEventListener("click", verificar);


function numeroAlazar(){
    console.log(Math.round(Math.random()*6));
}

function verificar(){
    if( aleatorio()>4){

    window.location.href = 'jugador1.html';
    
    
}
    else{

        window.location.href = 'jugador2.html';
        
    }
}
