
const Logger = require("../logger/Logger.js");
const dataSource = require("../db/model/DB.js");
const Brand= dataSource.models.Brand;
const CardTemplate= dataSource.models.CardTemplate;
const uuidv4 = require('uuid').v4;
const path = require("path"); 

const saveBrand = async function (fileName, brand, callback) {  

 let result = await dataSource.transaction(async (t) => {

   console.log("HI");

   let savedBrand = await Brand.create(brand, {transaction: t});

    const _brand = savedBrand.dataValues;

    Logger.log({
      level:"info",
      message: JSON.stringify(_brand)
    });

    const cardTemplate = {};
    cardTemplate.value = uuidv4();
    cardTemplate.creditPercentage = 0.1;
    cardTemplate.redemptionPercentage = 0.1;
    cardTemplate.BRAND_ID =  _brand.brandId;

    const savedTemplate = await CardTemplate.create(cardTemplate, {transaction: t});
    Logger.log({
      level:"info",
      message: JSON.stringify(savedTemplate)
    });
    return {brand: savedBrand, cardTemplate:savedTemplate};
  });

  //callback(null, fileName, brand); 
  return {fileName: fileName, result: result};

}  


module.exports =  saveBrand;