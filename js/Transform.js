class Transform extends Tool {
    constructor(gameobject, position = new Vector2(), rotation = new Vector2(), size = new Vector2(20, 20), velocity = new Vector2()) {
        super(gameobject, "transform");
        this.position = position;
        this.drawPosition = new RenderPosition(this);
        this.rotation = rotation;
        this.size = size;
        this.drawSize = new RenderSize(this);
        this.velocity = velocity;
        this.pivot = new Vector2(size.x / 2, size.y / 2);
    }
    updatePosition() {
        let stage = this.gameobject.stage;
        this.position.add(Vector2.multiplyInt(this.velocity, Time.deltaTime));
        this.velocity = Vector2.add(Vector2.sub(this.velocity, Vector2.multiplyInt(this.velocity, stage.friction)), new Vector2(stage.gravity, stage.gravity));
        return 0;
    }
    instantiate() {
        this.gameobject.stage.l_Physics.addFunction(2, this.updatePosition, this.gameobject.name + "_TransformPhysics");
    }
}
//# sourceMappingURL=Transform.js.map