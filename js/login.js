/// https://alvinacosta-csp2-app-server.herokuapp.com/  -- original capstone heroku server
///  https://backup-capstone-vscode.herokuapp.com/ -- vscode version endpoint on heroku

if(userId) window.history.back();
 


const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const emailAddress = document.querySelector("#email-address").value;
  const password = document.querySelector("#password").value;

  const isValid = emailAddress !== "" && password !== "";

  if (isValid) {
    fetch("https://alvinacosta-csp2-app-server.herokuapp.com/api/users/login", {
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
        if (data.data) {
          // means valid login details
          // user is already registered
          // Authentication
          const { _id: userId } = data.userDetails;
          
          // Retrieve complete user details
          fetch(
            `https://alvinacosta-csp2-app-server.herokuapp.com/api/users/details?id=${userId}`
          )
            .then(res => res.json())
            .then(data => {
              console.log(data);

              localStorage.setItem("userId", data.userDetails._id);
              localStorage.setItem("isAdmin", data.userDetails.isAdmin);
              localStorage.setItem("firstName", data.userDetails.firstName);
              alert("Succesful login!");
              window.location.replace("./courses.html");
            });
        } else {
          // user not registered
          alert("Unregistered email or incorrect password.");
        }
      });
  } else {
    alert("Missing fields!");
  }
});


