const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  
  
  
  const emailAddress = document.querySelector('#email-address').value;
  const password = document.querySelector('#password').value;
  
  const isValid = emailAddress !== "" && password !== "";
  
  if(isValid){
    console.log(emailAddress);
    console.log(password);
    
    fetch("https://alvinacosta-csp2-app-server.herokuapp.com/api/users/login",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        emailAddress,
        password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.data){
        // user is already registered
        alert("Succesful login!")
        window.location.replace('./courses.html');
      } else {
        // user not registered
        alert('Please register first!')
      }
    })
    
  } else {
    alert("Missing fields!")
  }

})