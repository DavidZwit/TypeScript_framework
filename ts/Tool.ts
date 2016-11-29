/*
* The base tool wich tools can be extended from
*/

class Tool {
    gameobject : GameObject;
    name : string;

    constructor (gameobject : GameObject, name : string) {
        this.gameobject = gameobject;
        this.name = name;
    }

    instantiate () {

    }
}
