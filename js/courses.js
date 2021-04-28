const createCourse = document.querySelector("#admin-button");

if (!isAdmin || isAdmin === "false") {
  createCourse.innerHTML = null;
}



// retrieve all courses from databsae
fetch("https://alvinacosta-csp2-app-server.herokuapp.com/api/courses")
  .then(res => res.json())
  .then(data => {
    // console.log(data.courses);
  
    // display courses fetched from database on the course page  
  });
