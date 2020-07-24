## Form Validation Using Pure JavaScript

Four fields and everything should be added with javascript in run-time. Classes can be defined but should be attached in JS.
1. Name: is required and length > 3
2. Email: Valid email and is required
3. Password: length > 6 and is required
4. Confirm Password: should be equal to Password
On clicking, Submit should trigger the validation.
Error message should be shown exactly below the input field
Border color should be red if there is an error
Border color should be green if there is no error and no error message should show

// form.js
function Form(){
}

// main.js
var form  = new Form();

// validate.js
function email(value){
return true if valid else return false;
}

function username(){
	//write your rules and conditions
return true if valid else return false;	
}