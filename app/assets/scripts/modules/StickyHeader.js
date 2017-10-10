var $ = require('jquery');
var waypoints = require('../../../../node_modules/waypoints/lib/noframework.waypoints');

class StickyHeader {
	constructor() {
		this.banner = $(".banner");
		this.bannerTriggerElement = $(".tile-container");
		this.createBannerWaypoint;
	}

	createBannerWaypoint() {
		that = this;
		new Waypoint({
			element: this.bannerTriggerElement[0],
			handler: function(direction) {
				if (direction == "down") {
					that.banner.addClass("banner--light");
				} else {
					that.banner.removeClass("banner--light");
				}
			}
		}); 
	}
}

export default StickyHeader;