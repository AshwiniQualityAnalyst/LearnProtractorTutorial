describe('Synchronization Concepts', function(){

	it('Open Non Angular Application', function(){

		browser.waitForAngularEnabled(false);
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
		element(by.css("a[href*='loadAjax']")).click();

		//Define Expected conditon below meaning Explicit Wait concept just like we deal in Selenium
		var ExplicitWait = protractor.ExpectedConditions;
		//So now another syntax --browser.wait(Condition, Timeout); it takes two arguments
		browser.wait(ExplicitWait.invisibilityOf(element(by.id("loader"))), 8000);
		//Cool Stuff 
		element(by.id("results")).getText().then(function(Text){
			console.log("Get text: "+Text);
		});


	});

});