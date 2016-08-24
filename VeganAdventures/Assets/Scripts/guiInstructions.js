// Main Menu Buttons and GUI Graphics

var startTexture : Texture;
var menuTexture : Texture;
var quitTexture : Texture;

function OnGUI() {
	if (!startTexture && !menuTexture && !quitTexture) {
		Debug.LogError("Please assign a texture on the inspector");
		return;
    }
    // Starts the game with reset GlobalVars values
	if (GUI.Button(Rect(Screen.width/2 - (startTexture.width/4)/2, Screen.height - 95,
	   startTexture.width/4, startTexture.height/4), startTexture)) {
		GlobalVars.lives = 5;
		GlobalVars.timer = 241 * 60;
		GlobalVars.score = 0;
		Application.LoadLevel(1);
	}
    // Goes back to Main Menu
	if (GUI.Button(Rect(Screen.width/2 - (menuTexture.width/4)/2 - 150, Screen.height - 95,
	   menuTexture.width/4, menuTexture.height/4), menuTexture)) {
		Application.LoadLevel(0);
	}
	
	// Quits Application
	if (GUI.Button(Rect(Screen.width/2 - (quitTexture.width/4)/2 + 150, Screen.height - 95,
	   quitTexture.width/4, quitTexture.height/4), quitTexture)) {
		Application.Quit();
	}
}

function Update () {
}