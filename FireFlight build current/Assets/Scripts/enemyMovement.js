var target : Transform;
var speed : float = 0;
var slow : float = 2;
var medium : float = 2.5;
var fast : float = 3;
var ampMove : float = 5;
var autospeed : float = 20;
private var dir : Vector3;
private var movedir : Vector3;

var eggChanceRange : int = 10;
var eggPrefab : GameObject;

private var thisTransform : Transform;
private var cloud : Transform;

/*function Awake () { 
	cloud = transform.Find("ParticalPoofPrefab");
}

function Start () {
	//cache Transform component
	thisTransform = transform;
	
	//sets target for prefabs
	target = GameObject.Find("Dragon").transform;
	//looks at target and gives a x,y direction (vector) for enemy to move toward
//	thisTransform.LookAt (target);
	
	dir = target.position - thisTransform.position;
	movedir = dir.normalized;
		
	if (gameObject.tag == "Untagged") speed = slow;
	else
	{
		if (gameObject.tag == "enemyEasy") speed = slow;
		if (gameObject.tag == "enemyMedium") speed = medium;
		if (gameObject.tag == "enemyHard") speed = fast;
	}
	
	cloud.particleEmitter.enabled = false;
}

private var myTimer : float = 0;

function Update () {
	//to account for when game is paused??
//	if (Time.deltaTime <= 0.000001) return;
	
//	myTimer += Time.deltaTime;
//	print("MOVEDIR===== " + movedir);
	//move enemy simply
//	thisTransform.Translate(Vector3.forward * autospeed * Time.deltaTime, Space.World);
	
	//sine wave movement
//	thisTransform.Translate(movedir.x * speed * Mathf.Sin(myTimer), movedir.y * speed * Mathf.Sin(ampMove * myTimer),
//	autospeed * Time.deltaTime, Space.World);
	
//	thisTransform.LookAt(Vector3(movedir.x * speed * Mathf.Sin(myTimer), movedir.y * speed * Mathf.Sin(ampMove * myTimer),
//	autospeed * Time.deltaTime), thisTransform.up);
}

// what happens when the enemy is hit by fireball and when the player hits the enemy
// puff of cloud and egg is generated */
function OnTriggerEnter (other: Collider) {
/*	if(other.gameObject.tag == "bullet")
	{
		var eggChance : int = Random.Range( -eggChanceRange, eggChanceRange);
		print("DESTROYED  " + gameObject.tag);

		if (eggChance >= 6 )
		{
			var egg : GameObject = Instantiate (eggPrefab, thisTransform.position, thisTransform.rotation);
		}
		//make a poof effect and give score upon shooting down gryphon while resetting and recycling the asset
//		cloud.particleEmitter.enabled = true;  //causing an error where the gryphon's transform is being destroyed
		GlobalVars.score += Random.Range( 50, 100);
		gameObject.transform.position = Vector3(-100, -300, 200);
	} */
	if(other.gameObject.tag == "Player")
	{
		print ("OUCH!!!");
//		gameObject.transform.position = Vector3(-1100, -300, 200);
		var health : GameObject = GameObject.Find("health");
		health.SendMessage("ReduceHealth");
		var dragon : GameObject = GameObject.Find("Dragon");
		dragon.SendMessage("Blink", 0.65);  //blinks 3 times
//		gameObject.GetComponent("movementPlatform").enabled = false;
//		gameObject.GetComponent("movementRevolution").enabled = false;

	}
}
