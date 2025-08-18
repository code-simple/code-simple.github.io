// Reusable "Read more" functionality
document.addEventListener("DOMContentLoaded", () => {
  const readMoreLinks = document.querySelectorAll(".read-more-link");

  readMoreLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // find the .more-text inside the same parent container
      const moreText = this.closest(".project-wrapper__text").querySelector(
        ".more-text"
      );

      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        this.textContent = "Read less";
      } else {
        moreText.style.display = "none";
        this.textContent = "Read more";
      }
    });
  });
});
