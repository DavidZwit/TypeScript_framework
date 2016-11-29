
class Game {
    public currentStage : Stage;
    public scenes : Stage[] = [];

    public l_Input : GameLoop;
    //The core update
    public coreUpdate : () => {};

    constructor () {
        this.l_Input = new GameLoop(); // The loop that acounds for reading input
    }

    addScene (scene : Stage) {
        this.scenes.push(scene);
    }

    loadScene (name : string) {
        if (this.currentStage != null)
            this.currentStage.clear();

        this.scenes[name].load();
        this.currentStage = this.scenes[name];

        this.coreUpdate = () => {
            GameLoop.executeLoop(this.l_Input);
            this.currentStage.update();
            return 0;
        }
    }
}

/* Creating the game!! */
let game = new Game();

game.addScene(
    new Stage(
        "mainScene",
        new Canvas("mainCanvas", new Vector2(800, 800 )),
        new Camera ("mainCamera")
    )
);

class GameLoop {
    objArray : [{}];

    constructor() {
        this.objArray = [{}, {}, {}];
    }

    addFunction ( pass : number , func : (...any) => {}, name : string ) {
        this.objArray[pass][name] = func;
    }

    removeFunction ( pass : number, name : string) {
        try {
            delete this.objArray[pass][name];
        } catch (err) {
            console.log("function " + name + " was not found \n" + err);
        }
    }

    static executeLoop(obj : GameLoop, ...param ) {
        for (let i = 0; i < obj.objArray.length; i++) {
            for (let key in obj.objArray[i]) {

                obj.objArray[i][key](param);

            }
        }
    }
}

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


class Stage {

  public l_Update : GameLoop;
  public l_Start : GameLoop;
  public l_Draw : GameLoop;
  public l_Physics : GameLoop;
  public l_Collisions : GameLoop;
  public l_UI : GameLoop;

  public doCollisions : boolean = true;
  public doPhysics : boolean = true;
  public doDraw : boolean = true;
  public doUpdate : boolean = true;
  public doUI : boolean = true;

  public name : string;

  public gravity : number = .2;
  public friction : number = .2;

  public gameobjects : GameObject[] = [];
  public cameras : Camera[] = [];
  public activeCamera : Camera;

  static objects = [];

  public canvas : Canvas;

  public update : () => {};

  constructor (name : string, canvas : Canvas, camera : Camera) {
      this.l_Update = new GameLoop(); //The loop for updating game logic
      this.l_Start =  new GameLoop();  //The array that gets called at the start
      this.l_Draw =  new GameLoop();  //The loop for drawing
      this.l_Physics = new GameLoop(); //The physics loop
      this.l_Collisions = new GameLoop(); //The collisions loop
      this.l_UI = new GameLoop();

      this.name = name;
      game.scenes[this.name] = this;
      this.canvas = canvas;

      this.update = () => {
            if (this.doCollisions == true)
                GameLoop.executeLoop(this.l_Collisions);
            if (this.doPhysics == true)
                GameLoop.executeLoop(this.l_Physics);
            if (this.doUpdate == true)
                GameLoop.executeLoop(this.l_Update);
            if (this.doDraw == true)
                GameLoop.executeLoop(this.l_Draw, this.canvas);
            if (this.doUI == true)
                GameLoop.executeLoop(this.l_UI);

          return 0;
      }
      this.changeCamera(0);
  }

  changeCamera (numb : number) {
      this.activeCamera = this.cameras[numb];
  }

  pause () {

  }

  play () {

  }

  clear () {
      this.l_Update = new GameLoop();
      this.l_Start =  new GameLoop();
      this.l_Draw =  new GameLoop();
      this.l_Physics = new GameLoop();
      this.l_Collisions = new GameLoop();
  }

  load () {
      game.currentStage = this;
      GameLoop.executeLoop(this.l_Start);

      // instantiate all the objects
  }
}
