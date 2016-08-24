
function Update () {
	var myChar : GameObject = GameObject.Find("Dragon");
	var charScript : shootDragon = myChar.GetComponent(shootDragon);
	
	if(charScript._characterState == CharacterState.Special) {
		particleEmitter.emit = true;
		print("TRUE TRUE TRUE");
	}
	else
	{
		particleEmitter.emit = false;
	}
}