const profileContainer = document.querySelector("#profile-container");

if (localStorage.getItem("userId") === null) {
  window.location.replace("./login.html");
} else {
  fetch(`https://alvinacosta-csp2-app-server.herokuapp.com/api/users/details?id=${}`,{
    method: "",
    headers:
  })
    .then(res => res.json())
    .then();
}
