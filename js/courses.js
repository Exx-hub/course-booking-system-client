const createCourse = document.querySelector("#admin-button");

if (!isAdmin || isAdmin === "false") {
  createCourse.innerHTML = null;
}

// retrieve all courses from databsae
fetch("https://alvinacosta-csp2-app-server.herokuapp.com/api/courses")
  .then(res => res.json())
  .then(data => {
    // console.log(data.courses);

    // filter active courses if user is authenticated or is not admin
    let coursesList;

    if (!isAdmin) {
      coursesList = data.courses.filter(course => course.isActive);
    } else {
      coursesList = data.courses;
    }

    // display all courses
    const coursesElements = coursesList.map(course => {
      return `
        <div class="col-md-6 my-3">
          <div class='card'>
              <div class='card-body'>
                  <h5 class='card-title'>${course.name}</h5>
                  <p class='card-text text-left'>
                      ${course.description}
                  </p>
                  <p class='card-text text-right'>
                     ₱ ${course.price}
                  </p>
                </div>
                  <div class='card-footer'>
                    <div class="row">
                      <div class="col-sm-12 col-md-4 mb-1">
                        <a href="./course.html?id=${course._id}" class="btn btn-outline-primary btn-block btn-course">View</a>
                      </div>
                      <div class="col-sm-12 col-md-4 mb-1">
                        <a href="./edit_course.html?id=${course._id}" class="btn btn-outline-secondary btn-block btn-course">Edit</a>
                      </div>
                      <div class="col-sm-12 col-md-4 mb-1">
                        <a href="./delete_course.html?id=${course._id}" class="btn btn-outline-danger btn-block btn-course">Delete</a>
                      </div>
                  </div>
               </div>
            </div>
        </div>
        `;
    });

    // display courses fetched from database on the course page
    document.querySelector(
      "#courses-container"
    ).innerHTML = coursesElements.join("");
  });
