document.getElementById("year").textContent = new Date().getFullYear();

    // Demo-only form response. Connect Formspree, EmailJS or your own backend to receive enquiries.
    document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("formNote").textContent =
        "Thank you! This demo form is ready for backend integration.";
      this.reset();
    });

    // Close the collapsed mobile menu after a navigation link is selected.
    document.querySelectorAll("#mainNav .nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        const nav = document.getElementById("mainNav");
        if (nav.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
      });
    });
