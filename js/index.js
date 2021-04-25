const validation = (e) => {
	const event = e.matches ? burgerBTN.addEventListener('click', showHide) : burgerBTN.removeEventListener('click', showHide)
}
const showHide = () => menu.classList.toggle('is-active')
const menu = document.querySelector ('.header_menu')
const burgerBTN = document.querySelector('#burger-menu')
const ipad = window.matchMedia(' screen and (max-width: 767px)')
ipad.addListener(validation)
validation(ipad)