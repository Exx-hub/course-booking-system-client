const createCourse = document.querySelector("#admin-button");

if (!isAdmin || isAdmin === "false") {
  createCourse.innerHTML = null;
}
