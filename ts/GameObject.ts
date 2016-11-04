/**
 * The class every gameobject extends from to get behavour
 */
class GameObject {

    public type : ObjectTypes;
    public name : string;

    static objects = [GameObject.prototype];

    constructor( type : ObjectTypes, name : string ) {

        this.type = type || ObjectTypes.Empty;
        this.name = name;

    }

    addToArray () {
        GameObject.objects.push (this);
        console.log(this);
    }

    static GetGameobjectOfType<T extends GameObject> (type : ObjectTypes) : [ T ] {

        let returnArray : [T];

        GameObject.objects.forEach( (obj : GameObject) => {
            
            console.log(obj.type, obj);
            
            if (obj.type == type) { returnArray.push(obj as T);
                console.log(obj);
            }
        });

        return returnArray;
    }
}