
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "apurbosaha520@gmail.com",
    Password: "apurbosaha114911",
    To: 'likerboy594@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Phone: " + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("message").value

  }).then(
    message => alert("Message Send Successfully!")
  );
}