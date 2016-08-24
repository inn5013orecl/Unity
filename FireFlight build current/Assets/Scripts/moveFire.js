//Movement of bullet once it is shot

var speedFire: float = 250;
var poofSound: AudioClip;

function Update () {
	transform.Translate(Vector3.forward * Time.deltaTime * speedFire);
	Destroy (gameObject,2);

}