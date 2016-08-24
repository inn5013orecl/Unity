// Main Menu Buttons and GUI Graphics

var startTexture : Texture;
var instructionTexture : Texture;
var quitTexture : Texture;

var textDisplay : GUIText;

function OnGUI() {
	if (!startTexture && !instructionTexture && !quitTexture) {
		Debug.LogError("Please assign a texture on the inspector");
		return;
    }
    
    // Starts the game with reset GlobalVars values
	if (GUI.Button(Rect(Screen.width/2 - (startTexture.width/4)/2 - 150, Screen.height - 95,
	   startTexture.width/4, startTexture.height/4), startTexture)) {
		GlobalVars.lives = 5;
		GlobalVars.timer = 241 * 60;
		GlobalVars.score = 0;
		Application.LoadLevel(1);
	}
	
	// Loads Instruction Screen
	if (GUI.Button(Rect(Screen.width/2  - (instructionTexture.width/4)/2, Screen.height - 95,
	   instructionTexture.width/4, instructionTexture.height/4), instructionTexture)) {
		Application.LoadLevel(4);
	}
	
	// Quits Application
	if (GUI.Button(Rect(Screen.width/2 - (quitTexture.width/4)/2 + 150, Screen.height - 95,
	   quitTexture.width/4, quitTexture.height/4), quitTexture)) {
		Application.Quit();
	}
}

function Update () {
}