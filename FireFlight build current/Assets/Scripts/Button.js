var messagee : GameObject;
var message : String = "";

function Update () {
	if (Input.touchCount > 0)
	{
		for (var T : Touch in Input.touches)
		{
			if(T.phase == TouchPhase.Began && guiTexture.HitTest(T.position))
			{
            	if(messagee != null && message != "")
            	{
            		messagee.SendMessage(message);
            	}
         	}
		}
	}
}

/*if (HitTest(touch.position))
            {
                if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
                {
                    SetButtonTexture(ButtonState.normal);
                }
                else
                {
                    SetButtonTexture(ButtonState.armed);
                }
                if (touch.phase == TouchPhase.Began)
                {
                    if (touch.tapCount == 1)
                    {
                        if (messagee != null && message != "")
                        {
                            messagee.SendMessage(message, this);
                        }
                    }
                    else if (touch.tapCount == 2)
                    {
                        if (messagee != null && messageDoubleClick != "")
                        {
                            messagee.SendMessage(messageDoubleClick, this);
                        }
                    }
                }
                break;
            }
*/