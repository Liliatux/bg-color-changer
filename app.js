(function (){
	var app = {

		red: null,
		green: null,
		blue: null,

		init: function(){
			this.listener();
		},

		listener: function(){
			$("#red").on("input", this.inputRed.bind(this));
			$("#green").on("input", this.inputGreen.bind(this));
			$("#blue").on("input", this.inputBlue.bind(this));
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

		bodyColor: function(){
			$("body").css("background-color", "rgb("+app.red+","+app.green+","+app.blue+")");
		}
	}

	app.init();
})();