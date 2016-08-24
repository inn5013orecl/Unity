var target : Transform;
private var thisTransform : Transform;

function Start () {
	thisTransform = transform;
}

function Update () {
	thisTransform.up = -target.forward;
}