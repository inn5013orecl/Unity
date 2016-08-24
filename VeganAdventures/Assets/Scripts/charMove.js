// This script moves the character controller left and right
// It also jumps when pressing space
// Requires a Character Controller to be attached to object

var speed : float = 6.0;
var jumpSpeed : float = 10.0;
var gravity : float = 20.0;
var velocity : float = 0;

private var counter : float = 0;
private var moveDirection : Vector3 = Vector3.zero;

// Moving platform support
private var activePlatform : Transform;
private var activeLocalPlatformPoint : Vector3;
private var activeGlobalPlatformPoint : Vector3;
private var lastPlatformVelocity : Vector3;

var isGround : boolean = false;

function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
    if (controller.isGrounded) {
		counter = 1;
		moveDirection.y = 0;
		isGround = true;
    }
    else 
    	isGround = false;
    
    // Ensure object doesn't get off path (depth-wise)
    transform.position.z = 0;

	// move direction directly from axes
	var moveDirection2 : Vector3 = Vector3(Input.GetAxis("Horizontal"), 0, 0);
    
	// Apply horizontal movement
	moveDirection.x = speed * moveDirection2.x;
	moveDirection.z = speed * moveDirection2.z;
	
	print("moving " + moveDirection.x);

	//Double jump
	if (Input.GetButtonDown ("Jump")  && counter%3 != 0) {
		moveDirection.y = jumpSpeed;
		counter ++;
	}

	// Apply gravity
	moveDirection.y -= gravity * Time.deltaTime;

	
	moveDirection = transform.TransformDirection(moveDirection);
	moveDirection2 = transform.TransformDirection(moveDirection2);
	
    // Moving platform support
    if (activePlatform != null) {
        var newGlobalPlatformPoint = activePlatform.TransformPoint(activeLocalPlatformPoint);
        var moveDistance = (newGlobalPlatformPoint - activeGlobalPlatformPoint);
        if (moveDistance != Vector3.zero) controller.Move(moveDistance);
//        lastPlatformVelocity = (newGlobalPlatformPoint - activeGlobalPlatformPoint) / Time.deltaTime;
    }
    	if(Input.GetKey(KeyCode.X))	print("platform movement " + moveDistance);
 //   else {
   //     lastPlatformVelocity = Vector3.zero;
//    }

    activePlatform = null;
    
	// Move the controller (framerate independent)
	controller.Move(moveDirection * Time.deltaTime);
	
	// Moving platforms support
    if (activePlatform != null) {
        activeGlobalPlatformPoint = transform.position;
        activeLocalPlatformPoint = activePlatform.InverseTransformPoint (transform.position);

        // Support moving platform rotation as well
        activeGlobalPlatformRotation = transform.rotation;
        activeLocalPlatformRotation = Quaternion.Inverse(activePlatform.rotation) * transform.rotation; 
    }
}

function OnControllerColliderHit (hit : ControllerColliderHit) {
	// Make sure we are really standing on a straight platform
	// Not on the underside of one and not falling down from it either!
	if (hit.moveDirection.y < -0.9 && hit.normal.y > 0.5) activePlatform = hit.collider.transform;
}

@script RequireComponent (CharacterController)