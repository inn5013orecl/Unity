//import PreviewLabs.PlayerPrefs;

//control types and options menu
static var acceleratorOn : boolean = true;
static var optionEnabled : boolean = false;
static var neutralPos : float = 0.55;
static var axisType : boolean = false;
static var musicOn : boolean = true;

//game varaibles
static var defaultScore : int = 0;
static var defaultLives : int = 0;
static var defaultWeapon : int = 0;
static var defaultArmor : int = 0;
static var defaultLevel : int = 0;

//used to set state of game throughout all FireFlightMenuScreens scripts
static var paused : boolean = true;

//used to ensure player can't just "boost"/"brake" through an obstacle
static var stuck : boolean = false;

static var score : int = 0;
static var highScore : int = 0;
static var eggCount : int = 0;
static var eggsCollected : int = 0;

static var attackLevel: int = 1;
static var attackSpeed1: int = 3;
static var attackSpeed2: int = 4;
static var attackSpeed3: int = 5;

function Update () {
}


/* C# FORMAT
using UnityEngine;
using System.Collections;
#if !UNITY_WEBPLAYER
	using PlayerPrefs = PreviewLabs.PlayerPrefs;
#endif
namespace GlobalVariables {
	public class GlobalVars : MonoBehaviour {
		//control types and options menu
		public static bool acceleratorOn = true;
		public static bool optionEnabled = false;
		public static float neutralPos = 0.55f;
		public static bool axisType = false;
		public static bool musicOn = true;
		
		//game variables
		public static int defaultScore = 0;
		public static int defaultLives = 0;
		public static int defaultWeapon = 0;
		public static int defaultArmor = 0;
		public static int defaultLevel = 0;
		
		//used to set state of game throughout all FireFlightMenuScreens scripts
		public static bool paused = true;
		
		//used to ensure player can't just "boost"/"brake" through an obstacle
		public static bool stuck = false;
		
		//level variables
		public static int score = 0;
		public static int highScore = 0;
		public static int eggCount = 0;
		public static int eggsCollected = 0;
		
		public static int attackLevel = 1;
		public static int attackSpeed1 = 3;
		public static int attackSpeed2 = 4;
		public static int attackSpeed3 = 5;
		// Use this for initialization
		void Start () {
		
		}
		
		// Update is called once per frame
		void Update () {
		
		}
	}
}*/
