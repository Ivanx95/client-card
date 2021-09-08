import  _validate from "../shared/ValidationUtils.mjs";
import CardTemplatePercents from "../shared/TemplateCardConstrains.mjs";
import assert from 'assert';

describe('CardTemplate service', ()=>{
	describe('Update card template', ()=>{
		it('Should return error by invalid null percentages values',  ()=>{
		
			let cardTemplate = {};

			let errors =_validate(cardTemplate)
                      (CardTemplatePercents.creditPercentage)
                      (CardTemplatePercents.redemptionPercentage,1);
                      
            console.log(errors);
            assert.equal(2,errors.length);
		});

		it('Should return error by invalid creditPercentage',  ()=>{
		
			let cardTemplate = {redemptionPercentage:44, creditPercentage:105};

			let errors =_validate(cardTemplate)
                      (CardTemplatePercents.creditPercentage)
                      (CardTemplatePercents.redemptionPercentage,1);
                      
            console.log(errors);
            assert.equal(1,errors.length);
		});

		
		it('No errors',  ()=>{
		
			let cardTemplate = {redemptionPercentage:44, creditPercentage:15};

			let errors =_validate(cardTemplate)
                      (CardTemplatePercents.creditPercentage)
                      (CardTemplatePercents.redemptionPercentage,1);
                      
            console.log(errors);
            assert.equal(0,errors.length);
            let noErrors = true;
            if(errors.length){
				noErrors = false;
            }
            assert.equal(true,noErrors);
		});

	});


});