describe('Practice on demo site', function(){

	//First Function i have created ---ok
	function selectItems(Product){
		//Now we have four items on the page
		//Take 4 cards into list
		//Go through each index into list, then get text then find title of the text and then click on Add button
		element.all(by.tagName("app-card")).each(function(GrabEachItems){
			//here "GrabEachItems" is a index
			//Parent Child locators concept comes in a picture here
			GrabEachItems.element(by.css("h4 a")).getText().then(function(GetTextOfTitle){
				//Here we can also write css "h4 a" as "h4[class='card-title']" ----IMPORTANT
				//So now write your condition
				if(GetTextOfTitle == Product){
					//Click on Add button
					//Parent Child locators concept comes in a picture here
					GrabEachItems.element(by.css("button[class*='btn-info']")).click();
				}
			});

		});
	} // --ok

	it('Angular Website', function(){
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.name("name")).sendKeys("MyStudents");
		element(by.css("input[name='email']")).sendKeys("Mystudents@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();

		element(by.buttonText("Submit")).click().then(function(){
			element(by.css("div[class*='success']")).getText().then(function(GetText){
				console.log("print get text of submission message: "+GetText);
			});
		});

		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("A").then(function(){
			element(by.css("[class='alert alert-danger']")).getText().then(function(ErrorMessageText){
				console.log("Print error message: "+ErrorMessageText);
			});
		});
		element(by.linkText("Shop")).click();
		//Calling function
		selectItems("Samsung Note 8");
		selectItems("iphone X");

		element(by.partialLinkText("Checkout")).getText().then(function(CheckoutButtonGetText){
			//console.log("Print get text of Checkout button: "+CheckoutButtonGetText);
			var result = CheckoutButtonGetText.split("(");
			//Jasmine Assertion
			expect(result[1].trim().charAt(0)).toBe("2"); // 1 ) after writing "charAt(0)" you'll get "0th index as 1"
		});

		//Learn below how to convert String to Integer
		//Above assertion can be write in a below way as well
		/*         
		 * var ConvertingStringToInteger = Number(result[1].trim().charAt(0)); --It's Simple      
		           expect(result[1].trim().charAt(0)).toBe(ConvertingStringToInteger);

		 * */
	});  //First it block

}); //First describe block