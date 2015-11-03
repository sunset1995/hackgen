require('./dom.js');
scroller = function() {
	var getScrollY = null;

	return {
		getY: function() {
			if( getScrollY !== null )
				return getScrollY();
			if(self.pageYOffset)
				getScrollY = function() { return self.pageYOffset };
			else if(document.documentElement && document.documentElement.scrollTop)
				getScrollY = function() { return document.documentElement.scrollTop };
			else getScrollY = function() { return document.body.scrollTop; };

			return getScrollY();
		},
		getMaxY: function() {
			return document.body.offsetHeight - window.innerHeight;
		}
	};
}();
