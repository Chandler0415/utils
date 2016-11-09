/**
 * jquery plugin
 */
(function() {
	$.fn.scrollToTop = function(scrollHeight, duration) {
		var $el = this;
		var startPostion = $el.scrollTop();
		var delta = scrollHeight - startPostion;

		var startTime = Date.now();

		function scroll() {
			var fraction = Math.min(1, (Date.now() - startTime) / duration);
			$el.scrollTop(delta * fraction + startPostion);
			if (fraction < 1) {
				setTimeout(scroll, 10);
			}
		}
		scroll();
	}
})();