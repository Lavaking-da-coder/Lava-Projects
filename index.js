var buttons = document.querySelectorAll(".project-card");

var button_links = {
    "yt-card": "https://www.youtube.com/@Just_LavaKing",
    "resouce-pack-card": "none",
    "gun-pack-card": "https://github.com/Lavaking-da-coder/Lava-Projects/releases/tag/Lava-gun-stuffz"
    
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        window.open(button_links[button.id], "_blank", "noopener,noreferrer");
    });
});