const socket = io();

document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', () => {
        const song = button.getAttribute('data-song');
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = `/static/songs/${song}`;
        audioPlayer.play().catch(error => {
            console.error("Error playing audio:", error);
        });
        socket.emit('play_song', song);
    });
});

socket.on('play_song', (song) => {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = `/static/songs/${song}`;
    audioPlayer.play().catch(error => {
        console.error("Error playing audio:", error);
    });
});