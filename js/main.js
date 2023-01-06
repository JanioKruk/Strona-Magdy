const dropDown = document.querySelector('.dropdown-mobile__box')
const dropDownButton = document.querySelector('.dropdown-mobile')
const allDropDownItems = document.querySelectorAll('.dropdown-mobile__item')
const navMobile = document.querySelector('.nav-mobile')
const navButton = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__item--animation')
const allNavItemsClick = document.querySelectorAll('.mobile-click')

const handleDropDown = () => {
	dropDown.classList.toggle('dropdown-mobile__box--active')

	handleDropDownAnimation()
}

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile--active')
	navButton.classList.toggle('is-active')
	
	allNavItemsClick.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
			navButton.classList.remove('is-active')
			dropDown.classList.remove('dropdown-mobile__box--active')
		})
	})
	navButton.addEventListener('click', () => {
		dropDown.classList.remove('dropdown-mobile__box--active')
	})
	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}
const handleDropDownAnimation = () => {
	let delayTime = 0

	allDropDownItems.forEach(item => {
		item.classList.toggle('dropdown-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

dropDownButton.addEventListener('click', handleDropDown)
navButton.addEventListener('click', handleNav)
