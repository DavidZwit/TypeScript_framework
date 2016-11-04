/**
 * The class every gameobject extends from to get behavour
 */
class GameObject {
    constructor(type, name) {
        this.type = type || ObjectTypes.Empty;
        this.name = name;
    }
    addToArray() {
        GameObject.objects.push(this);
        console.log(this);
    }
    static GetGameobjectOfType(type) {
        let returnArray;
        GameObject.objects.forEach((obj) => {
            console.log(obj.type, obj);
            if (obj.type == type) {
                returnArray.push(obj);
                console.log(obj);
            }
        });
        return returnArray;
    }
}
GameObject.objects = [GameObject.prototype];
//# sourceMappingURL=GameObject.js.map