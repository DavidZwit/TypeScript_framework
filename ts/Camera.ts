/**
* The camera for rendering reverences
*/

class Camera extends GameObject{

    public zoom : number;

    constructor (name : string) {
        super (ObjectTypes.Camera, name);
        this.zoom = 0;
        game.currentStage.cameras.push (this);
    }
}
