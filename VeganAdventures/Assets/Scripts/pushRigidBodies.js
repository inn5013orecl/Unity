//push all rigidbodies that the character touches

var pushPowerV : float = 0.1;
var pushPowerH : float = 2.0;

function OnControllerColliderHit (hit : ControllerColliderHit) {
    var body : Rigidbody = hit.collider.attachedRigidbody;
    // no rigidbody
    if (body == null || body.isKinematic)
        return;
        
    // Calculate push direction from move direction 
    var pushDirVertical : Vector3 = Vector3 (0, hit.moveDirection.y, 0);
    var pushDirHorizontal : Vector3 = Vector3 (hit.moveDirection.x, 0, 0);
    
    //Can also multiply the push velocity by speed of character if it's recorded to a variable.
    
    // Apply the push
    body.velocity = pushDirHorizontal * pushPowerH;
    body.AddForceAtPosition(pushDirVertical * pushPowerV, hit.point);
}

function Update () {
}