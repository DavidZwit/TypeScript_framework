/*
* The object containing the information about the canvas
*/

class Canvas {
    //The canvas
    public c : any;
    //The context on the canvas
    public ctx : any;

    //The amound the screen does a fade effect
     public fade : number;
     //The background color
     public backgroundColor : Color;
    //The size of the canvas
    private m_canvasSize : Vector2;

    get width () : number { return this.m_canvasSize.x; }
    get height () : number { return this.m_canvasSize.y; }

    set width (val : number) {
        this.c.style.width = val + "px";
        this.m_canvasSize.x = val;
    }

    set height ( val: number ) {
        this.c.style.height = val + "px";
        this.m_canvasSize.y = val;
    }

    clear () {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fillStyle = 'rgba(50, 50, 50, ' + this.fade + ')';
        this.ctx.fill();

    }

    constructor (name : string, size : Vector2, fade : number = .2) {
        this.c = document.getElementById(name);
        this.ctx = this.c.getContext('2d');
        this.width = size.x;
        this.height = size.y;
        this.c.style.outline = 'dashed';
        this.fade = fade;
    }
}
