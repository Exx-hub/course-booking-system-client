const createCourse = document.querySelector("#admin-button");

console.log(isAdmin);
console.log(userId);

if (!isAdmin || isAdmin === "false") {
  createCourse.innerHTML = null;
}
