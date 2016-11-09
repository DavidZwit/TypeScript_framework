/**
 * The class every gameobject extends from to get behavour
 */
class GameObject {
    constructor(type, name, transform = null, pencile = null, physicsbody = null) {
        this.type = type || ObjectTypes.Empty;
        this.name = name;
        this.transform = transform || new Transform(this);
        this.physics = physicsbody || new PhysicsBody(this);
        this.pencile = pencile || new Pencile(this);
    }
    static Instantiate(obj, trans) {
        if (!GameObject.Find(obj)) {
            obj.transform = trans;
            obj.pencile.draw = true;
            GameObject.objects.push(obj);
        }
    }
    static Find(obj) {
        for (let i = GameObject.objects.length - 1; i > 0; i--) {
            if (GameObject.objects[i].name == obj.name)
                return i;
        }
    }
    static Destroy(obj) {
        GameObject.objects.splice(GameObject.Find(obj));
        obj.pencile.draw = false;
    }
    static GetGameobjectOfType(type) {
        let returnArray = [];
        GameObject.objects.forEach((obj) => {
            if (obj.type == type) {
                returnArray.push(obj);
            }
        });
        return returnArray;
    }
}
GameObject.objects = [];
//# sourceMappingURL=GameObject.js.map