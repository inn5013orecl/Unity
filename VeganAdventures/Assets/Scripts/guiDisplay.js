// Controls All GUI objects

var score : GUIText;
var lives : GUIText;
var timer : GUIText;
var veggiesLeft : GUIText;

var btnTexture : Texture;

function OnGUI() {
	if (!btnTexture) {
		Debug.LogError("Please assign a texture on the inspector");
		return;
    }
	if (GUI.Button(Rect(Screen.width/2 - (btnTexture.width/8)/2,10,btnTexture.width/8,btnTexture.height/8),btnTexture)) {
		GlobalVars.lives -= 1;
		GlobalVars.veggiesLeft = 10;
		GlobalVars.timer = 241 * 60;
		GlobalVars.score = 0;
		Application.LoadLevel(1);
	}
}

function FixedUpdate () {
	// Countdown
	if (GlobalVars.timer <=0) GlobalVars.timer = 0;
	else GlobalVars.timer -= Time.fixedDeltaTime;
	
	score.text = "Score  " + GlobalVars.score;
	lives.text = "Lives  " + GlobalVars.lives;
	timer.text = "Time Left  " + Mathf.Round(GlobalVars.timer / 60);  // account for fact that 180 * Time.deltaTime = 3
	veggiesLeft.text = "Veggies Left  " + GlobalVars.veggiesLeft;
	
	results();
}

function results() {

	// Game Over - ran out of lives
	if (GlobalVars.lives <= 0) {
		yield WaitForSeconds (1);
		Application.LoadLevel(3);
	}
	
	// Game Over - ran out of time
	if (GlobalVars.timer <= 0) {
		yield WaitForSeconds (1);
		Application.LoadLevel(3);
	}
}