class UI extends GameObject {

    public linkedFunctions : [() => {}];
    public element : HTMLElement;
    public drawfunc : any;

    constructor (name: string, position : Vector2 = new Vector2()) {
        super(ObjectTypes.UI, name);
        this.linkedFunctions = [() => {return 0;}];
        this.pencile.drawLayer = drawLayers.ui;
    }

    triggerElement () {
        this.linkedFunctions.forEach((func) => {
            func();
        });
    }
}

class TextElement extends UI {

    private buttonText : string;

    constructor (name : string, position : Vector2 = new Vector2(), buttonText : string) {
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
