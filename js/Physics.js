class PhysicsBody extends Tool {
    constructor(gameobject, acceleration = new Vector2()) {
        super(gameobject, "physics");
        this.acceleration = acceleration;
    }
    instantiate() {
        this.gameobject.stage.l_Physics.addFunction(1, this.Physics, this.gameobject.name + "_PhysicsBody");
    }
    Physics() {
        this.gameobject.transform.velocity.add(this.acceleration);
        this.acceleration.zero();
        return 0;
    }
}
//# sourceMappingURL=Physics.js.map