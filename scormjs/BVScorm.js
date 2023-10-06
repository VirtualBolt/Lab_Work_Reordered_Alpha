var bShowAPIErrors = true;
var strAPINotFoundMessage = "Unexpected error. Please re-start the course from the bookmark." + "\n\n" + "For technical personnel:";

// define global var to detect scorm version
//var scormVersion="scorm_2004"
var scormVersion="scorm_1.2"
//===================================================================================================================

var BVScorm_API = null;
var suspend_data;
var lesson_location;
var startDate;
var finish=0;
var bAPINotFoundMessageShown = false;
var bIsErrorMessageShown = false; // To prevent showing API errors multiple times in a session.
var windowClosed =false;

//===================================================================================================================
function BVScorm_getAPI() {
	var myAPI = null;
	var tries = 0, triesMax = 10;
	while (tries<triesMax && myAPI == null) {
		myAPI = findAPI(window);
    if (myAPI == null && typeof(window.parent) != 'undefined')
		myAPI = findAPI(window.parent)
    if (myAPI == null && typeof(window.top) != 'undefined')
		myAPI = findAPI(window.top);
    if (myAPI == null && typeof(window.opener) != 'undefined')
	{
		if (window.opener != null && !window.opener.closed)
		{
			myAPI = findAPI(window.opener);
		}
	}

    if (myAPI == null && window.opener!=null && typeof(window.opener) != 'undefined'){
    	if (myAPI == null && window.opener.parent!=null && typeof(window.opener.parent) != 'undefined')
			myAPI = findAPI(window.opener.parent)
	    if (myAPI == null && window.opener.top!=null && typeof(window.opener.top) != 'undefined'){
			if (window.opener.top != null && !window.opener.top.closed){
				myAPI = findAPI(window.opener.top);
		}
		if (myAPI == null && window.opener.top.opener != null && !window.opener.top.opener.closed){
			myAPI = findAPI(window.opener.top.opener);
			if (myAPI == null && window.opener.top.opener.top != null && !window.opener.top.opener.top.closed){
				myAPI = findAPI(window.opener.top.opener.top);
			}
		}
	    }
    }
    tries++;
	}
	if (myAPI == null) {
			//BVScorm_throwError(strAPINotFoundMessage);
	} else {
		BVScorm_API = myAPI;
	}
}
////********************************************************************************************************
function findAPI(win) {
	//*-*----------------------------------
	// look in this window
	if (scormVersion == "scorm_2004") {
		if (typeof (win) != 'undefined' ? typeof (win.API_1484_11) != 'undefined' : false) {
			if (win.API_1484_11 != null) {
				return win.API_1484_11;
			}
		}
	}
	if (scormVersion == "scorm_1.2") {
		if (typeof (win) != 'undefined' ? typeof (win.API) != 'undefined' : false) {
			if (win.API != null) {
				return win.API;
			}
		}
	}
	// look in this window's frameset kin (except opener)
	if (win.frames.length>0) {
		for (var i = 0; i<win.frames.length; i++) {
			if (scormVersion == "scorm_2004") {
				if (typeof (win.frames[i]) != 'undefined' ? typeof (win.frames[i].API_1484_11) != 'undefined' : false) {
					if (win.API_1484_11 != null) {
						return win.API_1484_11;
					}
				}
			}
			if (scormVersion == "scorm_1.2") {
				if (typeof (win.frames[i]) != 'undefined' ? typeof (win.frames[i].API) != 'undefined' : false) {
					if (win.API != null) {
						return win.API;
					}
				}
			}
		}
	}
	return null;
	//*-*----------------------------------
	/*if (typeof (win) != 'undefined' ? typeof (win.API) != 'undefined' : false) {
		if (win.API != null) {
			return win.API;
		}
	}
	if (win.frames.length>0) {
		for (var i = 0; i<win.frames.length; i++) {
		}
	}
	if (typeof (win.frames[i]) != 'undefined' ? typeof (win.frames[i].API) != 'undefined' : false) {
		if (win.frames[i].API != null) {
			return win.frames[i].API;
		}
	}
	return null;*/
}
////********************************************************************************************************
function BVScorm_throwError(lStr){
	if (bShowAPIErrors){
		if (!bIsErrorMessageShown){
			bIsErrorMessageShown = true;
			alert(lStr);
		}
	}
}

