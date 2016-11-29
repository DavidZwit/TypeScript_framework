/*
*The class holding all the core information
*/

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
