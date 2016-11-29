class GameObject {
    constructor(type, name, transform = null, pencile = null, physicsbody = null) {
        this.tools = { transform: null, pencile: null, physics: null };
        this.type = type || ObjectTypes.Empty;
        this.name = name;
        this.transform = transform || new Transform(this);
        this.pencile = pencile || new Pencile(this);
        this.physics = physicsbody || new PhysicsBody(this);
    }
    GetComponent() {
    }
    AddComponent(component) {
        this.tools[component.name] = component;
    }
    static Instantiate(obj, stage = game.currentStage) {
        if (!GameObject.Find(obj)) {
            obj.pencile.draw = true;
            game.currentStage.gameobjects.push(obj);
        }
    }
    static Find(obj) {
        for (let i = game.currentStage.gameobjects.length - 1; i > 0; i--) {
            if (game.currentStage.gameobjects[i].name == obj.name)
                return i;
        }
    }
    static Destroy(obj) {
        game.currentStage.gameobjects.splice(GameObject.Find(obj));
        obj.pencile.draw = false;
    }
    static GetGameobjectOfType(type) {
        let returnArray = [];
        game.currentStage.gameobjects.forEach((obj) => {
            if (obj.type == type) {
                returnArray.push(obj);
            }
        });
        return returnArray;
    }
}
//# sourceMappingURL=GameObject.js.map