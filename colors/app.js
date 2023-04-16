const board = document.querySelector('#board')
const colors = ['#DE5D83', '#FFF0F5', '#FFBCD9', '#F0DC82', '#D0F0C0', '#D35339', '#F8173E', '#49678D']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => {
		setColor(square)
	})

	square.addEventListener('mouseleave', () => {
		removeColor(square)
	})

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(element) {
	const idx = Math.floor(Math.random() * colors.length)
	return colors[idx]
}