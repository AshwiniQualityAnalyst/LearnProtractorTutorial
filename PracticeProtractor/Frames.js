describe('Frames Demo', function(){

	it('Open Non Angular Websites', function(){

		browser.waitForAngularEnabled(false);
		//Write maximize the window script line 
		browser.driver.manage().window().maximize();
		browser.get('http://qaclickacademy.com/practice.php');
		browser.switchTo().frame("courses-iframe");
		element(by.css("a[href*='sign_in']")).getText().then(function(Text){
			console.log("Get text: "+Text);
		});

	});

});