// Purpose: To handle the contact form submission and send email using EmailJS.

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("52rAA65i3slX_xi-j");

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const button = document.getElementById("submit-button");
    const buttonText = document.getElementById("button-text");
    const loader = document.getElementById("loader");

    // Show loader and disable button
    buttonText.style.display = "none";
    loader.style.display = "inline-block";
    button.disabled = true;

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_supceif", "template_72ocejc", formData)
    .then(function (response) {
        document.getElementById("status-message").innerText = "Message sent successfully!";
        document.getElementById("status-message").style.color = "green";
      }, function (error) {
        document.getElementById("status-message").innerText = "Failed to send message. Please try again!";
        document.getElementById("status-message").style.color = "red";
      })
      .finally(() => {
        // Hide loader, enable button, reset form
        buttonText.style.display = "inline";
        loader.style.display = "none";
        button.disabled = false;
        document.getElementById("contact-form").reset();
      });
  });
});
