/*condition for orientation error in android tab 10 inch*/
isAndroidV10=false;
if($(window).width()==1280 && $(window).height()==631 ||$(window).width()==1280  && $(window).height()==656)
	{
		isAndroidV10=true;
	}

function doOnOrientationChange() {
		
		if(isAndroidV10){
			switch(window.orientation) {  
			  case -90:
			  case 90:
			  case undefined:
				//alert('portrait '+window.orientation);
				$(".clsOrientationBox").css("display","block");
				fnPauseAudio();
				break;
			  default:
				//alert('landscape '+window.orientation);
				$(".clsOrientationBox").css("display","none");
				fnPlayAudio();
				break; 
			}
		}
		else{
			switch(window.orientation) {  
			  case -90:
			  case 90:
			  case undefined:
				//alert('landscape '+window.orientation);
				$(".clsOrientationBox").css("display","none");
				fnPlayAudio();
				break;
			  default:
				//alert('portrait '+window.orientation);
				$(".clsOrientationBox").css("display","block");
				fnPauseAudio();
				break; 
			}
			
			
		}
}  
window.addEventListener('orientationchange', doOnOrientationChange);