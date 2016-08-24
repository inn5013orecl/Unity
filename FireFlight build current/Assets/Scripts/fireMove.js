//move bullet along x direction

var mySpeed : float = 7;
private var myTimer : float = 0;
private var enemy : GameObject;

function Update () {
	
	var myTarget : GameObject = GameObject.Find("target");
	var targetScript : movementTarget = myTarget.GetComponent(movementTarget);
	
	//moves bullet toward enemy target
	transform.Translate(Vector3.forward * (Time.deltaTime * (mySpeed + targetScript.autoSpeed))); //relative movement to previous frame
	
	myTimer += Time.deltaTime;
	if (myTimer > 3) Destroy(gameObject);
}


collider.isTrigger = true;

//adds a point to score every time bullet hits enemy and removes that instance of the bullet as well
function OnTriggerEnter (other : Collider) {

}