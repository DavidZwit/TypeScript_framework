/**
 * Giving the object physics
 */

class PhysicsBody extends Tool {

    public acceleration : Vector2;

    constructor (gameobject : GameObject, acceleration : Vector2 = new Vector2()) {
        super(gameobject, "physics");

        this.acceleration = acceleration;

    }

    instantiate () {
        this.gameobject.stage.l_Physics.addFunction(1, this.Physics, this.gameobject.name + "_PhysicsBody");
    }

    Physics () {
        this.gameobject.transform.velocity.add(this.acceleration);
        this.acceleration.zero();

        return 0;
    }
}
