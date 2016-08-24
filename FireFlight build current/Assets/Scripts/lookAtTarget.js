var lookAt : Transform;

private var thisTransform : Transform;

function Start () {

	// Cache component lookup at startup instead of doing this every frame
	thisTransform = transform;
}

/*function OnGUI () {
	GUI.TextArea (Rect (Screen.width - 50, Screen.height * 0.5, 100, 50), "Health\n" + GlobalVars.health, 20);
}*/

function Update () {
	thisTransform.LookAt(lookAt);
}