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
//# sourceMappingURL=Gameloop.js.map