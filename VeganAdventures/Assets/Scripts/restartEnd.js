// This will reset player to beginning of game if any veggies are missed

function Update () {
}

function OnTriggerEnter(other : Collider) {
	if(other.tag == "Player") {
		yield WaitForSeconds (2);
		other.gameObject.transform.position = Vector3(0, 1.6, 0);
	}
}