//this script simply controls the tilt and collision effects of the dragon, nothing else

//var lookAt : Transform;
var rotationDamping = 3.0;
var tiltAngle = -60.0;
var tiltAnglePhone = -90.0;

var moveJoystick : Joystick;

private var useIphone : boolean = true;

function Update () {
	var accelerator : Vector3 = Input.acceleration;
	
	if(useIphone) {
		//rotate phone orientation
		var t : float = accelerator.x;
		accelerator.x = - accelerator.y;
		accelerator.y = t;
		
		var tiltAroundZ = moveJoystick.position.x * tiltAnglePhone;
		var target = Quaternion.Euler (0, 0, tiltAroundZ);
		//Dampen towards the target rotation
		transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * rotationDamping);
	}
	
	tiltAroundZ = Input.GetAxis("Horizontal") * tiltAngle;
	target = Quaternion.Euler (0, 0, tiltAroundZ);
	// Dampen towards the target rotation
	transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * rotationDamping);

//	transform.LookAt(lookAt, transform.up);
}

/*function OnTriggerEnter (other: Collider) {
	if(other.gameObject.tag == "Player")
	{
		var health : GameObject = GameObject.Find("health");
		health.SendMessage("ReduceHealth");
		Blink(3.0);
	}
}*/

//causes the dragon to blink set amount of time
function Blink(waitTime : float) {
	var endTime : float = Time.time + waitTime;
//	print(Time.time);
//	print("END TIME " + endTime);

/*	var polygons : GameObject = GameObject.Find("polysurface33");
	while(Time.time < waitTime) {
		for (var child : Transform in polygons.transform) {
			if(child.renderer) {
				child.renderer.enabled = false;
				yield WaitForSeconds(0.5);
				child.renderer.enabled = true;
				yield WaitForSeconds(0.5);
			}
		}
	}*/
	var allRenderers : Renderer[];
	allRenderers = gameObject.GetComponentsInChildren.<Renderer>();
	while(Time.time < endTime) {
		for (var renderers : Renderer in allRenderers) {
			renderers.enabled = false;
		}
		yield WaitForSeconds(0.15);
		for (var renderers : Renderer in allRenderers) {
			renderers.enabled = true;
		}
		yield WaitForSeconds(0.15);
	}
}




