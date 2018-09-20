describe('Check', function(){
	it('Check', function(){

		browser.waitForAngularEnabled(false);
		//So to handle below issue write above code while testing non angular app

		browser.get('http://google.com/'); //Non Angular
		//Error display couldnot fild angular on the above app

		browser.get('http://juliemr.github.io/protractor-demo/'); //Angular

	});
});