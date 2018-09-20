describe('All demo', function(){
	//Modified again but remember method always be present inside the describe and outside the it block
	function Add(a, b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b)
		element(by.id("gobutton")).click();
	}

	it('Open Angular JS Website', function(){

		browser.get('http://juliemr.github.io/protractor-demo/');
		Add(2, 3);
		Add(4, 3);
		Add(5, 3);
		Add(5, 3);
		Add(5, 3);

		//Below code is same as previous
		element.all(by.repeater("result in memory")).count().then(function(COUNT){
			console.log("Print the COUNT: "+COUNT);
		});

		//Practice hard below thing and above thing  
		//Practice "each" and "all" concepts

		element.all(by.repeater("result in memory")).each(function(ITEMS){
			ITEMS.element(by.css("td:nth-child(3)")).getText().then(function(TEXTS){
				console.log("Print the list of TEXTS: "+TEXTS)
			});
		});

	});
});/**
 * 
 */