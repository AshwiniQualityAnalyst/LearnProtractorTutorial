describe('Chain Locators Demo', function(){
	it('Open Angular JS Website', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		// repeater, chain locators	and CSS for identical type
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("3")
		element(by.id("gobutton")).click();
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log("Get Text: "+text)
		});
	});
});