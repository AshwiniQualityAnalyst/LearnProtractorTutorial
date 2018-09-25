//Jasmine Reporting Package
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['JasmineDataProviderExample.js'],
		//onPrepare is a common global prerequisite
		onPrepare: function(){
			//It is like a BACKGROUND which will run first before all the scripts meaning a step common to all and whatever specs file we will mentioned it will be applied to them
			browser.driver.manage().window().maximize();
			//browser.waitForAngularEnabled(false);
			//Implement Jasmine Repoting Plugin below
			jasmine.getEnv().addReporter(
					new Jasmine2HtmlReporter({
						savePath: 'target/screenshots'
					})
			);
		}, //Everytime Put comma here when adding new thing inside onPrepare

		//Now this is when we want to run test suite---VERY IMPORTANT CONCEPT
		suites:
		{
			Smoke: ['Alerts.js', 'DropDown.js'], //when running multiple files use >>['script1.js', 'script2.js', ..... ]
			Regression: 'Alerts.js'  //when running single files use just one filename.js
		}, //Everytime Put comma here when adding new thing inside onPrepare

		//After creating suites configure this in PACKAGE.JSON

		// Options to be passed to Jasmine-node.
		jasmineNodeOpts: {
			showColors: true, // Use colors in the command line report.
		}
};


//If you want to run in FIREFOX browser
/*exports.config = {
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['ElementBasics.js']
		capabillities:{
		'browserName': 'firefox'
		}
}*/

//If you want to run in IE browser
//first downlaod the IE driver
//run the command  webdriver-manager update --ie

/*exports.config = {
		seleniumAddress: 'http://localhost:4444/wd/hub', //direct connect
		specs: ['ElementBasics.js']
		capabillities:{
		'browserName': 'internet explorer'
		}
}*/