var oPageXML;
var optionCnt = 0;
var xPadd = "6px";
var yPadd = "10px";
var optionArr = new Array();
var corrArr = new Array();
var currOptionArr = new Array();
var currSelectedOpt;
var isSubmitEnable = false;
var maxAttempts = 1;
var LMSTracking = false;
var isShowAnsEnable = false;
var currAttempts = 1;
var imgPath = "";
var animateContent = false;
var showAnswer = false;
var isMCQ = true;

function fnInitMCQ(){
	//debugger;
	var corrOptionCnt = 0;
	var totalCorrOptionCnt =0;
	fnDisableSubmit();
	fnDisableRetry();
	$("#title").html(oPageXML.find("Title").text());
	
	maxAttempts = parseInt(oPageXML.find("GlobalValues").attr("Attempts"));
	LMSTracking = oPageXML.find("GlobalValues").attr("LMSTrack").toLowerCase()=="true"?true:false;
	isShowAnsEnable = oPageXML.find("GlobalValues").attr("showAns").toLowerCase()=="true"?true:false; 
	//imgPath = oPageXML.find("Image").attr("ImagePath");
	oPageXML.find("Choice").each(function() {
		if($(this).attr("Value").toLowerCase()=="true"){
			totalCorrOptionCnt++;
		}
	});
	if(totalCorrOptionCnt>1)isMCQ=false;
	var optionTable = '<table id="optionsTbl">';
	oPageXML.find("Choice").each(function() {
		var optionObj = new Object();
		optionObj.txt = $(this).text();
		optionObj.value = $(this).attr("Value").toLowerCase();
		optionArr[optionCnt] = optionObj;

		var currOptionObj = new Object();
		currOptionObj.value = "false";
		currOptionObj.selected = "false";
		currOptionArr[optionCnt] = currOptionObj;


		corrArr[optionCnt] = false;
		optionTable += '<tr><td class="tickWrongImgTd">';
		optionTable += '<img class="tickWrongImg" src="pages/images/Global/right.png" id="tick'+optionCnt+'" alt="false" />';
		optionTable += '<img class="tickWrongImg" src="pages/images/Global/wrong.png" id="wrong'+optionCnt+'" alt="true" />';
		optionTable += '<img class="tickWrongImg" src="" id="tick'+optionCnt+'" alt="false" />';
		optionTable += '<img class="tickWrongImg" src="" id="wrong'+optionCnt+'" alt="true" />';
		optionTable += '</td>';
		optionTable += '<td id="optionsTblLft">';
		if($(this).attr("Value").toLowerCase() == "true"){
			corrArr[corrOptionCnt] = optionCnt;
			corrOptionCnt++;
		}
		if(isMCQ){
			optionTable += '<input onClick="fnOptionSelected(this)" id="'+optionCnt+'" type="radio" name="mcqAnsOpt" value="0" class="styled"></input>';
		}else{
			optionTable += '<input onClick="fnOptionSelected(this)" id="'+optionCnt+'" type="checkbox" name="mcqAnsOpt" value="0" class="styled"></input>';
		}
		optionTable += '</td><td width="' + xPadd + '"></td><td id="optionsTblRgt">' + optionArr[optionCnt].txt + '</td></tr>';
		optionTable += '<tr height="' + yPadd + '"><td></td></tr>';
		optionCnt = optionCnt + 1;
	});
	optionTable += '</table>';
	$("#question").html(oPageXML.find("QuestionText").text());
	$("#rdOptions").html(optionTable);
	if( imgPath != "" && imgPath != undefined ){
		alert("imgpath  "+imgPath);
		$("#imgOption1").html('<img src="'+imgPath+'"/>');
	} else {
		$("#rdOptions").css("width", "99%");
	}
	fnAnimateContent( animateContent);
}
function fnShowCorrectAnswer(){
	fnDisableSolution()
	for( var i = 0; i < corrArr.length; i++ ){
		$("#tick"+corrArr[i]).css("visibility","visible");
	}
	fnSetPageComp();
}
function fnDisableOptions(){
	if(isMCQ){
		$("input[type=radio]").attr("disabled",true);
	}else{
		$("input[type=checkbox]").attr("disabled",true);
	}
}
function fnEnableOptions(){
	fnResetOptions();
	if(isMCQ){
		$("input[type=radio]").attr("checked",false);
		$("input[type=radio]").attr("disabled",false);
	}else{
		$("input[type=checkbox]").attr("checked",false);
		$("input[type=checkbox]").attr("disabled",false);
	}
	fnHide($("#feedHldr"));
	fnDisableRetry();
}

