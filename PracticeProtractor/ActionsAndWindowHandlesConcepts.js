describe('Actions Demo', function(){
	it('Open Posse Website', function(){
		browser.get('https://posse.com/');
		element(by.model("userInputQuery")).sendKeys("river");

		//Operations 
		//1.First move your mouse to the point
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		//--Syntax Check -- browser.actions().mouseMove(element(by.model("")).sendKeys("")).peform();
		//2.Using keyboard go down
		browser.actions.sendKeys(protractor.Key.ARROW_DOWN).perform();
		//3.Using keyboard hit enter button
		browser.actions.sendKeys(protractor.Key.ENTER).perform().then(function(){
			//Here i gave promise becuase i need to check after hitting enter which page i have visit becuase protractor is very fast
			browser.sleep(5000);
			//Now check how many items will be displayed basically count of the items

			//We can use this or below one--->> element.all(by.css("div[ng-mouseover='onSearchResultOver(searchResult)']"));
			//Well we can also use regular expression to our CSS like below meaning it will search for that sub text only

			//Jasmine Assertions
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);

			//Now let's click on one of the link
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element.all(by.css("a[ng-href*='London/River Island']")).get(0).then(function(){
				//Now clicking on the link it will open another window and that is why we are handling promise because protractor is very fast and we want to see new window open	
				browser.sleep(3000);
				//COOL STUFF
				//Lets print the TITLE of PARENT Window
				browser.getTitle().then(function(BrowserTitle){
					console.log("Print Browser Title after switching: "+BrowserTitle);
				});

				//Now learn GET WINDOW HANDLES Method meaning dealing with Multiple windows or tabs
				browser.getAllWindowHandles().then(function(WindowTabs){
					browser.switchTo.window(WindowTabs[1]);
					//Lets print the TITLE of CHILD Window
					browser.getTitle().then(function(BrowserTitle){
						console.log("Print Browser Title after switching: "+BrowserTitle);
					});
					browser.switchTo.window(WindowTabs[0]);
					browser.getTitle().then(function(BrowserTitle){
						console.log("Print Browser Title 3rd time after switching to parent again : "+BrowserTitle);
					});
				});
			});

		});
	});
});