exports.config = {
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['Alerts.js']
}

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