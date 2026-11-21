var buttons = document.querySelectorAll(".project-card");

var button_links = {
    "yt-card": "https://www.youtube.com/@Just_LavaKing",
    "gun-pack-card": "diddy.com"
    
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        window.open(button_links[button.id], "_blank", "noopener,noreferrer");
    });
});