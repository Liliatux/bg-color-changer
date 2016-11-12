(function (){
	var app = {

		red: 0,
		green: 0,
		blue: 0,
		alpha: 1,

		init: function(){
			this.listener();
		},

		listener: function(){
			$("#red").on("input", this.inputRed.bind(this));
			$("#green").on("input", this.inputGreen.bind(this));
			$("#blue").on("input", this.inputBlue.bind(this));
			$("#alpha").on("input", this.inputAlpha.bind(this));
		},

		inputRed: function(){
			this.red = $("#red").val();
			$("#textRed").text(this.red);
			this.bodyColor();
		},

		inputGreen: function(){
			this.green = $("#green").val();
			$("#textGreen").text(this.green);
			this.bodyColor();
		},

		inputBlue: function(){
			this.blue = $("#blue").val();
			$("#textBlue").text(this.blue);
			this.bodyColor();
		},

		inputAlpha: function(){
			this.alpha = $("#alpha").val();
			$("#textAlpha").text(this.alpha);
			this.bodyColor();
		},

		bodyColor: function(){
			$("body").css("background-color", "rgba("+app.red+", "+app.green+", "+app.blue+", "+app.alpha+")");
		}
	}

	app.init();
})();