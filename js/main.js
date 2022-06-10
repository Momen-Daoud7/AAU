const navLinks = document.getElementById("navLinks");

// Show sidebar menu
const showMenu = () => {
	navLinks.style.right = "0"
}

// Hide sidebar menu
const hideMenu = () => {
	navLinks.style.right = "-2000px"
}