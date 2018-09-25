describe('Protractor Element Demo', function(){


	var driver = require("./ImportantReferElementBasics.js")
	var using = require('jasmine-data-provider');
	var driver1 = require("./JasmineDataProvider.js");
	


	beforeEach(function(){   
		driver.getURL();
	});

	//Jasmine DataProvider Syntax
	//data stores actual data
	//description stores sub object name
	//For every iteration one data set will be picked
	using(driver1.DataDrivenTesting, function (data, description){

		it('Testing Calculator functionallity', function(){
			driver.firstInput.sendKeys(data.firstinput);
			driver.secondInput.sendKeys(data.secondinput);
			driver.goButton.click();
			expect(driver.getResult.getText()).toBe(data.result);
			driver.getResultText.getText().then(function(text){
				console.log("Get Text Result: "+text);
			});
		});

	});

	afterEach(function(){ 
		console.log("Test Printing Passed");
	});
});