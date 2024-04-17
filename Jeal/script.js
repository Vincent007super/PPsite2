const audioElements = [
    new Audio('sounds/sound1.mp3'),
    new Audio('sounds/sound2.mp3'),
    new Audio('sounds/sound3.mp3'),
    new Audio('sounds/sound4.mp3')
];

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', function () {
        const keyData = key.getAttribute('data-key');
        playSound(keyData);
    });

    key.addEventListener('mousedown', function () {
        key.classList.add('active');
    });

    key.addEventListener('mouseup', function () {
        key.classList.remove('active');
    });
});

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        playSound(key);
    }
});

document.addEventListener('keyup', function (event) {
    const key = event.key;
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
    }
});

const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', stopSounds);

function playSound(key) {
    switch (key) {
        case 'a':
            audioElements[0].currentTime = 0;
            audioElements[0].play();
            break;
        case 's':
            audioElements[1].currentTime = 0;
            audioElements[1].play();
            break;
        case 'd':
            audioElements[2].currentTime = 0;
            audioElements[2].play();
            break;
        case 'f':
            audioElements[3].currentTime = 0;
            audioElements[3].play();
            break;
    }
}

function stopSounds() {
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
