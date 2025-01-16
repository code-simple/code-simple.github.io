// Add "Read more" functionality
document.addEventListener("DOMContentLoaded", () => {
  const readMoreLink = document.querySelector(".read-more-link");
  const moreText = document.querySelector(".more-text");

  if (readMoreLink && moreText) {
    readMoreLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        this.textContent = "Read less";
      } else {
        moreText.style.display = "none";
        this.textContent = "Read more";
      }
    });
  }
});
