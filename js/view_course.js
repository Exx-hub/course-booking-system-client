// https://backup-capstone-vscode.herokuapp.com/api/users/enroll

const queryStringObject = new URLSearchParams(window.location.search);

const courseId = queryStringObject.get("id");

// send a request to retrieve specific course using id
fetch(
  `https://alvinacosta-csp2-app-server.herokuapp.com/api/courses?id=${courseId}`
)
  .then(res => res.json())
  .then(data => {
    // console.log(data);

    //display course name price description
    const { name, description, price } = data.course;

    document.querySelector("#course-name").innerHTML = name;
    document.querySelector("#course-description").innerHTML = description;
    document.querySelector("#course-price").innerHTML = price;
  });

const btnEnroll = document.querySelector("#btn-enroll");

// do not allow unauthenticated users or admins to enroll

if (userId === null || isAdmin === "true") {
  btnEnroll.style.display = "none";
} else {
  btnEnroll.addEventListener("click", event => {
    fetch("https://alvinacosta-csp2-app-server.herokuapp.com/api/users/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        courseId: courseId
      })
    })
      .then(res => res.json())
      .then(data => {
        console.dir(data);

        if (data.message) {
          alert("New enrollment to a course was successful.");
          window.location.replace("./courses.html");
        } else {
          alert("Error: New enrollment to a course encountered a problem.");
        }
      });
  });
}
