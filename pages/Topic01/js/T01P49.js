manifest = [{

        src: 'pages/images/Topic01/T01P49/small_expand.png',

        id: '1'

    },

    {

        src: 'pages/images/Topic01/T01P49/small_expand_hover.png',

        id: '2'

    },

    {

        src: 'pages/images/Topic01/T01P49/T01P49_01.png',

        id: '3'

    },

    {

        src: 'pages/images/Topic01/T01P49/T01P49_01_01.png',

        id: '4'

    },

    {

        src: 'pages/images/Topic01/T01P49/T01P49_02.png',

        id: '5'

    },

    {

        src: 'pages/images/Topic01/T01P49/T01P49_02_01.png',

        id: '6'

    },

    {

        src: 'pages/images/Topic01/T01P49/T01P49_03.png',

        id: '7'

    },

    {

        src: 'pages/images/Topic01/T01P49/T01P49_03_01.png',

        id: '8'

    },

    {

        src: 'pages/images/Topic01/T01P22/close_expand_hover.png',

        id: '9'

    },

    {

        src: 'pages/images/Topic01/T01P49/close_expand_hover.png',

        id: '10'

    }

];

var audioPath = "pages/audio/Topic01/T01P49/T01P49";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [{

        time: "0",

        carry: "",

        event: "",

        show: "",

        hide: "",

        transcript: "Now that we've discussed why it's important to withhold enteral feedings when the infant is sick, factors impacting glucose levels in the postnatal period, and signs and symptoms of hypoglycemia, let's take a look at how and when to monitor the blood sugar, and the initial IV fluid management of infants who are too sick to be enterally fed. The major source of metabolic fuel for the newborn is glucose. The term “blood sugar” is commonly used to describe the glucose that's transported in the blood to organs and tissues. Blood sugar values tolerated by different infants vary because of their individual diagnoses and medical problems. If an infant has a low blood or plasma glucose value, this does not imply that permanent neurologic damage will occur; however, it does mean that action should be taken to restore the blood sugar to a euglycemic, or normal blood glucose concentration."

    },

    {

        time: "21.5",

        carry: "",

        event: "",

        show: "",

        hide: "",

        transcript: "",

        animation: [{

            target: ".ClsImage0Rajnik",

            duration: "0.5",

            activity: {

                'opacity': '1',

                'display': 'block'

            }

        }]

    },

    {

        time: "26",

        carry: "",

        event: "",

        show: "",

        hide: "",

        transcript: "",

        animation: [{

            target: ".ClsImage1Rajnik",

            duration: "0.5",

            activity: {

                'opacity': '1',

                'display': 'block'

            }

        }]

    },

    {

        time: "34",

        carry: "",

        event: "",

        show: "",

        hide: "",

        transcript: "",

        animation: [{

            target: ".overlay",

            duration: "0.5",

            activity: {

                'display': 'block'

            }

        }]

    }, {
        time: "40.3",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".feedback",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    }, {
        time: "40.3",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".feedhead",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    }, {
        time: "40.3",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist1",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    }, {
        time: "44",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist2",
            duration: "0.5",
            activity: {
                'opacity': '1',
                'display': 'block'
            }
        }]
    }, {
        time: "48",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{
            target: ".showlist3",
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



$(document).ready(function() {

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }





    var n = isInArray("M1L0T1P49", gCompPageArr);

    console.log(n);

    if (n == true) {

        enableNextBtn();

        // fnGlowNextBtn();

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

var popupOpen = 0;

$(".small_expand").on("click", function() {

    pauseAudio();



    $(".modalTxtImg").hide();



    var i = $(this).attr("id").slice(8);

    $("#case_study_popup" + i).show();

    $("#imgPopup" + i).show();

    //debugger;

    $(".ClsImage0Rajnik").addClass("blur");

    $(".ClsImage1Rajnik").addClass("blur");

    $(".ClsImage2Rajnik").addClass("blur");

    $("#idPatchMainRajnik").addClass("blur");
    $('.boxInst').addClass("blur");

    $('.feedback').addClass("blur");

    popupOpen = 1;



});

$(".closepopup").on("click", function() {

    // audioReset();

    var __aIndex = $(this).attr("id").slice(8);

    $(".modal").removeAttr("style");



    $(".ClsImage2Rajnik").removeClass("blur");


    $('.boxInst').removeClass("blur");

    $('.feedback').removeClass("blur");

    popupOpen = 0;

    playAudio()





});



$(".closepopup1").on("click", function() {

    // audioReset();

    var __aIndex = $(this).attr("id").slice(8);





    $(".CaseStudy").removeAttr("style");



    $(".ClsImage2Rajnik").removeClass("blur");



    popupOpen = 0;

    playAudio()



});



function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        fnAudioFinishItemComp();

        $('.boxInst').show();
        $('#clickImg2').show();

        gCompPageArr.push("M1L0T1P49");

        audplayer.pause();

        audplayer.currentTime = 0;

        //debugger;

    } else {



    }

}



var audplayer = document.getElementById('audioplayer');

audplayer.addEventListener("timeupdate", function() {



    if (audplayer.currentTime > 33.5) {



        $('.ClsImage0Rajnik').addClass('blur');

        $('.ClsImage1Rajnik').addClass('blur');

        // $('.ClsImage2Rajnik').removeClass('blur');

        $('#idPatchMainRajnik').addClass('blur');

    } else if (audplayer.currentTime > 5 && audplayer.currentTime < 28) {

        if (popupOpen == 0)

        {

            $('.ClsImage0Rajnik').removeClass('blur');

            $('.ClsImage1Rajnik').removeClass('blur');



            $('#idPatchMainRajnik').removeClass('blur');

        }



    }





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