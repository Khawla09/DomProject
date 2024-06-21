const form = document.querySelector("#registerForm");
const names = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const gender = form.elements["gender"];
const password = form.elements["password"];
// const passRegExp =
//   "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/";
form.addEventListener("submit", validate);
function validate(e) {
  e.preventDefault();

  const nameVal = validateName();
  if (nameVal === false) {
    e.returnValue = false;
    return false;
  }
  const emailVal = validateEmail();
  if (emailVal === false) {
    e.returnValue = false;
    return false;
  }
  const zipVal = validateZip();
  if (zipVal === false) {
    e.returnValue = false;
    return false;
  }
  const genderVal = validateGender();
  if (genderVal === false) {
    e.returnValue = false;
    return false;
  }
  const passwordVal = validatePass();
  if (passwordVal === false) {
    e.returnValue = false;
    return false;
  }

  alert("Registered Successfully!!!");
  return true;
}
//functions
function validateName() {
  if (names.value === "") {
    alert("please provide your name.");
    names.focus();
    return false;
  }
  return names.value;
}
function validateEmail() {
  let emailVal = email.value;
  if (emailVal === "") {
    alert("Please provide an email.");
    email.focus();
    return false;
  }

  return emailVal;
}
function validateZip() {
  if (zip.value === "") {
    alert("Please enter your zip code");
    zip.focus();
    return false;
  }
  if (zip.value.length !== 5) {
    alert("Zip codes must be in the format #####");
    zip.focus();
    return false;
  }
  return zip.value;
}
function validateGender() {
  if (gender.value === "") {
    alert("Please provide a country");
    gender.focus();
    return false;
  }
  return gender.value;
}
function validatePass() {
  if (password.value === "") {
    alert("Please provide a password");
    password.focus();
    return false;
  }
  //
  return password.value;
}

//add an event to validate format of the password

//   const atindex = emailVal.indexOf("@");
//   const dotindex = emailVal.indexOf(".");
//   if (atindex < 1) {
//     alert(
//       "Your email must include an @ symbol which must not be at the beginning of the email."
//     );
//     email.focus();
//     return false;
//   }
//   if (dotindex - atindex < 2) {
//     alert(
//       "Invalid structure: @.\nYou must include a domain name after the @ symbol."
//     );
//     email.focus();
//     return false;
//   }
