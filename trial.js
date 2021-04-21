 // if (dataValid) {
 //    fetch(
 //      "https://alvinacosta-csp2-app-server.herokuapp.com/api/users/check-email"
 //    )
 //      .then(res => res.json())
 //      .then(data => {
 //        if (!data.data) {
 //          fetch(
 //            "https://alvinacosta-csp2-app-server.herokuapp.com/api/users/register",
 //            {
 //              method: "POST",
 //              headers: {
 //                "Content-Type": "application/json"
 //              },
 //              body: JSON.stringify({
 //                firstName,
 //                lastName,
 //                password,
 //                emailAddress,
 //                mobileNumber
 //              })
 //            }
 //          )
 //            .then(res => res.json())
 //            .then(data => {
 //              if (data.data) {
 //                window.location.replace("/login.html");
 //              } else {
 //                alert("User created unsuccessfully..");
 //              }
 //            });
 //        } else {
 //          alert("email already in use");
 //        }
 //      });
 //  } else {
 //    alert("data is invalid!");
 //  }