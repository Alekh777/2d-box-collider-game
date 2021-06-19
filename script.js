let myCanvas = document.querySelector('#myCanvas');
let pen = myCanvas.getContext("2d");

class Box{
    constructor(size, color){
        this.size = size;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }
}

class Player extends Box{
    constructor(){
        super(50, 'blue')
        this.x = 0;
        this.y = 225;
    }
}

class Enemy extends Box{
    constructor(speed){
        super(50, 'red')
        this.speed = speed;
    }

    move(){
        this.y += this.speed;
        if(this.y + this.size > 500){
            this.speed = -(Math.abs(this.speed))
        }
        if(this.y < 0){
            this.speed = Math.abs(this.speed)
        }
    }
}

let player = new Player()
let e1 = new Enemy(2)
let e2 = new Enemy(4)
let e3 = new Enemy(6)
e1.x = 100
e2.x = 250
e3.x = 380

function drawBox(box){
    pen.fillStyle = box.color;
    pen.fillRect(box.x, box.y, box.size, box.size);   
}

function updateGame() {
    window.requestAnimationFrame(() => {
        pen.clearRect(0, 0, 500, 500);
        e1.move();
        e2.move();
        e3.move();
        drawBox(e1)
        drawBox(e2)
        drawBox(e3)
        updateGame();
    })
}
updateGame();