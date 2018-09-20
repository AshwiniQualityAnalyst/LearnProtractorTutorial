describe('Drop Down Demo', function(){

	function Calculator(a, b, c ){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b)

		element.all(by.tagName("option")).each(function(DROPDOWNITEMS){
			DROPDOWNITEMS.getAttribute("value").then(function(GetTextsOfDROPDOWNITEMS){
				//console.log("Get Texts of DROPDOWNITEMS: "+GetTextsOfDROPDOWNITEMS)
				if(GetTextsOfDROPDOWNITEMS == c){
					DROPDOWNITEMS.click();
				}
			});
		});

		element(by.id("gobutton")).click();
	}

	//Write test now
	it('Check Drop Down Handling', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		Calculator(2, 3, "ADDITION");
		Calculator(2, 3, "DIVISION");
		Calculator(2, 3, "MODULO");
		Calculator(2, 3, "MULTIPLICATION");
		Calculator(2, 3, "SUBTRACTION");

		//if you want to print handle the promise because writing console.log directly won't work
		element.all(by.repeater("result in memory")).each(function(ITEMS){
			ITEMS.element(by.css("td:nth-child(3)")).getText().then(function(TEXTS){
				console.log("Print the list of TEXTS: "+TEXTS)
			});
		});
		
		//if you want to click individually the drop down items use below chain locators
		
		/*element(by.model("operator")).element(by.css("option:nth-child(1)")).click();*/ //ADDITION
		/*element(by.model("operator")).element(by.css("option:nth-child(2)")).click();*/ //DIVISION
		/*element(by.model("operator")).element(by.css("option:nth-child(3)")).click();*/ //MODULO
		/*element(by.model("operator")).element(by.css("option:nth-child(4)")).click();*/ //MULTIPLICATION
		/*element(by.model("operator")).element(by.css("option:nth-child(5)")).click();*/ //SUBTRACTION
	});
})