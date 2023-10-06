manifest = [{
    src: 'pages/images/Topic01/T01P48/Group_108.png',
    id: '1'
}

];

var audioPath = "pages/audio/Topic01/T01P48/T01P48";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Some infants may have a low blood sugar and not exhibit any apparent signs. However, the neurologic consequence of asymptomatic hypoglycemia is uncertain and there is newer, concerning evidence regarding the impact of asymptomatic hypoglycemia on cognitive outcomes. Therefore, if the infant is sick or the infant has risk factors for hypoglycemia, which include being late preterm, SGA, LGA, or IDM, it's important to monitor the blood sugar at appropriate intervals and continue to offer enteral and/or intravenous treatment until a pattern of stability is achieved."
    },
    {
        time: "19",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".bullet_Text",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;



$(document).ready(function () {

    var audplayer = document.getElementById("audioplayer");

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }





    var n = isInArray("M1L0T1P48", gCompPageArr);

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



$(".clsIconImg").on("click", function () {

    pauseAudio();



    //debugger;

    $(".clsPatch").addClass("blur");

    $(".bullet_Text").addClass("blur");



    $(".modalContent .modalTxtImg").attr("id", "imgPopup0");

    //        $(".caseStudyContent").attr("id","imgdd"+_getCurId);

    $(".modal").show();

});



$(".closepopup").on("click", function () {

    playAudio();

    $(".modal").hide()

    $(".clsPatch").removeClass("blur");

    $(".bullet_Text").removeClass("blur");



    $(".modal .modalTxtImg").removeAttr("id");

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
        $('.icon00').css('display', 'block').css('opacity', '1');
        $('#icon01').css('display', 'block').css('opacity', '1');

        gCompPageArr.push("M1L0T1P48");

        audplayer.pause();

        audplayer.currentTime = 0;





    } else {



    }

}