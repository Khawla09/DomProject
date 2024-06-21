const form = document.getElementById("login-form");
const userName = form.elements["username"];
const password = form.elements["password"];
// console.log(userName.value);
form.addEventListener("submit", validate);
function validate(e) {
  e.preventDefault();
  const userVal = validateUser();
  if (userVal === false) {
    e.returnValue = false;
    return false;
  }
  const passVal = validatePass();
  if (passVal === false) {
    e.returnValue = false;
    return false;
  }
  //   alert(`userName: ${userVal}
  //   Password: ...that's a secret.`);
  alert("Signed in successfully");
  return true;
}
function validateUser() {
  if (userName.value === "") {
    alert("Please provide a name.");
    userName.focus();
    return false;
  }
  return userName.value;
}
function validatePass() {
  if (password.value === "") {
    alert("Please provide a password.");
    password.focus();
    return false;
  }
  return password.value;
}
