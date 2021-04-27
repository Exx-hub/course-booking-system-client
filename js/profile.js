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
              <section class="my-5">
              <div class="mb-3">
              <label for="first-name" class="form-label">First Name</label>
              <input type="text" class="form-control" id="first-name" value="${firstName}" readOnly>
              </div>
              
              <div class="mb-3">
              <label for="last-name" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="last-name" value="${lastName}" readOnly>
              </div>
              
              <div class="mb-3">
              <label for="email-address" class="form-label">Email address</label>
              <input type="text" class="form-control" id="email-address" value="${emailAddress}" readOnly>
              </div>
              
             
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
