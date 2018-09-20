describe('Alerts Demo', function(){
	it('Open Non Angular Websites', function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://qaclickacademy.com/practice.php');
		element(by.id("confirmbtn")).click();

		//Accept for positive buttons
		browser.switchTo().alert().accept().then(function(){
			browser.sleep(5000);
		});

		// or else accordingly comment any one while running

		//Dismiss for negative buttons
		browser.switchTo().alert().dismiss().then(function(){
			browser.sleep(5000);
		});

	});
});