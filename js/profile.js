const profileContainer = document.querySelector("#profile-container");

let uId = localStorage.getItem("userId");

if (uId === null && typeof uId !== "string") {
  window.location.replace("./login.html");
} else {
  fetch(
    `https://alvinacosta-csp2-app-server.herokuapp.com/api/users/details?id=${uId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      let {
        firstName,
        lastName,
        emailAddress,
        mobileNumber,
        enrollments
      } = data.userDetails;

      // Display data on fronend
      profileContainer.innerHTML = `
              <div class="col-md-12">
              <section class="jumbotron my-5">
              <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <h3 class="text-center">First Name: ${firstName}</h3>
              <h3 class="text-center">Last Name: ${lastName}</h3>
              <h3 class="text-center">Email: ${emailAddress}</h3>
              <h3 class="mt-5">Enrollment History</h3>
                <table class="table">
                <thead>
                <tr>
                  <th> Course ID </th>
                  <th> Enrolled On </th>
                  <th> Status </th>
                </tr>
                </thead>
                  <tbody>
                    ${enrollments}
                  </tbody>
                </table> 
            </section>
            </div>
      `;
    });
}
