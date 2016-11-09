/**
 * The class every gameobject extends from to get behavour
 */
class GameObject {

    public type : ObjectTypes;
    public name : string;

    public pencile : Pencile;
    public transform : Transform;
    public physics : PhysicsBody;

    static objects = [];

    constructor( type : ObjectTypes, name : string, transform : Transform = null, pencile : Pencile = null, physicsbody : PhysicsBody = null) {

        this.type = type || ObjectTypes.Empty;
        this.name = name;
        
        this.transform = transform || new Transform(this);
        this.physics = physicsbody || new PhysicsBody(this);
        this.pencile = pencile || new Pencile(this);
    }

    static Instantiate <T extends GameObject> (obj : GameObject, trans : Transform) {
        if (!GameObject.Find(obj)) {

            obj.transform = trans;
            obj.pencile.draw = true;
            GameObject.objects.push(obj);

        } 
    } 

    static Find (obj : GameObject) {
        for (let i = GameObject.objects.length -1; i > 0; i--) {
            if (GameObject.objects[i].name == obj.name) return i; 
        }
    }

    static Destroy (obj : GameObject) {
        GameObject.objects.splice( GameObject.Find(obj) );
        obj.pencile.draw = false;
    }

    static GetGameobjectOfType<T extends GameObject> (type : ObjectTypes) : T[] {

        let returnArray : T[] = [];

        GameObject.objects.forEach( (obj : GameObject) => {
            
            if (obj.type == type) { 
                returnArray.push(obj as T);
            }
        });

        return returnArray;
    }
}
