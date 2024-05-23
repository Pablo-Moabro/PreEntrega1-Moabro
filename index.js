let num;

function getNumAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numAleatorio = getNumAleatorio(1,100);


while ( num != numAleatorio){
    num = prompt("elige un número de 1 al 100 ");
    if(num > 100){
        alert("número inválido")
    }else if(num < 1){
        alert("número inválido")
    }else if(num < numAleatorio){
        alert("número equivocado, prueba con un numero mayor al elegido");
    } else if(num > numAleatorio){
        alert("número equivocado, prueba con un numero menor al elegido");
    }else{
        alert("Haz ganado")
    }

}