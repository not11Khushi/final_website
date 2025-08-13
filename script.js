document.addEventListener("DOMContentLoaded", function () {
  const projectCard = document.querySelector(".project-p");
  const overlay = document.getElementById("video-overlay");
  const introVideo = document.getElementById("intro-video");
  const quote = document.querySelector(".quote-text"); // Change selector to your actual quote element

  if (!projectCard) {
    console.error("Project image (.project-p) not found!");
    return;
  }

  projectCard.addEventListener("click", function (event) {
    event.preventDefault(); // stop immediate link

    // Show overlay & hide homepage
    overlay.classList.add("show");
    document.body.style.overflow = "hidden"; // disable scrolling
    introVideo.currentTime = 0;

    // Hide the quote when video starts
    if (quote) {
      quote.style.visibility = "hidden";
    }

    introVideo.play();

    // Fade out overlay after 3.5 seconds
    setTimeout(function () {
      overlay.classList.remove("show");
    }, 3500);

    // Redirect after 3 seconds
    setTimeout(function () {
      if (quote) {
        quote.style.visibility = "visible"; // Show the quote back before redirect
      }
      window.location.href = "ethnoindex.html";
    }, 3000);
  });
});

window.open(
  "https://www.instagram.com/sollertia_ars?igsh=MWM1ODlnMXR0ZTFneA==",
  "_blank"
);
