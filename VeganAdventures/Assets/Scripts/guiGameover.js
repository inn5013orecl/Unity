// Main Menu Buttons and GUI Graphics

var menuTexture : Texture;
var quitTexture : Texture;

var score : GUIText;

function OnGUI() {
	if (!menuTexture && !quitTexture) {
		Debug.LogError("Please assign a texture on the inspector");
		return;
    }
    
    // Goes back to Main Menu
	if (GUI.Button(Rect(Screen.width/2 - (menuTexture.width/4)/2 - 75, Screen.height - 95,
	   menuTexture.width/4, menuTexture.height/4), menuTexture)) {
		Application.LoadLevel(0);
	}
	
	// Quits Application
	if (GUI.Button(Rect(Screen.width/2 - (quitTexture.width/4)/2 + 75, Screen.height - 95,
	   quitTexture.width/4, quitTexture.height/4), quitTexture)) {
		Application.Quit();
	}
}

function Update () {
	score.text = "Score: " + GlobalVars.score;
}