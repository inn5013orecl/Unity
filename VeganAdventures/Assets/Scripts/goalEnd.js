//This will load the victory screen

function Update () {
}

function OnTriggerEnter(other : Collider) {
	if(other.tag == "Player" && GlobalVars.veggiesLeft <= 0) {
		yield WaitForSeconds (0.5);
		Application.LoadLevel(2);
	}
}