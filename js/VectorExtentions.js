class RenderPosition extends Vector2 {
    constructor(origin) { super(); this.trans = origin; }
    toString() { return "WorldPosition: x:" + this.x + "  y: " + this.y; }
    get x() {
        return (this.trans.position.x - this.trans.pivot.x - game.currentStage.activeCamera.transform.position.x) * game.currentStage.activeCamera.zoom;
    }
    get y() {
        return (this.trans.position.y - this.trans.pivot.y - game.currentStage.activeCamera.transform.position.y) * game.currentStage.activeCamera.zoom;
    }
}
class RenderSize extends Vector2 {
    constructor(origin) { super(); this.trans = origin; }
    get x() { return this.trans.size.x * game.currentStage.activeCamera.zoom; }
    get y() { return this.trans.size.y * game.currentStage.activeCamera.zoom; }
}
//# sourceMappingURL=VectorExtentions.js.map