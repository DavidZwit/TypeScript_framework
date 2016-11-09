class Pencile {
    constructor(gameobject, color = new Color(1, 0, 1, 1)) {
        this.gameobject = gameobject;
        this.draw = false;
        this.drawLayer = 1;
        this.color = color;
        this.shape = (ctx) => {
            ctx.beginPath();
            ctx.arc(this.gameobject.transform.position.x, this.gameobject.transform.position.y, this.gameobject.transform.size.x, 0, 2 * Math.PI);
            ctx.fillStyle = this.color.toString;
            ctx.fill();
            ctx.stroke();
            return 0;
        };
        this.mainDraw = (theVar) => {
            let ctx = theVar[0];
            if (this.draw == true)
                this.shape(ctx, gameobject.transform);
            return 0;
        };
        l_Draw.addFunction(this.drawLayer, this.mainDraw, gameobject.name + "_GameObject");
    }
    set drawName(input) {
        if (input == true) {
            l_Draw.addFunction(2, (vars) => {
                let ctx = vars[0];
                let trans = this.gameobject.transform;
                let name = this.gameobject.name;
                ctx.fillStyle = "black";
                ctx.font = "bold 12px Arial";
                ctx.fillText(name, trans.position.x - trans.size.x / 3, trans.position.y - trans.size.y / 4);
                return 0;
            }, this.gameobject.name + "_NameTag");
        }
        else {
            l_Draw.removeFunction(2, this.gameobject.name + "_NameTag");
        }
    }
    changeShape(newShape) {
        this.shape = newShape;
    }
}
//# sourceMappingURL=Pencile.js.map