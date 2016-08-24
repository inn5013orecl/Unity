var speedX : float = 10;
var speedY : float = 10;
//var deltaSpeed : float = 0.1; //change in speed
//var maxSpeed : float = 10;
var moveDirection : Vector3 = Vector3.zero;
var autoSpeed : float = 50.0;

var tiltXPositiveThreshold : float = 0;
var tiltXNegativeThreshold : float = 0;
var tiltYPositiveThreshold : float = 0;
var tiltYNegativeThreshold : float = 0;

//var acceleratorOn : boolean = false; //changed to be set in global to give settings options

//private var GlobalVars.neutralPos : float = 0.55; //changed to be set in global to give settings options. same default

var moveJoystick : Joystick;

//rotation variables
private var useIphone : boolean = true;
var rotationDamping = 3.0;
var tiltAngle = -60.0;
var tiltAnglePhone = -90.0;

//assign movement type, tilt or joystick, to these variables
private var movementX: float;
private var movementY: float;

function OnEndGame()
{
	// Disable joystick when the game ends	
	moveJoystick.Disable();
		
	// Don't allow any more control changes when the game ends
	this.enabled = false;
}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
	// get accelerometer values
	var accelerator : Vector3 = Input.acceleration;
	
	//change orientation
	var t : float = accelerator.x;
	accelerator.x = -accelerator.y;
	accelerator.y = -t;

/*	DON'T NEED BECAUSE ACCELERATOR ALREADY HAS BUILT IN VARIABLE SPEED (-1, 1)
	speedY += (accelerator.y - GlobalVars.neutralPos) * deltaSpeed;
	speedX += accelerator.x * deltaSpeed;

//	speedX = Mathf.Abs(speedX);
//	speedY = Mathf.Abs(speedY);
	
	if (speedY > maxSpeed) speedY = maxSpeed;
	if (speedY < -maxSpeed) speedY = -maxSpeed;	
	if (speedX > maxSpeed) speedX = maxSpeed;
	if (speedX < -maxSpeed) speedX = -maxSpeed;
*/
	
	//movement
	
	//movement by Joystick
	var autoMove = autoSpeed;// * Time.deltaTime;
	if (moveJoystick.position.x > 1) moveJoystick.position.x = 1.0;
	if (moveJoystick.position.y > 1) moveJoystick.position.y = 1.0;
	if (moveJoystick.position.x < -1) moveJoystick.position.x = -1.0;
	if (moveJoystick.position.y < -1) moveJoystick.position.y = -1.0;
	

	//adjust for default screen tilt and movement by tilt
	if (GlobalVars.acceleratorOn == true) {
		accelerator.y = accelerator.y - GlobalVars.neutralPos;
		movementX = accelerator.x;
		movementY = accelerator.y;
	}
	//movement by Joystick
	else {
		movementX = moveJoystick.position.x;
		movementY = moveJoystick.position.y;
	}
	
	//apply movement	
	var moveDirection : Vector3 = Vector3(Input.GetAxis("Horizontal") || movementX, 
								  Input.GetAxis("Vertical") || movementY, 0);
	
//	moveDirection.Normalize();
	
//	moveDirection.x = speedX * Time.deltaTime * moveDirection.x;
//	moveDirection.y = speedY * Time.deltaTime * moveDirection.y;
	
	
	var absJoyPos = Vector2( Mathf.Abs( moveJoystick.position.x ), Mathf.Abs( moveJoystick.position.y ) );
	moveDirection.x *= speedX; // * ( ( absJoyPos.x > absJoyPos.y ) ? absJoyPos.x : absJoyPos.y );
	moveDirection.y *= speedY; // * ( ( absJoyPos.x > absJoyPos.y ) ? absJoyPos.x : absJoyPos.y );
	
	moveDirection *= Time.deltaTime;
		
	controller.Move(moveDirection);
	
/*	if(useIphone) {	
		var tiltAroundY = accelerator.x * tiltAnglePhone;
		var target = Quaternion.Euler (270, tiltAroundY, 0);
		//Dampen towards the target rotation
		transform.Rotate(Vector3.forward * Time.deltaTime * accelerator.x * 10);
		//transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * rotationDamping);
	}
	
	tiltAroundY = Input.GetAxis("Horizontal") * tiltAngle;
	target = Quaternion.Euler (270, tiltAroundY, 0);
	// Dampen towards the target rotation
	transform.Rotate(Vector3.forward * Time.deltaTime * Input.GetAxis("Horizontal") * 10);
//	transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * rotationDamping); */
}

@script RequireComponent(CharacterController)