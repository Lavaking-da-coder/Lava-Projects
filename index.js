var buttons = document.querySelectorAll(".project-card, .project-secondary-button");

var button_links = {
    "yt-card": "https://www.youtube.com/@Just_LavaKing",
    "resouce-pack-card": "none",
    "gun-pack-card": "https://github.com/Lavaking-da-coder/Lava-Projects/releases/download/Lava-gun-stuffz/Lava.s.gun.stuffz.mrpack",
    "gun-pack-video": "https://youtu.be/7Oy4-v7WJsM?si=KAJn30qxAsFD0AAO"
    
}

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();

        window.open(button_links[button.id], "_blank", "noopener,noreferrer");
    });
});