describe('Alerts Demo', function(){
	it('Open Non Angular Websites', function(){
		browser.waitForAngularEnabled(false);
		browser.get('http://qaclickacademy.com/practice.php');
	});
});