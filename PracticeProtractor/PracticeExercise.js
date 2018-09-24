describe('Practice on demo site', function(){

	it('Angular Website', function(){
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.name("name")).sendKeys("MyStudents");
		element(by.css("input[name='email']")).sendKeys("Mystudents@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password2");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		//if css is " [id='exampleFormControlSelect1'] option  " it will directly select Male option

		//Now creating list of radio buttons and here will select by index value

		//  element.all(by.name("inlineRadioOptions")).get(0).click(); //This is also fine 

		//or else below is also fine

		element.all(by.name("inlineRadioOptions")).first().click(); //This is also fine

		//For Date of Birth use sendkeys but i'm not writing the script for that

		//Intoroducing another locator ie; buttonText
		element(by.buttonText("Submit")).click().then(function(){
			//I'm handling promise here for seeing the submission message :0)
			element(by.css("div[class*='success']")).getText().then(function(GetText){
				console.log("print get text of submission message: "+GetText);
			});
		});

		//Before writing below script go through above lines of script
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("A").then(function(){
			//Print alert message
			element(by.css("[class='alert alert-danger']")).getText().then(function(ErrorMessageText){
				console.log("Print error message: "+ErrorMessageText);
			});
		});

		//Click on Shop Link
		element(by.linkText("Shop")).click();
		//-----------------------------
		//Now we have four items on the page
		//Take 4 cards into list
		//Go through each index into list, then get text then find title of the text and then click on Add button
		element.all(by.tagName("app-card")).each(function(GrabEachItems){
			//here "GrabEachItems" is a index
			//Parent Child locators concept comes in a picture here
			GrabEachItems.element(by.css("h4 a")).getText().then(function(GetTextOfTitle){
				//Here we can also write css "h4 a" as "h4[class='card-title']" ----IMPORTANT
				//So now write your condition
				if(GetTextOfTitle == "Samsung Note 8"){
					//Click on Add button
					//Parent Child locators concept comes in a picture here
					GrabEachItems.element(by.css("button[class*='btn-info']")).click();
				}
			});

		});//--------------------------
		//Now grab the text of Checkout button
		element(by.partialLinkText("Checkout")).getText().then(function(CheckoutButtonGetText){
			console.log("Print get text of Checkout button: "+CheckoutButtonGetText);
		})

	}); //First it block

}); //First describe block