////********************************************************************************************************
function BVScorm_checkIfAPIAvailable(){
	if ((typeof(BVScorm_API) == "undefined") || (BVScorm_API == null)){
		//alert("false");
		return false;
	}else{
		//alert("true");
		return true;
	}
}


////********************************************************************************************************
function BVScorm_checkLastError(strCheckCommand){
	var llastErrorNum = BVScorm_API.LMSGetLastError();
	if (llastErrorNum!="0"){
		BVScorm_throwError(strAPINotFoundMessage + "\n" + strCheckCommand + BVScorm_API.LMSGetErrorString(llastErrorNum));
		top.close();
		return false;
	}
	return true;
}

////********************************************************************************************************
function BVScorm_adlOnload() {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	//alert("BVScorm_adlOnload: "+BVScorm_checkIfAPIAvailable())
	if (BVScorm_checkIfAPIAvailable()) {
		try{
			//*-*------------------------------------------
			//alert("SHREE API="+BVScorm_API);
			if(scormVersion=="scorm_2004"){
				var res = BVScorm_API.Initialize("")
			}
			if(scormVersion=="scorm_1.2"){
				var res = BVScorm_API.LMSInitialize("");
			}
			/*var res = BVScorm_API.LMSInitialize("");
				if (!BVScorm_checkLastError("LMSInitialize : ")){
				return;
			}*/
			//*-*------------------------------------------
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		BVScorm_incomplete();
		startTimer();
		suspend_data = BVScorm_getcoredata();
		lesson_location = BVScorm_getlocation();
		//getIntermediateparam();
	} else {
	  //document.Main.Play();
	}
}
////********************************************************************************************************
function BVScorm_adlOnunload() {
	console.log("here");
	if(windowClosed){
		return;
	}
	windowClosed = true;
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable() && finish==0) {
		finish=1;

		if(scormVersion=="scorm_2004"){
			var getStatus = BVScorm_API.GetValue("cmi.completion_status");
			//computeTimeScorm()
			var currentDate = new Date().getTime();
			var elapsedSeconds = ( (currentDate - startDate) / 1000 );
			var elapsedcentiseconds = (elapsedSeconds*100)
			formattedTimeScorm2004 = centisecsToISODuration(elapsedcentiseconds,true)
			var res = BVScorm_API.SetValue("cmi.session_time", formattedTimeScorm2004);
			if(getStatus=="completed"){
				BVScorm_API.SetValue( "cmi.exit", "normal" );
			}else{
				BVScorm_API.SetValue("cmi.exit", "suspend");
			}
			var res = BVScorm_API.Terminate("");
			isLMSfinishTrigered=true
			BVScorm_API = null;
			//BVScorm_API.Commit("");
		}
		if(scormVersion=="scorm_1.2"){
			computeTime();
			var res = BVScorm_API.LMSFinish("");
			//isLMSfinishTrigered=true
		}
		/*try{
			var res = BVScorm_API.LMSCommit("");
			if (!BVScorm_checkLastError("LMSCommit : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		res = BVScorm_API.LMSFinish("");
		if (res==false){
			if (!BVScorm_checkLastError("LMSFinish : ")){
				return;
			}
		}*/
	}
	// top.close();
	// window.opener.top.close();
	location.reload();
}
////********************************************************************************************************
function BVScorm_complete() {
	// alert("SS BVScorm_complete");
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*----------------------------------------------------
		if(scormVersion=="scorm_2004"){
			var res = BVScorm_API.SetValue("cmi.completion_status", "completed");
			//BVScorm_API.SetValue( "cmi.exit", "" );
			BVScorm_API.Commit("");
		}
		if(scormVersion=="scorm_1.2"){
			var res = BVScorm_API.LMSSetValue("cmi.core.lesson_status", "completed");
			BVScorm_API.LMSCommit("")
		}
		/*try{
			var res = BVScorm_API.LMSSetValue("cmi.core.lesson_status", "completed");
			if (!BVScorm_checkLastError("Set - cmi.core.lesson_status : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		res = BVScorm_API.LMSCommit("");
		if (!BVScorm_checkLastError("LMSCommit : ")){
			return;
		}*/
	//*-*----------------------------------------------------

	}
}
////********************************************************************************************************
function BVScorm_incomplete() {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		if(scormVersion=="scorm_2004"){
			if(BVScorm_API.GetValue("cmi.completion_status") == "not attempted"){
				var res = BVScorm_API.SetValue("cmi.completion_status", "incomplete");
			}
			if(BVScorm_API.GetValue("cmi.completion_status") == "unknown"){
				var res = BVScorm_API.SetValue("cmi.completion_status", "not attempted");
			}
			BVScorm_API.Commit("");
		}
		if(scormVersion=="scorm_1.2"){
			if(BVScorm_API.LMSGetValue("cmi.core.lesson_status") == "not attempted"){
				var res = BVScorm_API.LMSSetValue("cmi.core.lesson_status", "incomplete");
			}
			res = BVScorm_API.LMSCommit("");
		}

		/*try{
			var res = BVScorm_API.LMSSetValue("cmi.core.lesson_status", "incomplete");
			if (!BVScorm_checkLastError("Set - cmi.core.lesson_status : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		res = BVScorm_API.LMSCommit("");
		if (!BVScorm_checkLastError("LMSCommit : ")){
			return;
		}*/
	}
}
////********************************************************************************************************
function BVScorm_setcoredata(args) {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*-----------------------------------------
		if(scormVersion=="scorm_2004"){
			var res = BVScorm_API.SetValue("cmi.suspend_data", args);
			BVScorm_API.Commit("");
		}
		if(scormVersion=="scorm_1.2"){
			var res = BVScorm_API.LMSSetValue("cmi.suspend_data", args);
			BVScorm_API.LMSCommit("");
		}
		/*try{
			var res = BVScorm_API.LMSSetValue("cmi.suspend_data", args);
			if (!BVScorm_checkLastError("Set - cmi.suspend_data : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		res = BVScorm_API.LMSCommit("");
		if (!BVScorm_checkLastError("LMSCommit : ")){
			return;
		}
		return res;*/
		//*-*-----------------------------------------
	}
}
////********************************************************************************************************
function BVScorm_getcoredata() {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*-----------------------------------------------------
		if(scormVersion=="scorm_2004"){
			var res = BVScorm_API.GetValue("cmi.suspend_data");
		}
		if(scormVersion=="scorm_1.2"){
			var res = BVScorm_API.LMSGetValue("cmi.suspend_data");
		}
		return res;


		/*try{
			var res = BVScorm_API.LMSGetValue("cmi.suspend_data");
			if (!BVScorm_checkLastError("Get - cmi.suspend_data : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		return res;*/
		//*-*-----------------------------------------------------
	}
}
function BVScorm_getscore() {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*----------------------------------------------
		var ret
		if(scormVersion=="scorm_2004"){
			ret = BVScorm_API.GetValue("cmi.score.raw");
		}
		if(scormVersion=="scorm_1.2"){
			ret = BVScorm_API.LMSGetValue("cmi.core.score.raw");
		}
		return ret
	}
}

