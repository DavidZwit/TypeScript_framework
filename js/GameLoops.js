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
}
var l_Update = new GameLoop(); //The loop for updating game logic 
var l_Start = new GameLoop(); //The array that gets called at the start
var l_Draw = new GameLoop(); //The loop for drawing
var l_Physics = new GameLoop();
//# sourceMappingURL=GameLoops.js.map