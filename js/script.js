// EmailJS Init
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

// Modal logic
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("status");

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      status.innerText = "Form submitted successfully!";
      this.reset();
    }, (err) => {
      status.innerText = "Failed to send. Try again.";
      console.error(err);
    });
});
