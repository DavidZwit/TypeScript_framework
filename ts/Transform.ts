/**
 * An object defining the gyomitry of an object
 */

class Transform {

    public position : Vector2;
    public rotation : Vector2;
    public size : Vector2;

    public velocity : Vector2;

    private gameobject : GameObject;

    constructor (
        gameobject : GameObject,
        position:Vector2 = new Vector2(GD.width / 2, GD.height/2), 
        rotation: Vector2 = new Vector2(), 
        size : Vector2 = new Vector2(20, 20),
        velocity : Vector2 = new Vector2()) {

        this.gameobject = gameobject;

        this.position = position;
        this.rotation = rotation;
        this.size = size;
        this.velocity = velocity;

        l_Physics.addFunction(2, () => {
            
            this.velocity.devideInt(GD.StageFriction);

            //console.log(GD.deltaTime);
            this.position.add(Vector2.multiplyInt(this.velocity, GD.deltaTime)); 

            return 0;
        }, gameobject.name + "_TransformPhysics");
    }
}