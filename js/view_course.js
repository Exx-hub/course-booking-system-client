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
  const {name, description, price} = data.course;
  
  document.querySelector("#course-name").innerHTML = name;
  document.querySelector("#course-description").innerHTML = description;
  document.querySelector("#course-price").innerHTML = price;
  });


