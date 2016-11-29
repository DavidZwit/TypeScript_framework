class Tool {
    constructor(gameobject, name) {
        this.gameobject = gameobject;
        this.name = name;
    }
    instantiate() {
    }
}
class Script extends Tool {
    constructor(gameobject, name) {
        super(gameobject, name + "_Script");
    }
    Awake() {
        return 0;
    }
    Start() {
        return 0;
    }
    EarlyUpdate() {
        return 0;
    }
    Update() {
        return 0;
    }
    LateUpdate() {
        return 0;
    }
    instantiate() {
        this.gameobject.stage.l_Update.addFunction(0, this.EarlyUpdate, this.gameobject.name + "_ScriptEarly");
        this.gameobject.stage.l_Update.addFunction(1, this.Update, this.gameobject.name + "_ScriptUpdate");
        this.gameobject.stage.l_Update.addFunction(2, this.LateUpdate, this.gameobject.name + "_ScriptLate");
        this.gameobject.stage.l_Start.addFunction(1, this.Start, this.gameobject.name + "_ScriptStart");
    }
}
//# sourceMappingURL=Seed.js.map