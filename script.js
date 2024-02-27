let themeDots = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

const about = `<b>Experienced Software Engineer with a demonstrated history of working in building and developing web applications. Algorithmic thinker skilled in 
Angular, Node, Docker and kubernetes. Specializes in automating and developing scalable software products. Worked on Small, Medium, and Large Scale Projects. Excels
in team management, ensuring projects meet crucial milestones. Machine Learning and deep learning enthusiast.</b>`;
document.getElementById('about_p').innerHTML = about;

if (theme == null) {
	setTheme('orange')
} else {
	setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		// console.log('option clicked', mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'cyan') {
		document.getElementById('theme-style').href = 'cyan.css'
	}
	if (mode == 'orange') {
		document.getElementById('theme-style').href = 'orange.css'
	}
	if (mode == 'red') {
		document.getElementById('theme-style').href = 'red.css'
	}
	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}
	localStorage.setItem('theme', mode)
}
