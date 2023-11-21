var divs = document.querySelectorAll('.card');

function changeColor(element, isMouseOver) {
    if (isMouseOver) {
        element.style.backgroundColor = 'rgb(181, 181, 181)';
        element.style.transform = 'scale(1)';
    } else {
        element.style.backgroundColor = 'white';
        element.style.transform = 'scale(1)';
    }
}

divs.forEach(function(div) {
    div.addEventListener('mouseover', function() {
        changeColor(div, true);
    });

    div.addEventListener('mouseout', function() {
        changeColor(div, false);
    });
});