class TestClass extends Script {

    theLight : GameObject;
	text : TextElement;

	constructor (gameobject : GameObject) { super(gameobject, "TestClass");	}

    Start () {

        this.text = new TextElement("testText", new Vector2(200, 200), "hallo baas");

        return 0;
    }

    Update () {

        //this.theLight.transform.position = Input.getMouseDragPos(0);

        return 0;
    }
}

/**
* Add this script (TestClass.js) to the html file
*/
