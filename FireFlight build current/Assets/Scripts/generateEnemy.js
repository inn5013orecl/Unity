//Instantiate an enemy in a random position

var enemyPrefab: GameObject;
var enemyTarget: GameObject;

private var myTimer1 : float = 0; //used to record the current time
private var myTimer2 : float = 0;
private var myTimer3 : float = 0;

private var thisTransform : Transform;

function Start () {
	//cache Transform component
	thisTransform = transform;	
}

function Update () {
	
	var startX: int = Random.Range(-10, 10);
	var startY: int = Random.Range(-1, 5);
	
//	print("START X = " + startX + "    START Y = " + startY);
	
	//update the time
	myTimer1 += Time.deltaTime;
	myTimer2 += Time.deltaTime;
	myTimer3 += Time.deltaTime;


	if (myTimer1 >= GlobalVars.attackSpeed1)
	{
		var enemy1: GameObject = Instantiate (enemyPrefab, thisTransform.position + 
		Vector3(startX, startY, 100), enemyPrefab.transform.rotation);
		
		enemy1.tag = "enemyHard";
		enemy1.transform.LookAt(enemyTarget.transform);		

		myTimer1 = 0; //Reset timer
		
		Destroy (enemy1, 6); // self-destroy after 6 seconds

	}
	
	if (myTimer2 >= GlobalVars.attackSpeed2)
	{
		var enemy2: GameObject = Instantiate (enemyPrefab, thisTransform.position + 
		Vector3(startX, startY, 100), enemyPrefab.transform.rotation);
		
		enemy2.tag = "enemyMedium";
		enemy2.transform.LookAt(enemyTarget.transform);		

		myTimer2 = 0; //Reset timer
		
		Destroy (enemy2, 6); // self-destroy after 6 seconds

	}
	
	if (myTimer3 >= GlobalVars.attackSpeed3)
	{
		var enemy3: GameObject = Instantiate (enemyPrefab, thisTransform.position + 
		Vector3(startX, startY, 100), enemyPrefab.transform.rotation);
		
		enemy3.tag = "enemyEasy";
		enemy3.transform.LookAt(enemyTarget.transform);		

		myTimer3 = 0; //Reset timer
		
		Destroy (enemy3, 6); // self-destroy after 6 seconds

	}		
}