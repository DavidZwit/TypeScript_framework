/**
 * The class every gameobject extends from to get behavour
 */
class GameObject {

    public type : ObjectTypes;
    public name : string;

    public pencile : Pencile;
    public transform : Transform;
    public physics : PhysicsBody;

    private tools : any = {transform: null, pencile: null, physics: null};

    //The scene it is loaded in
    public stage : Stage;

    constructor( type : ObjectTypes, name : string, transform : Transform = null, pencile : Pencile = null, physicsbody : PhysicsBody = null) {

        this.type = type || ObjectTypes.Empty;
        this.name = name;

        this.transform = transform || new Transform(this);
        this.pencile = pencile || new Pencile(this);

        this.physics = physicsbody || new PhysicsBody(this);
    }


    GetComponent () {

    }

    AddComponent (component : Tool) {
        this.tools[component.name] = component;
    }

    static Instantiate <T extends GameObject> (obj : GameObject, stage : Stage = game.currentStage) {
        if (!GameObject.Find(obj)) {

            obj.pencile.draw = true;
            game.currentStage.gameobjects.push(obj);

        }
    }

    static Find (obj : GameObject) {
        for (let i = game.currentStage.gameobjects.length -1; i > 0; i--) {
            if (game.currentStage.gameobjects[i].name == obj.name) return i;
        }
    }

    static Destroy (obj : GameObject) {
        game.currentStage.gameobjects.splice( GameObject.Find(obj) );
        obj.pencile.draw = false;
    }

    static GetGameobjectOfType<T extends GameObject> (type : ObjectTypes) : T[] {

        let returnArray : T[] = [];

        game.currentStage.gameobjects.forEach( (obj : GameObject) => {

            if (obj.type == type) {
                returnArray.push(obj as T);
            }
        });

        return returnArray;
    }
}
