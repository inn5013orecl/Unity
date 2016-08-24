//shooting bullets

var prefabPrimary : GameObject;
private var primaryTimer : float = 0; //used to control shooting frequency
private var secondaryTimer : float = 0; //used to control shooting frequency

public var walkAnimation : AnimationClip;
public var specialAnimation : AnimationClip;

public var walkAnimationSpeed : float = 1.0;
public var specialAnimationSpeed : float = 1.0;

private var _animation;

var immunity : boolean = false;

enum CharacterState {
	Walking = 0,
	Special = 1,
}

var _characterState : CharacterState;

function Awake () {
	_animation = GetComponent(Animation);
	
	//error checking : make sure that animations are available
	if(!specialAnimation) {
		_animation = null;
		Debug.Log("No special animation found. Turning off animations.");
	}
	if(!walkAnimation) {
		_animation = null;
		Debug.Log("No walk animation found. Turning off animations.");
	}
	
	_animation.Play(walkAnimation.name);
}

function Update () {
	primaryTimer += Time.deltaTime;
	secondaryTimer += Time.deltaTime;
}

function LateUpdate () {
	//use LateUpdate to make sure movements are all input first so the animations have something to call on
	
//	var myChar : GameObject = GameObject.Find("character");
//	var charScript : charMove = myChar.GetComponent(charMove);
	
	if(_characterState == CharacterState.Special) _animation.Play(specialAnimation.name);
	else _characterState = CharacterState.Walking;
	
//	facingDirection();
	
	// Animations
	if(_animation) {
		if(_characterState == CharacterState.Special)
		{
			_animation[specialAnimation.name].speed = specialAnimationSpeed;
			_animation.Play(specialAnimation.name);
		}
		if(_characterState == CharacterState.Walking)
		{
			_animation[walkAnimation.name].speed = walkAnimationSpeed;
			_animation.Play(walkAnimation.name);
		}
/*		if(_characterState == CharacterState.TurnLeft)
		{
			_animation[turnLeftAnimation.name].speed = turnAnimationSpeed;
			_animation.Play(turnLeftAnimation.name);
		}
		if(_characterState == CharacterState.TurnRight)
		{
			_animation[turnRightAnimation.name].speed = turnAnimationSpeed;
			_animation.Play(turnRightAnimation.name);
		} */
	}
}

/*function Primary () {
	if(primaryTimer >= 0.25)
	{
		var myTarget : GameObject = GameObject.Find("target");
		var spawner : GameObject = GameObject.Find("fireballSpawner");
		
		//instantiates bullets with positioning and rotation
		var clone : GameObject = Instantiate(prefabPrimary, spawner.transform.position,
		transform.rotation);
		
		clone.transform.LookAt(myTarget.transform);	
		
		//add sound
//		audio.PlayOneShot(pewpew);

		primaryTimer = 0; //reset timer
		
		//self-destroy bullet after 5 seconds
		Destroy (clone, 5);
	}
} */

function Slowdown () {
/*	var myTarget : GameObject = GameObject.Find("target");
	var targetScript : movementTarget = myTarget.GetComponent(movementTarget);
	
	//save original speeds
	normalSpeedX = targetScript.speedX;
	normalSpeedY = targetScript.speedY;
	normalAutoSpeed = targetScript.autoSpeed; */
	
//	if(secondaryTimer >= 3)
//	{
		//special move animation
//		_characterState = CharacterState.Special;
		walkAnimationSpeed = 0.5;
//		immunity = true;
//		targetScript.speedX = 0;
//		targetScript.speedY = 0;
//		targetScript.autoSpeed = 2.0;
//		yield WaitForSeconds (0.7);
//		yield WaitForSeconds(3.3);
//		immunity = false;
//		_characterState = CharacterState.Walking;
//		targetScript.speedX = normalSpeedX;
//		targetScript.speedY = normalSpeedY;
//		targetScript.autoSpeed = normalAutoSpeed;

		//reset timer
//		secondaryTimer = 0;
//	}
}

function NormalSpeed () {
	walkAnimationSpeed = 1.0;
}

@script RequireComponent(AudioSource)


function facingDirection() {
	if(Input.GetAxisRaw != 0) var h = Input.GetAxisRaw ("Horizontal");
	
	print("direction " + h);
	if(h == 1) transform.eulerAngles = new Vector3(0, 0, 0);
	if(h == -1) transform.eulerAngles = new Vector3(0, 180, 0);
}
