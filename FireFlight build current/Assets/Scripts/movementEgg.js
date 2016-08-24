

private var thisTransform : Transform;
var speed : float = 5;

function Start () {
	thisTransform = transform;
}

/*function Update () {
	var speedTarget : GameObject = GameObject.Find("target");
	var targetScript : movementTarget = speedTarget.GetComponent(movementTarget);
	
	var target : GameObject = GameObject.Find("Dragon");
	
	thisTransform.LookAt(target.transform);
	
	thisTransform.Translate (Vector3.forward * (targetScript.autoSpeed - speed) * Time.deltaTime);
	
	if(thisTransform.position.z < target.transform.position.z - 2)
		Destroy(gameObject);
}
*/

/*function Update () {
	transform.Translate(Vector3.forward * Time.deltaTime * speed);
}*/

function OnTriggerEnter (other: Collider) {
	if(other.gameObject.tag == "spawner" || other.gameObject.tag == "Player")
	{
		GlobalVars.score += 50;
		GlobalVars.eggsCollected += 1;
		audio.Play();
		var sparkle : GameObject = GameObject.Find("sparkle");
		sparkle.transform.position = thisTransform.position;
		gameObject.transform.position.y += 200;
	}
}

function Closer () {
	thisTransform.position.z += 1;
}

function Away () {
	thisTransform.position.z -= 1;
}