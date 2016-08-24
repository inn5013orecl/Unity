var gryphons : GameObject[];
private var gryphonsArray : Array;

private var target : GameObject;
private var spawnPoint : GameObject;
private var thisTransform : Transform;
private var startX : int;
private var startY : int;
private var myTimer : float = 0;

function Awake () {
	target = GameObject.Find("Dragon");
	spawnPoint = GameObject.Find("enemySpawns");
}

function Start () {
	//cache transform
	thisTransform = transform;
	
	gryphonsArray = new Array(gryphons);
}

function Update () {
	startX = Random.Range(-10, 10);
	startY= Random.Range(-1, 5);
}

collider.isTrigger = true;

//remember that in order for OnTriggerEnter event to be passed, a rigidbody must be attached to "other"
function OnTriggerEnter(other: Collider)
{
//	print("SPAWING ENEMY");
	if(other.tag == "enemySpawnMedium")
	{	
		if(gryphonsArray.length > 0)
		{
			var gryphon : GameObject = gryphonsArray.Pop();
			gryphon.transform.position.x = spawnPoint.transform.position.x + startX;
			gryphon.transform.position.y = spawnPoint.transform.position.y + startY;
			gryphon.transform.position.z = thisTransform.position.z + 20;
			gryphon.transform.LookAt(target.transform);
			yield WaitForSeconds(0.2);
			var gryphon2 : GameObject = gryphonsArray.Pop();
			gryphon2.transform.position.x = spawnPoint.transform.position.x + startX;
			gryphon2.transform.position.y = spawnPoint.transform.position.y + startY;
			gryphon2.transform.position.z = thisTransform.position.z + 20;
			gryphon2.transform.LookAt(target.transform);
			yield WaitForSeconds(2.0);
			gryphonsArray.Unshift(gryphon);
			gryphonsArray.Unshift(gryphon2);
		}
	}
}

/*	if (myTimer2 >= GlobalVars.attackSpeed2)
	{
		var enemy2: GameObject = Instantiate (enemyPrefab, thisTransform.position + 
		Vector3(startX, startY, 100), enemyPrefab.transform.rotation);
		
		enemy2.tag = "enemyMedium";
		enemy2.transform.LookAt(enemyTarget.transform);		

		myTimer2 = 0; //Reset timer
		
		Destroy (enemy2, 6); // self-destroy after 6 seconds

	} */