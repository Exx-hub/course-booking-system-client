let isAdmin = localStorage.getItem("isAdmin");
// console.log(isAdmin)

let userId = localStorage.getItem("userId");
console.log(typeof userId)
console.log(userId)


// select all nav elements if user is logged in
let userInNavs = document.querySelectorAll('.userIn');
console.log(userInNavs)

// select all nav elements if user is logged out
let userOutNavs = document.querySelectorAll('.userOut');
console.log(userOutNavs)


if(userId !== null){
  
}