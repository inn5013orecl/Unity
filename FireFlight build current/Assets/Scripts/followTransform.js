//////////////////////////////////////////////////////////////
// FollowTransform.js
// Penelope iPhone Tutorial
//
// FollowTransform will follow any assigned Transform and 
// optionally face the forward vector to match for the Transform
// where this script is attached.
//////////////////////////////////////////////////////////////

var targetTransform : Transform;		// Transform to follow
var faceForward : boolean = false;		// Match forward vector?
private var thisTransform : Transform;

function Start()
{
	// Cache component lookup at startup instead of doing this every frame
	thisTransform = transform;
}

function LateUpdate () 
{
	thisTransform.position = targetTransform.position;
	
	if ( faceForward )
		thisTransform.forward = targetTransform.forward;
}