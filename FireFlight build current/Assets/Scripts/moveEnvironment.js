private var thisTransform : Transform;

var speed : float = 0;
private var originalSpeed : float = 0;

var boostSpeed : float = 5;
var breakSpeed : float = 3;

var boostClip : AudioClip;
var breakClip : AudioClip;

function Start () {
	//cache original variables
	thisTransform = transform;
	originalSpeed = speed;
	
	//count number of eggs to store for victory and loss screen
	GlobalVars.eggCount = GameObject.FindGameObjectsWithTag("egg").Length;
}

function Update () {
	thisTransform.Translate(Vector3.forward * -speed * Time.deltaTime);
//	print("SPEED  " + speed);
}

function Boosting () {
	speed = originalSpeed + boostSpeed;
	if(boostClip != null) {
		audio.clip = boostClip;
		audio.Play();
	}
}

function Breaking () {
	speed = originalSpeed - breakSpeed;
	if(breakClip != null) {
		audio.clip = breakClip;
		audio.Play();
	}
	var dragon : GameObject = GameObject.Find("Dragon");
	dragon.SendMessage("Slowdown");
}

function Normaling () {
	speed = originalSpeed;
	audio.Stop();
	var dragon : GameObject = GameObject.Find("Dragon");
	dragon.SendMessage("NormalSpeed");
}