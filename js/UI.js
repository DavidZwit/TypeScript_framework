class UI extends GameObject {
    constructor(name, position = new Vector2()) {
        super(ObjectTypes.UI, name);
        this.linkedFunctions = [() => { return 0; }];
        this.pencile.drawLayer = drawLayers.ui;
    }
    triggerElement() {
        this.linkedFunctions.forEach((func) => {
            func();
        });
    }
}
class TextElement extends UI {
    constructor(name, position = new Vector2(), buttonText) {
        super(name, position);
        this.buttonText = buttonText;
        this.drawfunc = DrawFunctions.htmlObject();
        let textElement = document.createTextNode(this.buttonText);
        this.element = document.createElement("BUTTON");
        this.element.appendChild(textElement);
        this.element.style.position = "absolute";
        document.body.appendChild(this.element);
    }
}
//# sourceMappingURL=UI.js.map