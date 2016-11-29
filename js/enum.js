var ObjectTypes;
(function (ObjectTypes) {
    ObjectTypes[ObjectTypes["Empty"] = 0] = "Empty";
    ObjectTypes[ObjectTypes["Light"] = 1] = "Light";
    ObjectTypes[ObjectTypes["Shape"] = 2] = "Shape";
    ObjectTypes[ObjectTypes["UI"] = 3] = "UI";
    ObjectTypes[ObjectTypes["Camera"] = 4] = "Camera";
    ObjectTypes[ObjectTypes["Grid"] = 5] = "Grid";
})(ObjectTypes || (ObjectTypes = {}));
var ShapeTypes;
(function (ShapeTypes) {
    ShapeTypes[ShapeTypes["none"] = 0] = "none";
    ShapeTypes[ShapeTypes["square"] = 1] = "square";
    ShapeTypes[ShapeTypes["circle"] = 2] = "circle";
})(ShapeTypes || (ShapeTypes = {}));
var drawLayers;
(function (drawLayers) {
    drawLayers[drawLayers["background"] = 0] = "background";
    drawLayers[drawLayers["main"] = 1] = "main";
    drawLayers[drawLayers["ui"] = 2] = "ui";
})(drawLayers || (drawLayers = {}));
class DrawFunctions {
    static circle() {
        return (ctx, trans, pen) => {
            ctx.fillStyle = pen.color.toString;
            ctx.beginPath();
            ctx.arc(trans.drawPosition.x, trans.drawPosition.y, trans.drawSize.x, 0, 2 * Math.PI);
            if (pen.doFill == true)
                ctx.fill();
            if (pen.doStroke == true)
                ctx.stroke();
            return 0;
        };
    }
    static square() {
        return (ctx, trans, pen) => {
            ctx.fillStyle = pen.color.toString;
            ctx.beginPath();
            ctx.rect(trans.drawPosition.x, trans.drawPosition.y, trans.drawSize.x, trans.drawSize.y);
            if (pen.doFill == true)
                ctx.fill();
            if (pen.doStroke == true)
                ctx.stroke();
            return 0;
        };
    }
    static htmlObject() {
        return (ctx, trans, pen) => {
            let htmlElement = trans.gameobject.element;
            htmlElement.style.left = trans.drawPosition.x + "px";
            htmlElement.style.top = trans.drawPosition.y + "px";
            if (pen.doFill == true)
                htmlElement.style.visibility = "shown";
            else
                htmlElement.style.visibility = "hidden";
            return 0;
        };
    }
}
//# sourceMappingURL=enum.js.map