// This controls variables concerning veggies when picked up

function Update () {
	if(GlobalVars.veggiesLeft <= 0) GlobalVars.veggiesLeft = 0;
}

collider.isTrigger = true;

function OnTriggerEnter(other: Collider)
{
	if(other.gameObject.tag == "Player")
	{
		Destroy(transform.gameObject);
		GlobalVars.score += 20;
		GlobalVars.veggiesLeft --;
	}
}