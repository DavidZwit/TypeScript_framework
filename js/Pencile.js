class Pencile extends Tool {
    constructor(gameobject, color = new Color(1, 0, 1, 1)) {
        super(gameobject, "pencile");
        this.drawLayer = 1;
        this.shape = ShapeTypes.circle;
        this.draw = false;
        this.doStroke = true;
        this.doFill = true;
        this.color = color;
        this.drawFunc = DrawFunctions.circle();
    }
    DrawLoop(theVar) {
        if (this.draw == true) {
            let ctx = theVar[0].ctx;
            this.drawFunc(ctx, this.gameobject.transform, this);
        }
        return 0;
    }
    DrawPivot(vars) {
        if (this.drawPivot == true) {
            let ctx = vars[0];
            let trans = this.gameobject.transform;
            ctx.arc(trans.drawPosition.x, trans.drawPosition.y, 2, 0, 2 * Math.PI);
            ctx.stroke();
            return 0;
        }
    }
    DrawName(vars) {
        if (this.drawName == true) {
            let ctx = vars[0];
            let trans = this.gameobject.transform;
            let name = this.gameobject.name;
            ctx.fillStyle = this.color.toString;
            ctx.font = "bold 12px Arial";
            ctx.textAlign = "center";
            ctx.fillText(name, trans.drawPosition.x, trans.drawPosition.y - trans.drawSize.y);
            return 0;
        }
    }
    instantiate() {
        this.gameobject.stage.l_Draw.addFunction(this.drawLayer, this.DrawLoop, this.gameobject.name + "_GameObject");
        this.gameobject.stage.l_Draw.addFunction(3, this.DrawPivot, this.gameobject.name + "_Pivot");
        this.gameobject.stage.l_Draw.addFunction(3, this.DrawName, this.gameobject.name + "_NameTag");
    }
    changeDrawFunc(newShape) {
        this.drawFunc = newShape;
    }
}
//# sourceMappingURL=Pencile.js.map