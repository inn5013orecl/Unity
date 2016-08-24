private var originalSpeed : float;

private var environment : GameObject;
private var environmentScript : moveEnvironment;

function Start () {
    environment = GameObject.Find("environment");
    environmentScript = environment.GetComponent(moveEnvironment);
    originalSpeed = environmentScript.speed;
    
}

function OnTriggerEnter (other: Collider) {
/*	if(other.gameObject.tag == "Player")
	{
		var health : GameObject = GameObject.Find("health");
		health.SendMessage("ReduceHealth");
		var dragon : GameObject = GameObject.Find("Dragon");
		dragon.SendMessage("Blink", 0.65);
	} */
	if(other.gameObject.tag == "target")
	{
/*		var environment : GameObject = GameObject.Find("environment");
		var environmentScript : moveEnvironment = environment.GetComponent(moveEnvironment);
		originalSpeed = environmentScript.speed; */
		environmentScript.speed = 0;
		print("ENTERING");
	}
}

function OnTriggerExit (other : Collider) {
	if(other.gameObject.tag == "target")
	{
/*		var environment : GameObject = GameObject.Find("environment");
		var environmentScript : moveEnvironment = environment.GetComponent(moveEnvironment); */
		environmentScript.speed = originalSpeed;
		print("EXITING");
	}
}