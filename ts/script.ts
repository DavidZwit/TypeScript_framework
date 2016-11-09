
function exeDelegate(obj : GameLoop, ...param ) {
    for (let i = 0; i < obj.objArray.length; i++) {
        for (let key in obj.objArray[i]) {

            if (param.length > 0) obj.objArray[i][key](param);
            else obj.objArray[i][key]();
        
        }
    } 
}


//The main update loop
var MainUpdate = function () {
    GD.ctx.clearRect(0, 0, GD.WIDTH, GD.HEIGHT);
    
    //collision
    exeDelegate(l_Physics);
    exeDelegate(l_Update);
    exeDelegate(l_Draw, GD.ctx);
} 

//Game Data
class GD {
    static WIDTH : number;
    static HEIGHT : number;

    static c : any; 
    static ctx : any;

    static deltaTime : number;
    static gameTime : number;
    static lastFrameTime : number;

    static frameCount : number;
    private self : any;

    constructor () { this.self = this; }

    static get StageFriction () : number {
        return .002;
    }

    static get color () : Color {
        return new Color(225, 0, 225); 
    }

    static set width (newWidth : number) {
        GD.WIDTH = newWidth;
        GD.c.width = newWidth;
    }

    static get width () : number { return GD.WIDTH; }

    static set height (newHeight : number) {
        GD.HEIGHT = newHeight;
        GD.c.height = newHeight;
    }

    static get height () : number { return GD.HEIGHT; }
}

function loadCanvas(name : string, size : Vector2) {
    GD.c = document.getElementById(name);
    GD.ctx = GD.c.getContext('2d');
    GD.c.width = GD.WIDTH = size.x;
    GD.c.height = GD.HEIGHT = size.y;
    GD.c.style.outline = 'dashed';
}

window.addEventListener('resize', () => {
    GD.width = window.innerWidth;
    GD.height = window.innerHeight;
});

loadCanvas('mainCanvas', new Vector2(window.innerWidth / 1.015, window.innerHeight/1.015));

window.addEventListener('load', () => {
    //---Starting start :)---\\
    GD.frameCount = 0;
    
    let startGame = Date.now();
    GD.gameTime = 0;
    GD.lastFrameTime = startGame - Date.now();

    GD.deltaTime = 0;

    exeDelegate(l_Start);
    //---Starting loop---\\
    ! function loop() {

        GD.gameTime = (Date.now() -startGame) / 100;

        GD.deltaTime = GD.gameTime - GD.lastFrameTime;
        
        GD.frameCount++;
        MainUpdate();
        window.requestAnimationFrame(loop);

        GD.lastFrameTime = GD.gameTime;
    }();
});