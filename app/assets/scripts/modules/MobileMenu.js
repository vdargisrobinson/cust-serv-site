var $ = require('jquery');

var jane = {}; 

console.log("This is printing from MobileMenu.js");

class MobileMenu {
	constructor() {
		this.banner = $(".banner");
		this.menuIcon = $("banner__menu-icon");
		this.menuContent = $("banner__menu-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		console.log("This is printing from within the MobileMenu class.");
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("banner__menu-content--is-visible");
		this.menuContent.toggleClass("banner__is-expanded");
		this.menuContent.toggleClass("banner__menu-icon--close-x");
	}
}

export default MobileMenu;
//module.exports = MobileMenu