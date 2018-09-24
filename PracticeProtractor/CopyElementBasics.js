describe('Protractor Element Demo', function(){

	//Create a object of ImportantReferElementBasics.js 
	var driver = require("./ImportantReferElementBasics.js")

	//Setup
	beforeEach(function(){   //This is like Setup
		driver.getURL();
	});
	//Above Outside it BLOCK

	it('Testing Calculator functionallity', function(){
		driver.firstInput.sendKeys("2");
		driver.secondInput.sendKeys("3");
		driver.goButton.click();
		expect(driver.getResult.getText()).toBe("5");
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