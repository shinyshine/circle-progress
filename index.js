var CircleProgress = {
	wrapper: null,
	circleLeft: null,
	circleRight: null,
	totalHeight: 0,

	init: function(json) {
		var self = this;
		this.wrapper = json.wrapper;
		this.circleLeft = document.getElementById('left');
		this.circleRight = document.getElementById('right');
		this.totalHeight = wrapper.offsetHeight;

		window.onscroll = function() {
			self.scrollProgress();
		}
	},

	scrollProgress: function() {
		var self = this;
		var topDic = document.body.scrollTop;
		total = this.totalHeight;
		var scale = topDic / total;

		self.circleToProgress(scale);
	},

	circleToProgress: function(scale) {
		var self = this;
		if(scale <= 0.5) {
			var val1 = scale * 360 - 135,
				val2 = -135;
		}else {
			var val1 = 45,
				val2 = (scale - 0.5) * 360 - 135;
		}

		self.circleRight.style.transform = 'rotate(' + val1 + 'deg)';
		self.circleLeft.style.transform = 'rotate(' + val2 + 'deg)';

	}
}

