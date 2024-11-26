function showYear(year) {
  // Get all images
  const images = document.querySelectorAll("img");

  // Show or hide images based on the year selected
  images.forEach((img) => {
    if (year === "All") {
      img.style.display = "block"; // Show all images
    } else if (img.classList.contains(year)) {
      img.style.display = "block"; // Show images that match the selected year
    } else {
      img.style.display = "none"; // Hide images that do not match
    }
  });
}
