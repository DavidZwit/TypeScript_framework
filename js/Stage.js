class Stage {
    constructor(name, canvas, camera) {
        this.doCollisions = true;
        this.doPhysics = true;
        this.doDraw = true;
        this.doUpdate = true;
        this.doUI = true;
        this.gravity = .2;
        this.friction = .2;
        this.gameobjects = [];
        this.cameras = [];
        this.l_Update = new GameLoop();
        this.l_Start = new GameLoop();
        this.l_Draw = new GameLoop();
        this.l_Physics = new GameLoop();
        this.l_Collisions = new GameLoop();
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
        };
        this.changeCamera(0);
    }
    changeCamera(numb) {
        this.activeCamera = this.cameras[numb];
    }
    pause() {
    }
    play() {
    }
    clear() {
        this.l_Update = new GameLoop();
        this.l_Start = new GameLoop();
        this.l_Draw = new GameLoop();
        this.l_Physics = new GameLoop();
        this.l_Collisions = new GameLoop();
    }
    load() {
        game.currentStage = this;
        GameLoop.executeLoop(this.l_Start);
    }
}
Stage.objects = [];
//# sourceMappingURL=Stage.js.map