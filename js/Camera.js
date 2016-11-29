class Camera extends GameObject {
    constructor(name) {
        super(ObjectTypes.Camera, name);
        this.zoom = 0;
        game.currentStage.cameras.push(this);
    }
}
//# sourceMappingURL=Camera.js.map