manifest = [{ src: 'pages/images/Topic01/T01P52/T01P52_01.png', id: '1' },

    { src: 'pages/images/Topic01/T01P52/T01P52_01_01.png', id: '2' },

    { src: 'pages/images/Topic01/T01P52/T01P52_02_01.png', id: '3' },

    { src: 'pages/images/Topic01/T01P52/T01P52_02.png', id: '4' },

    { src: 'pages/images/Topic01/T01P52/T01P52_03.svg', id: '5' },

    { src: 'pages/images/Topic01/T01P52/T01P52_03_01.svg', id: '6' }

];

var audioPath = "pages/audio/Topic01/T01P52/T01P52";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "The gold standard for measuring the level of glucose in the bloodstream is the plasma glucose value. However, this measurement requires a sample of whole blood to be obtained and processed by the laboratory. The accuracy of plasma glucose levels depends on timely laboratory processing to prevent red blood cells from further metabolizing glucose, which could result in falsely low glucose values. Glucose levels may decline as much as 15 to 20 milligrams per deciliter per hour when the blood sample stands at room temperature." },

    { time: "8", carry: "", event: "", show: "", hide: "", transcript: "The gold standard for measuring the level of glucose in the bloodstream is the plasma glucose value. However, this measurement requires a sample of whole blood to be obtained and processed by the laboratory. The accuracy of plasma glucose levels depends on timely laboratory processing to prevent red blood cells from further metabolizing glucose, which could result in falsely low glucose values. Glucose levels may decline as much as 15 to 20 milligrams per deciliter per hour when the blood sample stands at room temperature." },

    {
        time: "8",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".ClsImage0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },

    {
        time: "13",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".ClsImage1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },

    {
        time: "25",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".ClsImage2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;

var aud = document.getElementById("audioplayer");

$(document).ready(function() {

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }





    var n = isInArray("M1L0T1P52", gCompPageArr);

    console.log(n);

    if (n == true) {

        enableNextBtn();

        //fnGlowNextBtn();

        fnDesiableNext(false);

    }

});



function isInArray(value, array) {

    return array.indexOf(value) > -1;

}



function audioReset() {

    gAudioId = "";

    onTimelineEnd();

}



/* function fnPlaySectionAudio(gCurrentIndex){

	indexAudio = (gCurrentIndex);

	audioId = "audio_"+gCurrentIndex;

	fnHideShowAudioPlayer( false );

	updateContentArray = eval("popupSectionArray"+(gCurrentIndex));

	initAudioPlayer(gItemAudioPath[gCurrentIndex])

} */



function fnCompletion() {

    // console.log("end");

    //if($(".clsVisited").length==gTotalPopups){

    //enableNextBtn();

    //fnAudioFinishItemComp();

    //}

}


$(".small_expand").on("click", function() {



    fnPauseAudio();

    $(".modalTxtImg").hide();



    var i = $(this).attr("id").slice(8);

    $("#case_study_popup" + i).show();

    $("#imgPopup" + i).show();

    $(".mainContainer").addClass("blur");
    $('.boxInst').addClass("blur");



});



$(".closepopup").on("click", function() {
    fnPlayAudio();

    // audioReset();

    var __aIndex = $(this).attr("id").slice(8);

    $(".modal").removeAttr("style");

    $(".mainContainer").removeClass("blur");
    $('.boxInst').removeClass("blur");



});

$(".closepopup1").on("click", function() {

    fnPlayAudio();

    // audioReset();

    var __aIndex = $(this).attr("id").slice(8);



    console.log(__aIndex);

    $(".modal").removeAttr("style");

    $(".sectionTop").removeClass("blur");

    $(".sectionContent").removeClass("blur");
    $('.boxInst').removeClass("blur");

});


function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        fnAudioFinishItemComp();

        $('.boxInst').show();
        $('.small_expand').css('display', 'block').css('opacity', '1');

        gCompPageArr.push("M1L0T1P52");

        aud.pause();

        aud.currentTime = 0;

    } else {

        $("#idTick0" + selectedIndex).css({ "opacity": "1" });

        $("#clsTabTxt" + selectedIndex).css({ 'color': '#80848b' });

        $(".ClsTab").removeClass("clsDisable");

        $("#TabImage" + selectedIndex).addClass("clsDisable");

        fnCompletion();
        $('.small_expand').css('display', 'block').css('opacity', '1');

        if ($(".clsVisited").length === 2) {



        }

    }

}