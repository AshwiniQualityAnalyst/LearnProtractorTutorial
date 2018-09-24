function SeeCopyElementBasicsJsFile(){
	//Page locators are at central location now
	this.firstInput = element(by.model("first"));
	this.secondInput = element(by.model("second"));
	this.goButton = element(by.id("gobutton"));
	this.getResult = element(by.css("h2[class='ng-binding']"));
	this.getResultText = element(by.css("h2[class='ng-binding']"));
	//this.URL = browser.get('http://juliemr.github.io/protractor-demo/');
	this.getURL = function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
	};
}
//Create a global object--now go to CopyElementBasics.js file
module.exports = new SeeCopyElementBasicsJsFile();