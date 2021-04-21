const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  

  // registration process
  // get all the values of the fields needed to create a new user (as in your schema)
  
const firstName = document.querySelector('#first-name').value;
const lastName = document.querySelector('#last-name').value;
const mobileNumber = document.querySelector('#mobile-number').value;
const emailAddress = document.querySelector('#email-address').value;
const password = document.querySelector('#password').value;
const confirmPassword = document.querySelector('#confirm-password').value;
  

// simple data validation 
const isUserDataValid = (firstName !== "" && lastName !== "" && mobileNumber.length === 11 && emailAddress !== "" && password === confirmPassword && password !== "" && confirmPassword !== "") 
  
})