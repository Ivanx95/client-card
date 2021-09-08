const CardTemplatePercents = {

  creditPercentage: (cardTemplt)=>{
          if(!cardTemplt.creditPercentage
          	|| cardTemplt.creditPercentage>100
          	|| cardTemplt.creditPercentage<0)
              return {typeOfError:"creditPercentage", 
                      errorMessage: `El valor de creditPercentage es invalido : ${cardTemplt.creditPercentage},`
                                   +` Ingrese un  porcentaje de crédito válido`}},

  redemptionPercentage: (cardTemplt)=>{
          if(!cardTemplt.redemptionPercentage
          	|| cardTemplt.redemptionPercentage>100
          	|| cardTemplt.redemptionPercentage<0)
              return {typeOfError:"redemptionPercentage", 
                       errorMessage: "Ingrese su porcentaje de redención válido"}
                       
  }
}

export default CardTemplatePercents;