const board = document.querySelector('#board')

const colors = ['rgb(204, 109, 109)', 'rgb(204, 198, 109)', 'rgb(117, 204, 109)', 'rgb(109, 185, 204)', 'rgb(109, 96, 223)', 'rgb(162, 96, 223)', 'rgb(223, 96, 223)']

const SQUARES_NUMBER = 500;

const aud = new Audio();
aud.src = 'https://www.winhistory.de/more/winstart/down/owfw311.wav'

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        console.log('dadada')
        setColor(square)
        aud.play();
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)

        aud.stop();
    })

    board.append(square)
}

HTMLAudioElement.prototype.stop = function () {
    this.pause();
    this.currentTime = 0.0;
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}