contt queryStringObject = new URLSearchParams(window.location.search);

const courseId = queryStringObject.get("id");

 // send a request to retrieve specific course using id
fetch(`https://alvinacosta-csp2-app-server.herokuapp.com/api/courses?id={courseId}`, )


