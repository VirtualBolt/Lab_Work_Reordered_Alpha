var oTempPageXML;
var oSuccessFuncRef;
var oErrorFuncRef;

/** 
 *  Loads given xml and calls the reference function send as parameter
 *	@xmlRef - xml path and xml name
 *  @succFuncRef - refrence function that will be called after xml is loaded successfully
 *  @errFuncRef - refrence function that will be called after xml is loaded successfully
**/
function fnLoadXMLFile(xmlRef, succFuncRef, errFuncRef) {
	if (fnCheckEmptyString(xmlRef)) {
		fnReintializeReferences();
		oSuccessFuncRef = succFuncRef;
		oErrorFuncRef = errFuncRef;
		$.ajax({
			type: "GET",
			url: xmlRef,
			async: false,
			dataType: ($.browser.msie) ? "text" : "xml",
			success: function (data) {
				fnXmlParser(data);
			},
			error: function (xhr, textStatus, thrownError) {
				fnErrorHandler(textStatus, thrownError);
			}
		});
	} else {
		//
	}
}

/** 
 *  Checks that the provided parameter is not empty
 *	@str - an string object
 *  returns - boolean value 
**/
function fnCheckEmptyString(str) {
	var retVal = false;
	if (str != "" && str != " ") {
		retVal = true;
	}
	return retVal;
}

/** 
 *  Parses the provided data if string
 *	@str - an string object
 *  returns - jumps to the sucess function referenced  
**/
function fnXmlParser(data) {
	var xml;
	if (typeof data == "string") {
		xml = new ActiveXObject("Microsoft.XMLDOM");
		xml.async = false;
		xml.loadXML(data);
	} else {
		xml = data;
	}
	oTempPageXML = $(xml);
	oSuccessFuncRef(oTempPageXML);
}

/** 
 *  Error handler if error recieved while loading xml 
**/
function fnErrorHandler(textStatus, thrownError) {
	if (!oErrorFuncRef) {
		alert("An error occured while loading the requested xml file.");
		return;
	}
	oErrorFuncRef();
}

/** 
 *  Reintialize page object, success and error function references 
**/
function fnReintializeReferences() {
	oTempPageXML = oSuccessFuncRef = oErrorFuncRef = undefined;
}

