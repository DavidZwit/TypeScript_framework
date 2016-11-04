class Light extends GameObject {
    constructor(name, position = new Vector2(), intencity = 1, color = new Color()) {
        super(ObjectTypes.Light, name);
        this.position = position || new Vector2();
        this.intencity = intencity || 1;
        this.color = new Color(1, 1, 1, 1) || color;
    }
}
/*
l_Draw.addFunction(2, ( ctx ) => {
    console.log( GameObject.GetGameobjectOfType<Light>(ObjectTypes.Light) );

    GameObject.GetGameobjectOfType <Light> (ObjectTypes.Light).forEach((light) => {
        
        let grd = ctx.createRadialGradient(light.position.x, light.position.y, 1, light.position.x, light.position.y, light.intencity);
        grd.addColorStop(1, light.color.asString);
        grd.addColorStop(1,"white");
        
        ctx.fillStyle = grd;
        ctx.fill();

    });
    return 0;
}, "lightDraw")
*/
class lightTesting extends Seed {
    constructor(name) {
        super(name);
        console.log("yes it's working");
        this.theLight = new Light("mainLight", new Vector2(200, 200), 20);
        this.theLight.addToArray();
    }
    Update() {
        return 0;
    }
}
let a = new lightTesting("kees");
//# sourceMappingURL=light.js.map