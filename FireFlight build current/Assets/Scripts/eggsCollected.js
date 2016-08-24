var number : int = 0;

enum Condition {
	Collected,
	Missed
}

var condition : Condition;

function Update () {
	if (condition == Condition.Collected)
	{
		if (GlobalVars.eggsCollected >= number) guiTexture.enabled = true;
		else guiTexture.enabled = false;
	}
	if (condition == Condition.Missed)
	{
		if (GlobalVars.eggCount < number)
		{
			if (GlobalVars.eggsCollected < number - GlobalVars.eggCount) guiTexture.enabled = true;
			else guiTexture.enabled = false;
		}
		else guiTexture.enabled = false;
	}
}