private var thisTexture : GUITexture;
private var totalWidth : float = 0;
private var reduction : float = 0;
private var currentWidth : float = 0;
private var endingWidth : float = 0;

var depletionPerHit : float = 20;
var fadeOutTexture : GUITexture;

private var starting : boolean = false;

function Start () {
	//cache variables
	thisTexture = guiTexture;
	totalWidth = thisTexture.pixelInset.width;
	reduction = totalWidth * (depletionPerHit/100);
}

function ReduceHealth () {
	currentWidth = thisTexture.pixelInset.width;
	endingWidth = thisTexture.pixelInset.width - reduction;
	starting = true;
	thisTexture.pixelInset.width = endingWidth;
}

//smooth reduction of health bar, but due to Lerp, the reduction slows towards the end and looks awkward
/*function LateUpdate () {
	if(thisTexture.pixelInset.width > 0 && starting == true)
	{
		current = Mathf.Lerp(currentWidth, endingWidth, 0.25 * Time.deltaTime);
	}
	
	if(starting == true) thisTexture.pixelInset.width = currentWidth;
}*/

function Update () {
	if (thisTexture.pixelInset.width <= 0) 
	{
		//ensure that MainMenu button can be used even after losing
		GlobalVars.paused = true;
		Fade.use.Alpha(fadeOutTexture, 0.0, 1.0, 1.0);
		FadingOut();

	}
}

//use this function in place of actaully directly loading scene so that you can add a yield coroutine in update
function FadingOut () {
	yield WaitForSeconds(1.0);
	Application.LoadLevel(8);
}