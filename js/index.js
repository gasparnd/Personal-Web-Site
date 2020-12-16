const validation = (e) => {
	if (e.matches) {
		burgerButton.addEventListener('click', showHide)
	} else {
		burgerButton.removeEventListener('click', showHide)
	}
}
const showHide = () => menu.classList.toggle('is-active')
const menu = document.querySelector ('.header_menu')
const burgerButton = document.querySelector('#burger-menu')
const ipad = window.matchMedia(' screen and (max-width: 767px)')
ipad.addListener(validation)
validation(ipad)