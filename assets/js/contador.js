// Necesito que este contador haga 3 cosas:
// Que incremente de uno en uno.
// Que decremente de uno en uno.
// Que reinicie toda la cuenta.
// Necesita iniciar en 0

var valorContador = 0; 


//Aumentar
function aumentar(){
    valorContador++; //Condición
    document.getElementById("contador").innerHTML = valorContador; //Llamando a la función
}

//Decrementar
function decrementar(){
    valorContador--;
    document.getElementById("contador").innerHTML = valorContador;
}

//Reset
function reset(){
    valorContador = 0;
    document.getElementById("contador").innerHTML = valorContador;
}

//Disparador