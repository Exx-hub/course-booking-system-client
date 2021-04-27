
// Check if a user is logged-in, if not redirect the user to login page
// Otherwise, display an alert message that a user is currently logged-in
if (userId !== null && typeof userId === "string") {
  // User is logged-in
  // Check if user is not an admin
  if (isAdmin === "false") {
    history.back();
  }
} else {
  // User is not logged-in
  window.location.replace("./login.html");
}