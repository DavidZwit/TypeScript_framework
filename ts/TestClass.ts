class TestClass extends Seed {  
 
    theLight : GameObject;
	otherLight : Light;

	constructor () { 
		
		super('testClass'); 
 		
		this.theLight = new GameObject(ObjectTypes.Shape, "mainLight");
        GameObject.Instantiate<Light>(this.theLight, new Transform(this.theLight));
		//this.theLight.pencile.drawName = true;

		this.otherLight = new Light("otherLight", 200);
		GameObject.Instantiate<Light>(this.otherLight, new Transform(this.otherLight, new Vector2(150, 150)));
		//this.otherLight.pencile.drawName = true;

        
		this.Update = () => {

            //this.theLight.Intencity = this.theLight.Intencity < 100 ? this.theLight.Intencity +1 : 0;
            this.otherLight.Intencity = this.otherLight.Intencity < 50 ? this.otherLight.Intencity +2 : 0;

			let speed = .2;

			let xSpeed = new Vector2((Input.getKeyDown(KeyCode.A) == true ? -speed : 0) + (Input.getKeyDown(KeyCode.D) == true ? speed : 0),
									(Input.getKeyDown(KeyCode.W) == true ? -speed : 0) + (Input.getKeyDown(KeyCode.S) == true ? speed : 0));

			this.theLight.physics.acceleration.add(xSpeed);
			
            return 0;
        }
	} 
} 
 
Seed.addSeed(new TestClass()); 
 
/** 
* Add this script (TestClass.js) to the html file 
*/ 
