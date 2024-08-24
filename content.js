// Function to toggle hiding non-video elements
function toggleHideElements() {
    document.body.classList.toggle('hide-non-video');
    console.log("Toggled hide mode.");
}

// Event listener for keydown events
document.addEventListener('keydown', function(event) {
    // Check if the 'H' key is pressed (keyCode 72, or use 'event.key' for more flexibility)
    if (event.key === 'h' || event.key === 'H') {
        toggleHideElements();
    }
});

console.log("Youtube-focus-mode event listener added.");