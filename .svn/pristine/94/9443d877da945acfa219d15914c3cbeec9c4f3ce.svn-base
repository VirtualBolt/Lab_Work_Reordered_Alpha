manifest = [{ src: 'pages/images/Topic01/T01P51/small_expand.png', id: '1' }

];

var audioPath = "pages/audio/Topic01/T01P51/T01P51";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "To provide a safe and reasonable target for treatment, The S.T.A.B.L.E. Program recommends the following: For sick infants who are not well enough to be enterally fed, a glucose value of less than 50 milligrams per deciliter requires corrective therapy and ongoing monitoring until the glucose is stabilized between 50 and 110 milligrams per deciliter." },
    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".clsPatch", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },
    {
        time: "6",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".ClsImage0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },
    {
        time: "7",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },
    {
        time: "20",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".showlist1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
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





    var n = isInArray("M1L0T1P51", gCompPageArr);

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

    $(".sectionTop").addClass("blur");

    $(".sectionContent").addClass("blur");

});



$(".closepopup").on("click", function() {
    fnPlayAudio();

    // audioReset();

    var __aIndex = $(this).attr("id").slice(8);

    $(".modal").removeAttr("style");

    $(".sectionTop").removeClass("blur");

    $(".sectionContent").removeClass("blur");

});

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        fnAudioFinishItemComp();

        $('.boxInst').show();
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        $('.small_expand').css('display', 'block').css('opacity', '1');

        gCompPageArr.push("M1L0T1P51");

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