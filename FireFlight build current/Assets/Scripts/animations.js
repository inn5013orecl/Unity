public var walkAnimation : AnimationClip;
public var specialAnimation : AnimationClip;

public var walkAnimationSpeed : float = 1.0;
public var specialAnimationSpeed : float = 1.0;

private var _animation;
/*
enum CharacterState {
	Walking = 0,
	Special = 1,
}
*/

private var _characterState : CharacterState;

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

function LateUpdate () {
	//use LateUpdate to make sure movements are all input first so the animations have something to call on
	
//	var myChar : GameObject = GameObject.Find("character");
//	var charScript : charMove = myChar.GetComponent(charMove);
	
	if(Input.GetKey(KeyCode.Space)) _animation.Play(specialAnimation.name);
	else _characterState = CharacterState.Walking;
	
//	facingDirection();
	
	// Animations
	if(_animation) {
//		if(_characterState == CharacterState.Special)
//		{
//			_animation[specialAnimation.name].speed = specialAnimationSpeed;
//			_animation.Play(specialAnimation.name);
//		}
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

/*
function facingDirection() {
	if(Input.GetAxisRaw != 0) var h = Input.GetAxisRaw ("Horizontal");
	
	print("direction " + h);
	if(h == 1) transform.eulerAngles = new Vector3(0, 0, 0);
	if(h == -1) transform.eulerAngles = new Vector3(0, 180, 0);
}
*/