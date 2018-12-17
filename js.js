var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
/*
//square
c.fillStyle = 'rgba(255,0,0,0.3)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0,0,255,0.3)';
c.fillRect(200, 200, 100, 100);

//line
c.beginPath();
c.moveTo(100, 200);
c.lineTo(200, 300);
c.lineTo(200,100);
c.lineTo(300, 100);
c.lineTo(300,200);
c.strokeStyle= 'rgba(255,0,0,0.4)';
c.stroke();

//circle
c.beginPath();
c.arc(300,300,30,0, Math.PI * 2, false);
c.strokeStyle = 'rgba(0,255,0,0.3)'
c.stroke();

for (i=0; i<100; i++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0, Math.PI * 2, false);
    c.strokeStyle = 'rgba(0,0,0,0.3)'
    c.stroke();
}
*/
function Circle(x,y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this. radius = radius;
    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
        c.strokeStyle = 'rgba(0,0,0)';
        c.stroke();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circle = new Circle(200,200, 3, 3, 30)


var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;
function animate () {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    circle.update();
   

   
}
animate();