function fnResetOptions(){
	for(var i=0;i<currOptionArr.length;i++){
		currOptionArr[i].value ="false";
		currOptionArr[i].selected = "false";
	}
}
function fnDisableSubmit(){
	isSubmitEnable = false;
	$("#sbmtBtn").css("cursor","default");
	$("#sbmtBtn").css("background-image","url('../pages/images/Global/Submit_dis.png')");
	$("#sbmtBtn").unbind("click");
}
function fnEnableSubmit(){
	isSubmitEnable = true;
	$("#sbmtBtn").css("cursor","pointer");
	$("#sbmtBtn").css("background-image","url('../pages/images/Global/Submit_up.png')");
	$("#sbmtBtn").click(function(e) {
		fnUpdatePageCompletionCounter(0);
		if(LMSTracking){
			fnSendDataLMS();
		}else{
			fnCheckAnswer();
		}
		
	});
}
function fnDisableRetry(){
	$("#rtySolutionBtn").css("visibility","hidden");
	$("#rtySolutionBtn").css("cursor","default");
	$("#rtySolutionBtn").css("background","url('pages/images/Global/retryEnable.jpg') no-repeat");
	$("#rtySolutionBtn").unbind("click");
}
function fnEnableRetry(){
	$("#rtySolutionBtn").css("visibility","visible");
	$("#rtySolutionBtn").css("cursor","pointer");
	$("#rtySolutionBtn").css("background","url('pages/images/Global/retryEnable.jpg') no-repeat");
	$("#rtySolutionBtn").click(function(e) {
		fnEnableOptions();
	});
}
function fnEnableSolution(){
	$("#rtySolutionBtn").css("visibility","visible");
	$("#rtySolutionBtn").css("cursor","pointer");
	$("#rtySolutionBtn").css("background","url('pages/images/Global/solutionEnable.jpg') no-repeat");
	$("#rtySolutionBtn").click(function(e) {
		fnShowCorrectAnswer();
	});
}
function fnDisableSolution(){
	$("#rtySolutionBtn").css("cursor","default");
	$("#rtySolutionBtn").css("background","url('pages/images/Global/solutionEnable.jpg') no-repeat");
	$("#rtySolutionBtn").unbind("click");
}
function fnOptionSelected(optRef){
	
	if(isMCQ){
		for(var i=0;i<currOptionArr.length;i++){
			if(i==optRef.id){
				currOptionArr[i].value = "true";
				currOptionArr[i].selected = "true"
			}else{
				currOptionArr[i].value = "false";
				currOptionArr[i].selected = "false"
			}
		}
	}else{
		if(optRef.checked){
			currOptionArr[optRef.id].value = "true";
			currOptionArr[optRef.id].selected = "true"
		}else{
			currOptionArr[optRef.id].value = "false";
			currOptionArr[optRef.id].selected = "false"
		}
	}
	var isAnyOptionSelected = false;
	for(var i=0;i<currOptionArr.length;i++){
		if(currOptionArr[i].selected =="true" ){
			isAnyOptionSelected = true;
		}
	}
	if( isAnyOptionSelected ){
		if( !isSubmitEnable ) fnEnableSubmit();
	} else{
		fnDisableSubmit();
	}
}
function fnCheckAnswer(){
	var isAnsCorr = true;
	for(var i=0;i<currOptionArr.length;i++){
		if(currOptionArr[i].value != optionArr[i].value){
			isAnsCorr = false;
		}
	}
	var feedStr = "";
	if( isAnsCorr ){
		for(var i=0;i<currOptionArr.length;i++){
			if(currOptionArr[i].selected =="true" ){
				$("#tick"+i).css("visibility","visible");
			}
		}
		
		feedStr = oPageXML.find("Correct").text();
		$("#feedTitleTxtHldr").html("That's correct.");
		fnSetPageComp();
	} else {
		if( currAttempts >= maxAttempts ){
			
			for(var i=0;i<currOptionArr.length;i++){
				if(optionArr[i].value=="true"){
					var lCorValue = i;
				}
				if(currOptionArr[i].selected =="true" ){
					if(optionArr[i].value=="true"){
						$("#tick"+i).css("visibility","visible");
					}else{
						$("#wrong"+i).css("visibility","visible");
						$("#tick"+lCorValue).css("visibility","visible");
					}
				}
			}
			feedStr = oPageXML.find("Solution").text();
			$("#feedTitleTxtHldr").html("That's not correct.");
			showAnswer = true;
			if(isShowAnsEnable){
				fnEnableSolution();
			}
		} else {
			if( currAttempts == 1 ) feedStr = oPageXML.find("FirstIncorrect").text();
			if( currAttempts == 2 ) feedStr = oPageXML.find("SecondIncorrect").text();
			currAttempts++;
			
			
			fnEnableRetry();
			$("#feedTitleTxtHldr").html("Retry");
		}
	}
	fnDisableSubmit();
	fnDisableOptions();
	$("#feedTxtHldr").html(feedStr);
	//Set feedback alignment from xml
	if(oPageXML.find("Feedbacks").attr("height")!= "" && oPageXML.find("Feedbacks").attr("height")!= undefined){
		$("#feedHldr").css("height", oPageXML.find("Feedbacks").attr("height"));
	}
	if(oPageXML.find("Feedbacks").attr("width")!= "" && oPageXML.find("Feedbacks").attr("width")!= undefined){
		$("#feedHldr").css("width", oPageXML.find("Feedbacks").attr("width"));
	}
	if(oPageXML.find("Feedbacks").attr("margin-top")!= "" && oPageXML.find("Feedbacks").attr("margin-top")!= undefined){
		$("#feedHldr").css("margin-top", oPageXML.find("Feedbacks").attr("margin-top"));
	}	
	if(oPageXML.find("Feedbacks").attr("textheight")!= "" && oPageXML.find("Feedbacks").attr("textheight")!= undefined){
		$("#feedTxtHldr").css("height", oPageXML.find("Feedbacks").attr("textheight"));
	}
	
	
	fnShow($("#feedHldr"));
}
function fnAnimateContent(){
	if( animateContent ){
		fnShow($("#question"));
		fnShow($("#options"));
		fnShow($("#buttons"));
	} else {
		$("#question").css("display", "block");
		$("#options").css("display", "block");
		$("#buttons").css("display", "block");
	}
}
function fnShow( elemObj, effStr ){

	if( effStr == undefined ) effStr = "fade";
	effVal = effStr.toUpperCase();
	switch(effVal){
		case "FADE":
			elemObj.fadeIn(0);
			break;
		case "SLIDE":
			elemObj.slideDown(0);
			break;
	}

}
function fnHide( elemObj, effStr ){
	if( effStr == undefined ) effStr = "fade";
	effVal = effStr.toUpperCase();
	switch(effVal){
		case "FADE":
			elemObj.fadeOut(400);
			break;
		case "SLIDE":
			elemObj.slideUp(400);
			break;
	}
}
function fnSendDataLMS(){
	var isAnsCorr = true;
	for(var i=0;i<currOptionArr.length;i++){
		if(currOptionArr[i].value != optionArr[i].value){
			isAnsCorr = false;
		}
	}
	if( isAnsCorr ) {
		fnUpdateAssessmentScore(1);
	} else {
		fnUpdateAssessmentScore(0);
	}
}

var audioPath = "";
var currCue = 0;
var updateContentArray = [{ }];

