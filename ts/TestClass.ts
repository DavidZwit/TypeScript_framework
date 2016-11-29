class TestClass extends Script {

    theLight : GameObject;
	otherLight : Light;
	text : TextElement;

	constructor (gameobject : GameObject) { super(gameobject, "TestClass");	}

    Start () {
        this.theLight = new GameObject(ObjectTypes.Shape, "mainLight");
        GameObject.Instantiate<Light>(this.theLight);
        this.theLight.pencile.drawName = true;
        this.theLight.pencile.drawPivot = true;

        this.otherLight = new Light("otherLight", 200);
        GameObject.Instantiate<Light>(this.otherLight);
        this.otherLight.pencile.drawName = true;

        this.text = new TextElement("testText", new Vector2(200, 200), "hallo baas");
    }

    Update () {
        this.otherLight.Intencity = this.otherLight.Intencity < 50 ? this.otherLight.Intencity +2 : 0;

        this.theLight.transform.position = Input.getMouseDragPos(0);

        return 0;
    }
}

/**
* Add this script (TestClass.js) to the html file
*/
