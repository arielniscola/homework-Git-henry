function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui
    if(numero % 2 === 0){
        let binario = []
        while (numero!==0){
            let residuo = parseInt(numero%2)
            num = Math.floor(numero/2);
            binario.push(residuo);
        }
        return binario
    }else{
        const hexadecimal = numero.toString(16);

        return hexadecimal
    }
}


function ariel(){
    return {
        name: "Ariel Niscola",
        age: 31, // el mas grande quizas ja
        country: "Argentina"
    }
}

function saludo(){
    return "Hol mundo"
}