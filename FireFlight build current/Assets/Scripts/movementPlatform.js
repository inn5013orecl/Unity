var targetA : GameObject;
var targetB : GameObject;

var speed : float = 0.1;
var faceforward : boolean = true;

private var thisTransform : Transform;

function Start () {
	thisTransform = transform;
//	if (faceforward) transform.LookAt(targetA.transform);
}

function Update () {
	var weight = Mathf.Cos(Time.time * speed * 2 * Mathf.PI) * 0.5 + 0.5;
	thisTransform.position = targetA.transform.position * weight + targetB.transform.position * (1-weight);
	
/*	if (faceforward) {
		//change the direction the platform is looking based on direction
		if(thisTransform.position == targetA.transform.position) thisTransform.LookAt(targetB.transform);
		if(thisTransform.position == targetB.transform.position) thisTransform.LookAt(targetA.transform);
	} */
}