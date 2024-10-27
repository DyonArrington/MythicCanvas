
// JavaScript for interactivity and image modal functionality
function verifyAge(isOldEnough) {
    if (isOldEnough) {
        window.location.href = 'gallery.html';
    } else {
        alert("You must be 18 or older to enter.");
    }
}

// Modal functionality for gallery images
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = src;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
    