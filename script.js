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
    constructor(){
        super(50, 'red')
    }
}