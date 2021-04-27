const profileContainer = document.querySelector("#profile-container");

let uId = localStorage.getItem("userId");

if (uId === null && typeof uId !== "string") {
  window.location.replace("./login.html");
} else {
  fetch(
    `https://alvinacosta-csp2-app-server.herokuapp.com/api/users/details?id=${uId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      let {
        firstName,
        lastName,
        emailAddress,
        mobileNumber,
        enrollments
      } = data.userDetails;
    
    // Display data on fronend
      profileContainer.innerHTML = 
    });
}
