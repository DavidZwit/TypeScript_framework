
/**
*This Vector extentions recalculates the vector to world position whenever called
*
*/
class RenderPosition extends Vector2  {
    private trans : Transform;
    constructor (origin : Transform){ super(); this.trans = origin; }

    toString (){ return "WorldPosition: x:" + this.x  + "  y: " + this.y; }
    get x () : number {
        return (this.trans.position.x - this.trans.pivot.x - game.currentStage.activeCamera.transform.position.x) * game.currentStage.activeCamera.zoom;
    }
    get y () : number {
        return (this.trans.position.y - this.trans.pivot.y - game.currentStage.activeCamera.transform.position.y) * game.currentStage.activeCamera.zoom;
    }
}

class RenderSize extends Vector2 {
    private trans : Transform;
    constructor (origin : Transform) {super(); this.trans = origin; }

    get x () : number { return this.trans.size.x * game.currentStage.activeCamera.zoom; }
    get y () : number {return this.trans.size.y * game.currentStage.activeCamera.zoom; }
}
