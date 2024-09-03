function inverter(texto){
  let reverse ="";
  for(i= texto.length - 1 ; i>=0 ; i--){
    reverse += texto[i]
  }
  if (texto !=="") {
   return console.log(reverse)
  }
}

inverter("Luiz Aprovado no Estágio")