////********************************************************************************************************
function BVScorm_score(score) {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*----------------------------------------------
		if(scormVersion=="scorm_2004"){
			BVScorm_API.SetValue("cmi.score.raw", score);
			BVScorm_API.SetValue("cmi.score.min","0");
			BVScorm_API.SetValue("cmi.score.max","100");
			BVScorm_API.SetValue("cmi.score.scaled",score/100);
			BVScorm_API.Commit("");
		}
		if(scormVersion=="scorm_1.2"){
			BVScorm_API.LMSSetValue("cmi.core.score.raw", score);
			BVScorm_API.LMSCommit("")
		}
		/*try{
        	var res = BVScorm_API.LMSSetValue("cmi.core.score.raw", score);
			if (!BVScorm_checkLastError("Set - cmi.core.score.raw : ")){
				return;
			}
        }
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		BVScorm_API.LMSSetValue("cmi.core.score.min","0");
		if (!BVScorm_checkLastError("Set - cmi.core.score.min : ")){
			return;
		}

		BVScorm_API.LMSSetValue("cmi.core.score.max","100");
		if (!BVScorm_checkLastError("Set - cmi.core.score.max : ")){
			return;
		}

		res = BVScorm_API.LMSCommit("");
		if (!BVScorm_checkLastError("LMSCommit : ")){
			return;
		}*/
		//*-*----------------------------------------------
	}
}
////********************************************************************************************************
function BVScorm_Pass() {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*------------------------------------------------------------
		if(scormVersion=="scorm_2004"){
		//	var res = BVScorm_API.SetValue("cmi.completion_status", "passed");
			//BVScorm_API.SetValue( "cmi.exit", "" );
		///	BVScorm_API.Commit("");
		}
		if(scormVersion=="scorm_1.2"){
		//	var res = BVScorm_API.LMSSetValue("cmi.core.lesson_status", "passed");
			//BVScorm_API.LMSCommit("")
		}
		/*try{
			var res = BVScorm_API.LMSSetValue("cmi.core.lesson_status", "Pass");
			if (!BVScorm_checkLastError("Set - cmi.core.lesson_status : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		res = BVScorm_API.LMSCommit("");
		if (!BVScorm_checkLastError("LMSCommit : ")){
			return;
		}*/
		//*-*------------------------------------------------------------
	}
}
////********************************************************************************************************
function BVScorm_Fail() {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*------------------------------------------------------------
		if(scormVersion=="scorm_2004"){
			//var res = BVScorm_API.SetValue("cmi.completion_status", "failed");
			//BVScorm_API.SetValue( "cmi.exit", "" );
			//BVScorm_API.Commit("");
		}
		if(scormVersion=="scorm_1.2"){
			//var res = BVScorm_API.LMSSetValue("cmi.core.lesson_status", "failed");
			//BVScorm_API.LMSCommit("")
		}
		/*try{
			var res = BVScorm_API.LMSSetValue("cmi.core.lesson_status", "Fail");
			if (!BVScorm_checkLastError("Set - cmi.core.lesson_status : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		res = BVScorm_API.LMSCommit("");
		if (!BVScorm_checkLastError("LMSCommit : ")){
			return;
		}*/
		//*-*------------------------------------------------------------
	}
}
////********************************************************************************************************
function getIntermediateparam() {
	if (document.Main.PercentLoaded() == 100) {
		document.Main.SetVariable("SuspendedData", suspend_data);
		if(lesson_location!="")
		{
			if (window.confirm("Do you want to go to the last visited page?") == true)
			document.Main.SetVariable("Lesson_location", lesson_location);
		   else
			document.Main.SetVariable("Lesson_location", "0");
		}else
		   document.Main.SetVariable("Lesson_location", "0");
		document.Main.SetVariable("_root.DataLoaded1", "true");
		document.Main.Play();
		return;
	} else {
		setTimeout('getIntermediateparam()', 300);
	}
}
////********************************************************************************************************
function BVScorm_setlocation(lPageNum) {
	
/** Review Code **/
      try{
        // window.opener.RPAInitReviewFrames(window, "window.opener.", lPageNum,"http://wow.brainvisa.com/Edwards_Lifesciences/Edwards%20Lifesciences%20Projects/EDL11","");
       }catch(e){}
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*--------------------------------------
		if(scormVersion=="scorm_2004"){
			var res = BVScorm_API.SetValue("cmi.location", lPageNum);
			BVScorm_API.Commit("");
		}
		if(scormVersion=="scorm_1.2"){
			var res = BVScorm_API.LMSSetValue("cmi.core.lesson_location", lPageNum);
			BVScorm_API.LMSCommit("");
		}
		/*try{
			var res = BVScorm_API.LMSSetValue("cmi.core.lesson_location", lPageNum);
			if (!BVScorm_checkLastError("Set - cmi.core.lesson_location : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		res = BVScorm_API.LMSCommit("");
		if (!BVScorm_checkLastError("LMSCommit : ")){
			return;
		}
		return res;*/
		//*-*--------------------------------------
	}
}
////********************************************************************************************************
function BVScorm_getlocation() {
	if (!BVScorm_checkIfAPIAvailable()){
		BVScorm_getAPI();
	}
	if (BVScorm_checkIfAPIAvailable()) {
		//*-*--------------------------------------------
		if(scormVersion=="scorm_2004"){
				var res = BVScorm_API.GetValue("cmi.location");
			}
			if(scormVersion=="scorm_1.2"){
				var res = BVScorm_API.LMSGetValue("cmi.core.lesson_location");
			}
		return res;

		/*try{
			var res = BVScorm_API.LMSGetValue("cmi.core.lesson_location");
			if (!BVScorm_checkLastError("Get - cmi.core.lesson_location : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		return res;*/
		//*-*--------------------------------------------
	}
}
////********************************************************************************************************
function startTimer() {
	startDate = new Date().getTime();
}
////********************************************************************************************************
function computeTime() {
	if (startDate != 0) {
		var currentDate = new Date().getTime();
		var elapsedSeconds = Math.round((currentDate-startDate)/1000);
		var formattedTime = convertTotalSeconds(elapsedSeconds);
		try{
			var res = BVScorm_API.LMSSetValue("cmi.core.session_time", formattedTime);
			if (!BVScorm_checkLastError("Set - cmi.core.session_time : ")){
				return;
			}
		}
		catch (e){
			BVScorm_throwError(strAPINotFoundMessage);
			top.close();
			return;
		}
		res = BVScorm_API.LMSCommit("");
		if (!BVScorm_checkLastError("LMSCommit : ")){
			return;
		}
	} else {
		formattedTime = "00:00:00";
	}
	return (formattedTime);
}
////********************************************************************************************************
function convertTotalSeconds(ts) {
	var strTime = "";
	var Hour = Math.floor(ts/3600);
	var Min = Math.floor((ts-Hour*3600)/60);
	var Sec = ts-Hour*3600-Min*60;
	if (Hour<10) {
		strTime += "0";
	}
	strTime += Hour+":";
	if (Min<10) {
		strTime += "0";
	}
	strTime += Min+":";
	if (Sec<10) {
		strTime += "0";
	}
	strTime += Sec;
	return strTime;
}
/*************************************************************/
//*-*------------------------------------------------------------------
function centisecsToISODuration(n, bPrecise)
{
  var str = "P";
  var nCs=n;
  var nY=0, nM=0, nD=0, nH=0, nMin=0, nS=0;
  n = Math.max(n,0); // there is no such thing as a negative duration
  var nCs = n;
  // Next set of operations uses whole seconds
  with (Math)
  {
    nCs = round(nCs);
    if (bPrecise == true)
    {
      nD = floor(nCs / 8640000);
    }
    else
    {
      nY = floor(nCs / 3155760000);
      nCs -= nY * 3155760000;
      nM = floor(nCs / 262980000);
      nCs -= nM * 262980000;
      nD = floor(nCs / 8640000);
    }
    nCs -= nD * 8640000;
    nH = floor(nCs / 360000);
    nCs -= nH * 360000;
    var nMin = floor(nCs /6000);
    nCs -= nMin * 6000
  }
  // Now we can construct string
  if (nY > 0) str += nY + "Y";
  if (nM > 0) str += nM + "M";
  if (nD > 0) str += nD + "D";
  if ((nH > 0) || (nMin > 0) || (nCs > 0))
  {
    str += "T";
    if (nH > 0) str += nH + "H";
    if (nMin > 0) str += nMin + "M";
    if (nCs > 0) str += (nCs / 100) + "S";
  }

  if (str == "P") str = "PT0H0M0S";
  // technically PT0S should do but SCORM test suite assumes longer form.
  return str;
}
//*-*------------------------------------------------------------------
////********************************************************************************************************
function fClose(){
	//alert("SHREE="+windowClosed);
	BVScorm_adlOnunload();
	//fCloseParentWindow();
	if(!windowClosed){
		top.close();
	}
	windowClosed = true;
}

function BVScorm_GetUserName(){
	var retVal;
	if (BVScorm_checkIfAPIAvailable()) {
		try{
			//*-*------------------------------------------
			//alert("SHREE API="+BVScorm_API);
			if(scormVersion=="scorm_2004"){
				//var res = BVScorm_API.student_name("")
			}
			if(scormVersion=="scorm_1.2"){
				retVal = BVScorm_API.LMSGetValue("cmi.core.student_name");
			}
		} catch(e){
		}
	}
	return retVal;
}

function BVScorm_GetUserNumber(){
	var retVal;
	if (BVScorm_checkIfAPIAvailable()) {
		try{
			//*-*------------------------------------------
			//alert("SHREE API="+BVScorm_API);
			if(scormVersion=="scorm_2004"){
				//var res = BVScorm_API.student_name("")
			}
			if(scormVersion=="scorm_1.2"){
				retVal = BVScorm_API.LMSGetValue("cmi.core.student_id");
			}
		} catch(e){
		}
	}
	return retVal;
}

////********************************************************************************************************
