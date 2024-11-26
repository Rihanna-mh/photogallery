function showYear(year) {
  // Get all images
  const images = document.querySelectorAll("img");

  // Show or hide images based on the year selected
  images.forEach((img) => {
    if (img.classList.contains(year)) {
      img.style.display = "block"; // Show image
    } else {
      img.style.display = "none"; // Hide image
    }
  });
}
