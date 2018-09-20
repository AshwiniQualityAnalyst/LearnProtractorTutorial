describe('Protractor Element Demo', function(){
	it('Locators', function(){

		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("3").then(function(){
			browser.sleep(5000);
		});
		//element(by.id("gobutton")).click();

	});
});