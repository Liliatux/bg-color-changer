(function (){
	var app = {

		red: $("#red").val(),
		green: $("#green").val(),
		blue: $("#blue").val(),

		init: function(){
			this.listener();
		},

		listener: function(){
			$("#red").on("input", this.valInput);
		},

		valInput: function(){
			var val = $(this).val();
			$("label").text(val);
		},

		bodyColor: function(){
			$("body").css("background", "rgb("+app.red+","+app.green+","+app.blue+")");
		}
	}

	app.init();
})();