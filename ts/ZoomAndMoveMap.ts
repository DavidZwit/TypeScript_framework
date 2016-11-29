class ZoomAndMoveMap extends Script {

	constructor (gameobject : GameObject) { super(gameobject, 'zoomAndMoveMap'); }

	Update () {

		if (Input.getKeyDown(KeyCode.RIGHT_ARROW)) {
		   	 this.gameobject.stage.activeCamera.zoom *= 1.02;
		   	 console.log("zooming in");
	    }
	    if (Input.getKeyDown(KeyCode.LEFT_ARROW)){
		   	 this.gameobject.stage.activeCamera.zoom *= .98;
		   	 console.log("zooming out");
	    }

	    let speed = 20;
	    let speedM = new Vector2((Input.getKeyDown(KeyCode.A) == true ? -speed : 0) + (Input.getKeyDown(KeyCode.D) == true ? speed : 0),
	   						 (Input.getKeyDown(KeyCode.W) == true ? -speed : 0) + (Input.getKeyDown(KeyCode.S) == true ? speed : 0));

	    this.gameobject.stage.activeCamera.transform.position = speedM;

	    //Positioneer de camera om te testen en teken een grid

	    return 0;
	}
}


/**
* Add this script (ZoomAndMoveMap.js) to the html file
*/
