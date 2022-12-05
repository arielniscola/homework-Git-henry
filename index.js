function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui
    if(typeof numero !== "number") return 'no es un numero'
    if(numero % 2 === 0 ) {
      return numero.toString(2)
  } else {
      return numero.toString(16)
  }
    }

const Brian = () =>{
    return{
        name: 'Brian',
        age: 19, // ya se, parezco mucho mayor jsjsjsj
        country: 'Argentina'
    } 
}