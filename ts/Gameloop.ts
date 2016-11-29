/*
*The placeholder gameloop with the nesaucary functions
*/

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
