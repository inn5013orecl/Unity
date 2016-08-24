//Handles scene transitions and pauses

public var pauseTexture : GUITexture;
public var returnTexture : GUITexture;
public var unpauseTexture : GUITexture;


//--------------------------------------------------------------------
//                      Scene Load Functions
//--------------------------------------------------------------------

function MainMenu () {
//	alpha = 1;
//	fadeIn();
	
//	guiCommands(texture1);
	if(GlobalVars.paused == true)
	{
		//to ensure the game will actaully start with the correct gamespeed, force timescale to go to normal at
		//every load of main menu, which the player is required to enter anyways before being able to start the game
		Time.timeScale = 1;
		Application.LoadLevel(2);
	}
}

function LogoMenu () {
	Application.LoadLevel(0);
}

function StartGame () {
	Application.LoadLevel(3);
	GlobalVars.eggsCollected = 0;
	GlobalVars.score = 0;
	GlobalVars.eggCount = 0;
}

function DragonShooter () {
	Application.LoadLevel(4);
	GlobalVars.paused = false; //double ensure unpause/return to main menu works as intended
}

function CreditsMenu () {
	Application.LoadLevel(5);
}

function Tutorial () {
	Application.LoadLevel(6);
}

//brings up/down the pause overlay and applies same changes to all children of the overlay

function Pause () {
	if (GlobalVars.paused == false) {
		Time.timeScale = 0;
		pauseTexture.color.a = 0.4;
		pauseTexture.transform.position.z = 2;
		returnTexture.enabled = true;
		returnTexture.color.a = 1.0;
		returnTexture.transform.position.z = 3;
		unpauseTexture.enabled = true;
		unpauseTexture.color.a = 1.0;
		unpauseTexture.transform.position.z = 3;
		GlobalVars.paused = true;
	}

/*	for (var child : Transform in pauseTexture.transform) {
		child.guiTexture.enabled = true;
		child.guiTexture.color.a = 1;
		print("child before " + child.position.z);
		child.position.z = pauseTexture.transform.position.z + 1; //weird position doesn't match object position...but it still works
		print("child after " + child.position.z);
	} */
}

//use only when attached to unpause button
function UnPause () {
	if (GlobalVars.paused == true) {
		pauseTexture.color.a = 0;
		pauseTexture.transform.position.z = -1;
		returnTexture.color.a = 0;
		returnTexture.transform.position.z = -1;
		returnTexture.enabled = false;
		unpauseTexture.color.a = 0;
		unpauseTexture.transform.position.z = -1;
		unpauseTexture.enabled = false;
		Time.timeScale = 1;
		GlobalVars.paused = false;
	}
	
/*	for (var child: Transform in pauseTexture.transform) {
		child.guiTexture.color.a = 0;
		child.position.z = pauseTexture.transform.position.z;
//		child.GetComponent("GUIButton").enabled = false;
		child.guiTexture.enabled = false;
	} */
//	transform.position.z = -2;
//	transform.guiTexture.color.a = 0;
	
		
//	var returnButton : GameObject = GameObject.Find("returnButton");
//	returnButton.transform.position.z = -2;
//	returnButton.transform.guiTexture.color.a = 0;

}