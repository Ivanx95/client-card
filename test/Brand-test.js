const saveBrand =  require("../src/service/BrandService.js");
const dataSource = require("../src/db/model/DB.js");
const Brand= dataSource.models.Brand;
const CardTemplate= dataSource.models.CardTemplate;
var assert = require('assert');


const brandName = "Test Brand";
const brand = {}; 
brand.name = brandName;
brand.brandColor = "#ffffff";
brand.logoURL = "file/"+"foo";
brand.userId = 1;



let resultBrand;
describe('BrandService', ()=>{
	describe('Save brand', ()=>{
		it('Should save brand with name test brand', async ()=>{
			let result = await saveBrand("foo",brand); 
			console.log(result);
			assert.equal(result.fileName, "foo");
			await result.result.cardTemplate.destroy();
			await result.result.brand.destroy();

		});

		it("Update card template",(done)=>{
			CardTemplate.findByPk(5)
			.error((error)=>{
				done(error);
			})
			.then(function (cardTemplate) {

				if (cardTemplate) {
					return cardTemplate.update({
						creditPercentage:0.45,
						redemptionPercentage:0.49
					})
				}else{
					done(new Error(""));
				}
			})
			.then(()=>{
				done();
			});
		})

	});


});