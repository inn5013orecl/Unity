var fadeTime : float = 5;

private var alpha = 1.0;
private var fadeDir = -1;
public var fadeSpeed = 0.3;

private var timer : float = 0;

function Update () {
	
	timer += Time.deltaTime;
	
//	alpha = guiTexture.color.a;
	
	if(timer >= fadeTime) {
		alpha += fadeDir * fadeSpeed * Time.deltaTime; 
		alpha = Mathf.Clamp01(alpha);
		guiTexture.color.a = alpha;
		
	}
	
	if(timer >= (fadeTime+3))
	Destroy (gameObject);
}