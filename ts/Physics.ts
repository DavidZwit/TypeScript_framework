/**
 * Giving the object physics
 */

class PhysicsBody {

    public gameobject : GameObject;

    public acceleration : Vector2;

    constructor (gameobject : GameObject, acceleration : Vector2 = new Vector2()) {
        this.gameobject = gameobject;
        this.acceleration = acceleration;

        GD.currentScene.l_Physics.addFunction(1, () => {

            this.gameobject.transform.velocity.add(this.acceleration);
            this.acceleration.zero();

            return 0;
        }, gameobject.name + "_PhysicsBody");
    }
}
