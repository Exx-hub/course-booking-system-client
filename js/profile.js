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
				"Content-Type": "application/json",
			},
		}
	)
		.then((res) => res.json())
		.then((data) => {
			let {
				firstName,
				lastName,
				emailAddress,
				mobileNumber,
				enrollments,
			} = data.userDetails;

			console.log(enrollments);

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
                <th> Course </th>
                <th> Enrolled On </th>
                <th> Status </th>
              </tr>
              </thead>
                <tbody id="t-body">
                </tbody>
              </table> 
          </section>
      `;

			// target the table body
			let body = document.querySelector("#t-body");

			// loop through each enrollment
			// insert table data for name,date and status in a table row
			// of each enrollment
			// then append table row to table body
			enrollments.forEach((item) => {
				var trow = document.createElement("TR");
				var nameNode = document.createElement("TD");
				var courseNode = document.createElement("TD");
				var statusNode = document.createElement("TD");
				var coursename = document.createTextNode(`${item.courseName}`);

				var toString = new Date(`${item.enrolledOn}`).toDateString().slice(4);
				var date = document.createTextNode(`${toString}`);
				var status = document.createTextNode(`${item.status}`);
				nameNode.appendChild(coursename);
				courseNode.appendChild(date);
				statusNode.appendChild(status);

				trow.appendChild(nameNode);
				trow.appendChild(courseNode);
				trow.appendChild(statusNode);
				body.appendChild(trow);
			});
		});
}
