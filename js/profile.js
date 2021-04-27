const profileContainer = document.querySelector('#profile-container');


if(!userId){
  window.location.replace('./login.html')
} else {
  alert('User is logged in!')
}