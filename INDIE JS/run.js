window.onload = function() {
	let btn = document.getElementById("start");
	let count = 0;
	var t = Date.now();
	var speed = 25;
	var y = 200 ;

	document.onkeydown = function(){
		count += 1;
		y -= 25;
 
		function ball(){
			var timePassed = (Date.now() - t)/1000;
			t = Date.now();
		
			if(y < 350) {
		 		speed += timePassed*y;
				y += speed*timePassed;
				
			}
			if(y <= 50) {
				y += 50;
			}
			if(y >= 350) {
				count = 0;
			}
		
			context.clearRect(0,0,600,400);
				
			context.beginPath();
			context.arc(x, y, 50, 0, 2 * Math.PI);
			context.fillStyle="red";
			context.fill();

			context.font = '25px Arial';
			context.fillStyle="black";
			context.fillText("Count : "+count,20,30);
				
			window.requestAnimationFrame(ball);
		
		}ball();
		speed = 25;		
	}
	

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = 300;
	var y = 200;

	context.arc(x, y, 50, 0, 2 * Math.PI);
	context.fillStyle=red;
	context.fill();

}