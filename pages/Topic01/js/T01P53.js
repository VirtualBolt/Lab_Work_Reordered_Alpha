manifest = [{ src: 'pages/images/Topic01/T01P53/T01P53.png', id: '1' }

];

var audioPath = "pages/audio/Topic01/T01P53/T01P53";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: 'Typically, glucose screening is performed by bedside "point-of-care" testing. The advantage is rapid return of results, and the amount of blood required is minimal. The devices that utilize whole blood provide good correlation to plasma glucose concentrations, averaging about 10% to 18% lower than plasma values. Newer bedside point-of-care blood glucose testing uses glucose oxidase methodology, with results paralleling plasma blood glucose values. However, a limitation of all point-of-care monitoring devices is poor accuracy when the blood sugar is low.  At times, providers may want to verify the accuracy of a low point-of-care bedside glucose test by sending a sample of blood to the lab for plasma glucose testing. However, do not delay treatment while awaiting confirmatory lab test results.' },
    {
        time: "0.1",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".clsPatch", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }]
    },
    {
        time: "3.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".bullet_Text", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }]
    },
    {
        time: "4.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: "#image1", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }]
    },
    {
        time: "9.4",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".alertIcon", duration: "0.5", activity: { 'display': 'block' } }]
    },

    {
        time: "6.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist1", duration: "0.5", activity: { 'display': 'list-item' } }]
    },

    {
        time: "7.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist2", duration: "0.5", activity: { 'display': 'list-item' } }]
    },

    {
        time: "9.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist3", duration: "0.5", activity: { 'display': 'list-item' } }]
    },

    {
        time: "15.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist4", duration: "0.5", activity: { 'display': 'list-item' } }]
    },

    {
        time: "18.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist5", duration: "0.5", activity: { 'display': 'list-item' } }]
    },

    //{ time: "18.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist6", duration: "0.5", activity: { 'display': 'list-item' } }] },

    //{ time: "24.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist7", duration: "0.5", activity: { 'display': 'list-item' } }] },

    {
        time: "34.6",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".alertIcon_1", duration: "0.5", activity: { 'display': 'block' } }]
    },

    {
        time: "34.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".alertIconBox", duration: "0.5", activity: { 'display': 'block' } }]
    },

    {
        time: "34.6",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist8", duration: "0.5", activity: { 'display': 'block' } }]
    },

    {
        time: "49",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".alertIcon_2", duration: "0.5", activity: { 'display': 'block' } }]
    },

    {
        time: "49",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist7", duration: "0.5", activity: { 'display': 'block' } }]
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





    var n = isInArray("M1L0T1P53", gCompPageArr);

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



$(".clsIconImg").on("click", function() {

    // pauseAudio();



    //debugger;

    $(".sectionTop").addClass("blur");

    $(".sectionContent").addClass("blur");



    $(".caseStudyContent .ModalTxtImg").attr("id", "imgPopup0");

    //        $(".caseStudyContent").attr("id","imgdd"+_getCurId);

    $(".CaseStudy").show();

});



$(".closepopup").on("click", function() {

    // playAudio();

    $(".CaseStudy").hide()

    $("#idPatch3").removeClass("blur");

    $(".CaseStudy .ModalTxtImg").removeAttr("id");

});

function pauseAudio() {

    if (!fnPauseAudio()) {

        fnPauseAudio()

    } else {

        playPauseAudio();

    }

}

function playAudio() {

    if (!fnPauseAudio()) {

        playPauseAudio();

    }

}

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        fnAudioFinishItemComp();

        $('.boxInst').show();

        gCompPageArr.push("M1L0T1P53");

        aud.pause();

        aud.currentTime = 0;

    } else {

        $("#idTick0" + selectedIndex).css({ "opacity": "1" });

        $("#clsTabTxt" + selectedIndex).css({ 'color': '#80848b' });

        $(".ClsTab").removeClass("clsDisable");

        $("#TabImage" + selectedIndex).addClass("clsDisable");

        fnCompletion();

        if ($(".clsVisited").length === 2) {



        }

    }

}