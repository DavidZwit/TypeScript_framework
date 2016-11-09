/**
 * Giving the object physics
 */
class PhysicsBody {
    constructor(gameobject, acceleration = new Vector2()) {
        this.gameobject = gameobject;
        this.acceleration = acceleration;
        l_Physics.addFunction(1, () => {
            this.gameobject.transform.velocity.add(this.acceleration);
            return 0;
        }, gameobject.name + "_PhysicsBody");
    }
}
//# sourceMappingURL=Physics.js.map