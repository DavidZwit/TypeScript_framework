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
//# sourceMappingURL=Game.js.map