class Game {
    constructor() {
        this.scenes = [];
        this.l_Input = new GameLoop();
    }
    addScene(scene) {
        this.scenes.push(scene);
    }
    loadScene(name) {
        if (this.currentStage != null)
            this.currentStage.clear();
        this.scenes[name].load();
        this.currentStage = this.scenes[name];
        this.coreUpdate = () => {
            GameLoop.executeLoop(this.l_Input);
            this.currentStage.update();
            return 0;
        };
    }
}
let game = new Game();
game.addScene(new Stage("mainScene", new Canvas("mainCanvas", new Vector2(800, 800)), new Camera("mainCamera")));
class GameLoop {
    constructor() {
        this.objArray = [{}, {}, {}];
    }
    addFunction(pass, func, name) {
        this.objArray[pass][name] = func;
    }
    removeFunction(pass, name) {
        try {
            delete this.objArray[pass][name];
        }
        catch (err) {
            console.log("function " + name + " was not found \n" + err);
        }
    }
    static executeLoop(obj, ...param) {
        for (let i = 0; i < obj.objArray.length; i++) {
            for (let key in obj.objArray[i]) {
                obj.objArray[i][key](param);
            }
        }
    }
}
class Canvas {
    get width() { return this.m_canvasSize.x; }
    get height() { return this.m_canvasSize.y; }
    set width(val) {
        this.c.style.width = val + "px";
        this.m_canvasSize.x = val;
    }
    set height(val) {
        this.c.style.height = val + "px";
        this.m_canvasSize.y = val;
    }
    clear() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fillStyle = 'rgba(50, 50, 50, ' + this.fade + ')';
        this.ctx.fill();
    }
    constructor(name, size, fade = .2) {
        this.c = document.getElementById(name);
        this.ctx = this.c.getContext('2d');
        this.width = size.x;
        this.height = size.y;
        this.c.style.outline = 'dashed';
        this.fade = fade;
    }
}
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
//# sourceMappingURL=GameLoopsScenes.js.map