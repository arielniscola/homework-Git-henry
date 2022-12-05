function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui
    if(typeof numero !== "number") return 'no es un numero'
    if(numero % 2 === 0 ) {
      return numero.toString(2)
  } else {
      return numero.toString(16)
  }
    }