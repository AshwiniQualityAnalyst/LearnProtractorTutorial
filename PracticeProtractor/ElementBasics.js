describe('Protractor Element Demo', function(){
	it('Locators', function(){

		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("3")

		//Below uncommented code resolving the promises
		/*	.then(function(){
			browser.sleep(5000);
		});*/

		//declaring CSS syntax
		//tagname[attriute='value']

		element(by.id("gobutton")).click();

		//This below output will not be displayed

		//console.log(element(by.css("h2[class='ng-binding']")).getText());  

		//Real output will display only when you resolve promise
		//Protractor for 90% of methods will resolve promise automatically
		//There could be 2 potential problems
		//1.Sequence is not guaranteed
		//So to overcome this write below code

		//Jasmine Assertions
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
		//Jasmine take cares of resolving the promise
		//Link to jasmine assertion https://jasmine.github.io/2.0/introduction.html

		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			//Once the promise will get resloved here the output will also be extracted but that
			//extarcted one will be catch in argument ie; text
			console.log("Get Text Result: "+text);

		});

	});
});