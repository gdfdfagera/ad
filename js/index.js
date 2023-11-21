document.addEventListener('keydown', function(event) {
    var leftArrowSound = document.getElementById('leftArrowSound');
    var rightArrowSound = document.getElementById('rightArrowSound');

    if (event.key === 'ArrowLeft') {
        leftArrowSound.play();
    } else if (event.key === 'ArrowRight') {
        rightArrowSound.play();
    }
});