const validation = (e) => {
	const event = e.matches ? burgerBTN.addEventListener('click', showHide) : burgerBTN.removeEventListener('click', showHide)
}
const showHide = () => menu.classList.toggle('is-active')
const menu = document.querySelector ('.header_menu')
const burgerBTN = document.querySelector('#burger-menu')
const ipad = window.matchMedia(' screen and (max-width: 767px)')
ipad.addListener(validation)
validation(ipad)

// SCREEN MODE

const screenBTN = document.querySelector('.screen-mode')
screenBTN.addEventListener('click', screenMode)
function screenMode () {
	const cssVar = document.querySelector(':root')
	screenBTN.classList.toggle('light')
	if (screenBTN.classList.contains('light')) {
		cssVar.style.cssText = `--background-color: white;
								--text-color: #24292e;
								--background-color-2: #e1e4e8;
								--border: #cfd3ce;
								--tags-background-color: #cfd3ce;
								--hover-background-color: #cfd3ce;`
	} else {
		cssVar.style.cssText = `--background-color: #010101;
								--text-color: #c9d1d9;
								--background-color-2: #0d1117;
								--border: #30363d;
								--tags-background-color: #33313b;
								--hover-background-color:#222831;`
	}
}