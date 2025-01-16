const shareButton = document.getElementById("share");
const shareIcon = shareButton.querySelector(".share-icon");
const otherIcons = document.querySelectorAll('.fb-icon, .twit-icon, .pint-icon, .value');

function toggleIconsVisibility(show) {
    otherIcons.forEach(icon => {
        icon.style.display = show ? 'block' : 'none';
    });
}

shareButton.addEventListener('mouseover', () => {
    toggleIconsVisibility(true);
});

shareButton.addEventListener('mouseout', () => {
    toggleIconsVisibility(false);
});