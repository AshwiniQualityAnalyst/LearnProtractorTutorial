describe('Protractor Element Demo', function(){

	//Create a object of ImportantReferElementBasics.js 
	var driver = require("./ImportantReferElementBasics.js")
	var driver1 = require("./NormalDataProvider.js")

	//Setup
	beforeEach(function(){   //This is like Setup
		driver.getURL();
	});
	//Above Outside it BLOCK

	it('Testing Calculator functionallity', function(){
		
		//Normal data provider 1
		driver.firstInput.sendKeys(driver1.datadrive.firstinput);
		//Normal data provider 2
		driver.secondInput.sendKeys(driver1.datadrive.secondinput);
		
		driver.goButton.click();
		
		//Normal data provider 3
		expect(driver.getResult.getText()).toBe(driver1.datadrive.result);
		
		driver.getResultText.getText().then(function(text){
			console.log("Get Text Result: "+text);
		});

	});

	//Below Outside it BLOCK
	//TearDown
	afterEach(function(){ //This is like TearDown
		console.log("Test Printing Passed");
	});
});