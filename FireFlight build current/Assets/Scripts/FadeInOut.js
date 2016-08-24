// FadeInOut
//
//--------------------------------------------------------------------
//                        Public parameters
//--------------------------------------------------------------------

public var fadeOutTexture : GUITexture;
public var fadeSpeed = 2;

enum Mode {
	FadeIn,
	FadeOut
}

var mode : Mode;
var fadeImmediately : boolean = true;
var timeDelay : float;
var destroyAfter : boolean = false;

private var fadeActive : boolean = true;
private var start : float;
private var end : float;

//--------------------------------------------------------------------
//                       Private variables
//--------------------------------------------------------------------

private var alpha = 1.0;

private var fadeDir = -1;

private var timer : float = 0;

//--------------------------------------------------------------------
//                       Runtime functions
//--------------------------------------------------------------------

//--------------------------------------------------------------------

function Update() {
	timer += Time.deltaTime;
	if (fadeImmediately == false) {
		if (timer >= timeDelay + 2) Application.LoadLevel(2); //later, replace with victory/game over screens
	}

	//first, determines if there is a need for a time delay before fading,
	//then fades based on the time in seconds
	if (fadeImmediately == true) {
//			alpha += fadeDir * fadeSpeed * Time.deltaTime; 
//			alpha = Mathf.Clamp01(alpha);   
			
//			GUI.color.a = alpha;
			
//			GUI.depth = drawDepth;
			
			Fade.use.Alpha(fadeOutTexture, start, end, fadeSpeed);
			
			//if this conditional is held true, the fade texture used will be deactivated so it doesn't interfere
			//with things such as buttons that are on a lower layer
			if(timer >= fadeSpeed && destroyAfter == true) {
				fadeOutTexture.enabled = false;
				fadeActive = false;
			}
	}
	if (fadeImmediately == false) {
		if(timer >= timeDelay) {
			Fade.use.Alpha(fadeOutTexture, start, end, fadeSpeed);
			if(timer >= timeDelay + fadeSpeed) fadeOutTexture.enabled = false;
		}
	}
}

//--------------------------------------------------------------------

/*function fadeIn(){
    fadeDir = -1;   
}

//--------------------------------------------------------------------

function fadeOut(){
    fadeDir = 1;   
}*/

function Start(){
    if (mode == Mode.FadeIn)
    {
    	start = 1.0;
    	end = 0.0;
    }
    if (mode == Mode.FadeOut)
    {
    	start = 0.0;
    	end = 1.0;
    }
    fadeActive = true;
}