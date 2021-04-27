let loggedIn = localStorage.getItem('userId');
let admin = localStorage.getItem("isAdmin");

if(!loggedIn){
  window.location.replace('./login.hmtml');
} else {
  
}
