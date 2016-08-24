//This s GUI to start game

var beep: AudioClip; //Sound File

public var texture1 : GUITexture;
public var texture2 : GUITexture;
public var texture3 : GUITexture;
public var fadeSpeed = 0.3;


//--------------------------------------------------------------------
//                       Private variables
//--------------------------------------------------------------------

private var alpha = 1.0;

private var fadeDir = -1; 

function MainMenu () {
//	alpha = 1;
//	fadeIn();
	
//	guiCommands(texture1);

	Application.LoadLevel(2);
}

function InstructionMenu () {
	Application.LoadLevel(2);
}

function StartGame () {
	Application.LoadLevel(3);
}

//--------------------------------------------------------------------
function fadeIn(){
    fadeDir = -1;   
}

function fadeOut(){
    fadeDir = 1;   
}

function guiCommands(currentTexture : GUITexture){
	if(alpha > 0.0001){
		alpha += fadeDir * fadeSpeed * Time.deltaTime; 
		alpha = Mathf.Clamp01(alpha);
		
		currentTexture.color.a = alpha;
		print("alpha " + currentTexture.color.a);
	}
}

@script RequireComponent(AudioSource)  //NO Semicolon