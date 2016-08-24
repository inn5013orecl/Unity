//rotation script for an object to rotate around another
var myTarget : Transform;
var mySpeed : float = 0; //how many degrees spun per (mySpeed) seconds
var myRadius : float = 0;
var myAngle : float = 0; //denotes starting position

private var thisTransform : Transform;

enum Around {
	xAxis,
	yAxis,
	zAxis
}

var revolveAround : Around;

function Start () {
	thisTransform = transform;
}

function Update () {
	myAngle += mySpeed * Time.deltaTime;
	if (revolveAround == Around.xAxis) {
		thisTransform.position.x = myTarget.position.x;
		thisTransform.position.y = myTarget.position.y + (myRadius * Mathf.Sin( Mathf.Deg2Rad * myAngle));
		thisTransform.position.z = myTarget.position.z + (myRadius * Mathf.Cos( Mathf.Deg2Rad * myAngle));
	}
	if (revolveAround == Around.yAxis) {
		thisTransform.position.x = myTarget.position.x + (myRadius * Mathf.Cos( Mathf.Deg2Rad * myAngle));
		thisTransform.position.y = myTarget.position.y;
		thisTransform.position.z = myTarget.position.z + (myRadius * Mathf.Sin( Mathf.Deg2Rad * myAngle));
	}
	if (revolveAround == Around.zAxis) {
		thisTransform.position.x = myTarget.position.x + (myRadius * Mathf.Cos( Mathf.Deg2Rad * myAngle));
		thisTransform.position.y = myTarget.position.y + (myRadius * Mathf.Sin( Mathf.Deg2Rad * myAngle));
		thisTransform.position.z = myTarget.position.z;
	}
}
