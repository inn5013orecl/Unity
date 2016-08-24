public var fadeOutTexture : GUITexture;

private var ended : boolean = false;

function Start () {
	ended = false;
}

function Update () {
	if (ended == true) {
		Fade.use.Alpha(fadeOutTexture, 0.0, 1.0, 2.0);
	}
}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "target")
	{
		//start up the fading by setting boolean value to true
		ended = true;
		//ensure that MainMenu button can be used even after winning
		GlobalVars.paused = true;
//		yield Fade.use.Alpha(fadeOutTexture, 0.0, 1.0, 2.0);
		yield WaitForSeconds (2.0);
		Application.LoadLevel(7);
	}
		
}