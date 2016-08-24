// This controls variables concerning when player gets hurt

var ouch : boolean = true;

function Update () {
}

function OnTriggerEnter(other : Collider) {
	if(other.tag == "Player" && ouch == true) {
		ouch = false;
		yield WaitForSeconds (0.08);
		GlobalVars.lives -= 1;
		other.gameObject.transform.position = Vector3(0, 1.6, 0);
		yield WaitForSeconds (1);
		ouch = true;
	}
}