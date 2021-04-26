let isAdmin = localStorage.getItem("isAdmin");
console.log(isAdmin)

let userId = localStorage.getItem("userId");
console.log(userId)

const createCourse = document.querySelector('#admin-button');


if(!isAdmin || isAdmin === "false") {
    createCourse.innerHTML = null;
} else {
  
}

