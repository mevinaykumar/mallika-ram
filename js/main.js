document.addEventListener("DOMContentLoaded", function () {

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Demo-only form response. Connect Formspree, EmailJS or your own backend to receive enquiries.
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("formNote").textContent =
        "Thank you! This demo form is ready for backend integration.";
      this.reset();
    });
  }

  // Close the collapsed mobile menu after a navigation link is selected.
  document.querySelectorAll("#mainNav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var nav = document.getElementById("mainNav");
      if (nav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Transformation video card: play / pause
  document.querySelectorAll(".video-card").forEach(function (card) {
    var video = card.querySelector("video");
    var btn = card.querySelector(".video-toggle");
    var icon = btn.querySelector("i");

    function setState(playing) {
      card.classList.toggle("is-playing", playing);
      icon.className = playing ? "bi bi-pause-fill" : "bi bi-play-fill";
      btn.setAttribute("aria-label", playing ? "Pause video" : "Play video");
    }

    function toggle() {
      if (video.paused) {
        var p = video.play();
        if (p && p.catch) p.catch(function () { setState(false); });
      } else {
        video.pause();
      }
    }

    btn.addEventListener("click", function (e) { e.stopPropagation(); toggle(); });
    video.addEventListener("click", toggle);

    video.addEventListener("play", function () { setState(true); });
    video.addEventListener("pause", function () { setState(false); });
    video.addEventListener("ended", function () { setState(false); });
  });

});
