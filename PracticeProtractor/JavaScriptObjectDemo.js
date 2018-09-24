function car(){

	this.color = "red";
	this.engine = "turbo";
	this.brand = "BMW";
	this.search = "by.css('input')";

	this.getModel = function(){
		console.log("this is 2020 model");
	};

}; 	

/*var object = new car();
 * 
 object.getModel();

 */

/*
 * 
console.log(object.color);
console.log(object.engine);
console.log(object.brand);

 */
//Line 14 to 26 will work for existing class

//Create another file JavaScriptObjectDemo1 for calling above functions in another file
//Steps--1. Expose the object globally with below syntax
module.exports = new car();

//Steps--2. Create another file JavaScriptObjectDemo1
//Use require keyword to inherit the property of child class, go to 2nd file
// Syntax require("./JavaScriptObjectDemo.js")