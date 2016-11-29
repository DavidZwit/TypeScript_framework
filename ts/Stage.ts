/*
* Containing the infrommation for the stage
*/

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
