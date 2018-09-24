exports.config = {
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['CopyElementBasics.js'],
		//onPrepare is a common global prerequisite
		onPrepare: function(){
			//It is like a BACKGROUND which will run first before all the scripts meaning a step common to all and whatever specs file we will mentioned it will be applied to them
			browser.driver.manage().window().maximize();
			//browser.waitForAngularEnabled(false);
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