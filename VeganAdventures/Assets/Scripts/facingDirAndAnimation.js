public var idleAnimation : AnimationClip;
public var walkAnimation : AnimationClip;

public var walkAnimationSpeed : float = 1.0;
public var runAnimationSpeed : float = 1.0;
public var jumpAnimationSpeed : float = 1.5;

private var _animation;

enum CharacterState {
	Idle = 0,
	Walking = 1,
	Running = 3,
	Jumping = 4,
}

private var _characterState : CharacterState;

function Awake () {
	_animation = GetComponent(Animation);
	
	if(!idleAnimation) {
		_animation = null;
		Debug.Log("No idle animation found. Turning off animations.");
	}
	if(!walkAnimation) {
		_animation = null;
		Debug.Log("No walk animation found. Turning off animations.");
	}
	
	_animation.Play(idleAnimation.name);
}

function Update () {
	var myChar : GameObject = GameObject.Find("character");
	var charScript : charMove = myChar.GetComponent(charMove);
	
	if(charScript.isGround == false) _characterState = CharacterState.Jumping;
	else
	{
		if(Input.GetAxis("Horizontal"))
		{
			_characterState = CharacterState.Walking;
		}
		else _characterState = CharacterState.Idle;
	}
	
	Debug.Log("grounded?? " + charScript.isGround);
	
	facingDirection();
	
	// Animations
	if(_animation) {
		if(_characterState == CharacterState.Jumping)
		{
			_animation[walkAnimation.name].speed = jumpAnimationSpeed;
			_animation.Play(walkAnimation.name);
		}
		if(_characterState == CharacterState.Walking)
		{
			_animation[walkAnimation.name].speed = walkAnimationSpeed;
			_animation.Play(walkAnimation.name);
		}
		if(_characterState == CharacterState.Idle)
		{
			_animation.Play(idleAnimation.name);
		}
	}
}

function facingDirection() {
	if(Input.GetAxisRaw != 0) var h = Input.GetAxisRaw ("Horizontal");
	
	print("direction " + h);
	if(h == 1) transform.eulerAngles = new Vector3(0, 0, 0);
	if(h == -1) transform.eulerAngles = new Vector3(0, 180, 0);
}