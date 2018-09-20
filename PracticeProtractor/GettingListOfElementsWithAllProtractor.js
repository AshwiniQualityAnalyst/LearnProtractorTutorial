describe('All demo', function(){
	it('Open Angular JS Website', function(){

		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("3")
		element(by.id("gobutton")).click();
		
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("3")
		element(by.id("gobutton")).click();
		
		element(by.model("first")).sendKeys("6");
		element(by.model("second")).sendKeys("3")
		element(by.id("gobutton")).click();
		
		element.all(by.repeater("result in memory")).count().then(function(COUNT){
			console.log("Print the COUNT: "+COUNT);
		});
		
		//Practice hard below thing and above thing  
		
		element.all(by.repeater("result in memory")).each(function(ITEMS){
			ITEMS.element(by.css("td:nth-child(3)")).getText().then(function(TEXTS){
				console.log("Print the list of TEXTS: "+TEXTS)
			});
		});

	});
});