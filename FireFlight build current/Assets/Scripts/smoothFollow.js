/*
This smoothes out rotation around the y-axis and height.

For every smoothed values calculate the wanted value and the current value.
Then smooth it using the Lerp function.
Then apply the smoothed values to the transform's position.
*/

// The target we are following
var target : Transform;
// The distance in the x-z plane to the target
var distance = 10.0;
// the height we want the camera to be above the target
var height = 5.0;
// left-right distance to the target...aka length for simplicity
var length = 0.0;
// How much we 
var lengthDamping = 3.0;
var heightDamping = 3.0;

// Place the script in the Smooth Follow group in the component menu
@script AddComponentMenu("Smooth Follow")


function Update () {
	// Early out if we don't have a target
	if (!target)
		return;
	
	// Calculate the current rotation angles
	wantedHeight = target.position.y + height;
	wantedLength = target.position.x + length;

	currentHeight = transform.position.y;
	currentLength = transform.position.x;

	// Damp the height and length
	currentHeight = Mathf.Lerp (currentHeight, wantedHeight, heightDamping * Time.deltaTime);
	currentLength = Mathf.Lerp (currentLength, wantedLength, lengthDamping * Time.deltaTime);
	
	// Set the position of the object on the x-z plane to:
	// distance meters behind the target
	transform.position = target.position;
	transform.position.z = target.position.z - distance;

	// Set the height and length of the object
	transform.position.y = currentHeight;
	transform.position.x = currentLength;
	
	// Always look at the target
	//transform.forward = -target.up;
}