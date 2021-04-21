const registerForm = document.querySelector("#register-form");





registerForm.addEventListener("submit", e => {
  e.preventDefault();

  // registration process
  // get all the values of the fields needed to create a new user (as in your schema)

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const mobileNumber = document.querySelector("#mobile-number").value;
  const emailAddress = document.querySelector("#email-address").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  // simple data validation
  const dataValid =
    firstName !== "" &&
    lastName !== "" &&
    mobileNumber.length === 13 &&
    emailAddress !== "" &&
    password === confirmPassword &&
    password !== "" &&
    confirmPassword !== "";
  
  if(dataValid){
    fetch("https://alvinacosta-csp2-app-server.herokuapp.com/api/users/check-email")
      .then(res => res.json())
      .then(data => {
      
      if(!data.data){
        
          if (dataValid) {
 
            fetch(
              "https://alvinacosta-csp2-app-server.herokuapp.com/api/users/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  firstName,
                  lastName,
                  password,
                  emailAddress,
                  mobileNumber
                })
              }
            )
              .then(res => res.json())
              .then(data => {
                if (data.data) {
                  window.location.replace("/login.html");
                } else {
                  alert("User created unsuccessfully..");
                }
              });
                  }  
        
      }
      
    });
  }
  
  

  // if (dataValid) {
  //   // send request
  //   fetch(
  //     "https://alvinacosta-csp2-app-server.herokuapp.com/api/users/register",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         firstName,
  //         lastName,
  //         password,
  //         emailAddress,
  //         mobileNumber
  //       })
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.data) {
  //         window.location.replace("/login.html");
  //       } else {
  //         alert("User created unsuccessfully..");
  //       }
  //     });
  // } else {
  //   console.log("Data Invalid!");
  // }
});
