document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Fake form
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (test)");
});