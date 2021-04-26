let isAdmin = localStorage.getItem("isAdmin");
// console.log(isAdmin)

let userId = localStorage.getItem("userId");
let firstName = localStorage.getItem("firstName");
console.log(firstName)



// select all nav elements if user is logged in
let userInNavs = document.querySelectorAll('.userIn');
console.log(userInNavs)

// select all nav elements if user is logged out
let userOutNavs = document.querySelectorAll('.userOut');
console.log(userOutNavs)


if(userId !== null && typeof userId === 'string'){
  
  userInNavs.forEach(item => item.classList.toggle("hidden"));
 
  userOutNavs.forEach(item => item.classList.toggle("hidden"));
}


// logout the user
let logOutLink = document.querySelector('#log-out');

logOutLink.addEventListener('click', (e) => {
    localStorage.clear();
  window.location.replace('/login.html');
})


let name = localStorage.getItem('firstName')

let profileLink = document.querySelector('#profile-link');


profileLink.innerText = name;