private var myTimer : float = 0; //used to record the current time

var sceneNumber : int; //to determine which scene loads
var timeDelay : float; //to determine time to wait before loading next scene in seconds

//prevent iphone backcorners from appearing upon changing orientation
/*function Awake () {
	iPhoneKeyboard.autorotateToPortrait = false;
	iPhoneKeyboard.autorotateToPortraitUpsideDown = false;
	iPhoneKeyboard.autorotateToLandscapeLeft = false;
	iPhoneKeyboard.autorotateToLandscapeRight = false;
}*/

function Update () {
	
	myTimer += Time.deltaTime; //update the time
	
	if (myTimer>= timeDelay)
	{
	Application.LoadLevel(sceneNumber);  //Add Scene to Build Settings
	}
}