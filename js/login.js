const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  
  
  
  const emailAddress = document.querySelector('#email-address').value;
  const password = document.querySelector('#password').value;
  
  const isValid = emailAddress !== "" && password !== "";
  
  if(isValid){
    console.log(emailAddress);
    console.log(password);
    
    // fetch(path,option)
    // .then(cb)
    // .then(cb)
    
  } else {
    alert("Missing fields!")
  }

})