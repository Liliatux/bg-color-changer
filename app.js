(function (){
	var app = {

		red: 0,
		green: 0,
		blue: 0,
		alpha: 1,

		init: function(){
			this.listener();
			this.bodyColor();
		},

		//Click des inputs range
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

		//Changement de la couleur background en rgba selon les inputs range
		bodyColor: function(){
			$("body").css("background-color", "rgba("+app.red+", "+app.green+", "+app.blue+", "+app.alpha+")");
			this.hexaColor();
		},

		//Affichage hexadecimal en fonction des inputs range
		hexaColor: function(){
			$("#hexa").text(function(){
		    	return "#" + ((1 << 24) + (app.red << 16) + (app.green << 8) + (app.blue << 0)).toString(16).slice(1);
			});
		}
	}

	app.init();
})();