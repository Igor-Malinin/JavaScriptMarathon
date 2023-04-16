const slides = document.querySelectorAll(".slide");

// slides.map((slide) => {
// 	slide.addEventListener('click', () => {
// 		slide.classList.add('active');
// 	})
// });

slides.forEach((slide) => {
	slide.addEventListener('click', () => {
	clearActiveClasses();

		slide.classList.add('active');
	})
});

function clearActiveClasses() {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	})
};