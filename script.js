let myCanvas = document.querySelector('#myCanvas');
let pen = myCanvas.getContext("2d");

let gameOn = true;
let playerSpeed = 1.4;
let wonGame = false;

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
        this.speed = 0;
    }

    move(){
        this.x += this.speed
    }
}

class Finish extends Box{
    constructor(){
        super(70, 'yellow');
    }
}

myCanvas.addEventListener('mousedown', ()=>{
    player.speed = playerSpeed;
    console.log('moving');
})

myCanvas.addEventListener('mouseup', ()=>{
    player.speed = 0;
    console.log('not moving');
})

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
let e2 = new Enemy(3)
let e3 = new Enemy(4)
let finish = new Finish()
e1.x = 100
e2.x = 225
e3.x = 350
finish.x = 430
finish.y = 215

function drawBox(box){
    pen.fillStyle = box.color;
    pen.fillRect(box.x, box.y, box.size, box.size);   
}

function updateGame() {
    if(!gameOn) return;
    if(wonGame) return;
    window.requestAnimationFrame(() => {
        pen.clearRect(0, 0, 500, 500);
        e1.move();
        e2.move();
        e3.move();
        player.move();

        if(isCollided(e1, player) || isCollided(e2, player) || isCollided(e3, player)) {
            window.alert("Game Over")
            gameOn = false;
        }

        if(finished(finish, player)){
            window.alert("Game Won")
            wonGame = true;
        }

        drawBox(finish)
        drawBox(e1)
        drawBox(e2)
        drawBox(e3)
        drawBox(player)
        updateGame();
    })
}
updateGame();

function isCollided(box1, box2) {
    if( (box2.x >= box1.x-50 && box2.x <= (box1.x+50)) && (box2.y >= box1.y-50 && box2.y <= (box1.y+50)))
        return true;
}

function finished(finish, player){
    if(player.x >= finish.x+10) return true;
}