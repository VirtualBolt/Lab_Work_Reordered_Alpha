manifest = [

    { src: 'pages/images/Topic01/T01P65/img2.png', id: '1' },

    { src: 'pages/images/Topic01/T01P65/image_02_small.png', id: '2' },

];



console.log("Labor" + gCompPageArr);



var audioPath = "pages/audio/Topic01/T01P65/T01P65";

var gItemAudioPath = ["pages/audio/Topic01/T01P65/T01P65_1",

    "pages/audio/Topic01/T01P65/T01P65_2",

];

clickViewMoreInfo();


var currCue = 0;

var idd = 0;





var __curState = 0;



//mateo maternal thank you

//var popupContentArray5 = [];

/* var popupContentArray2 = [];

var popupContentArray3 = [];

var popupContentArray4 = [];

var popupContentArray5 = [];

var popupContentArray6 = []; 

var popupContentArray7 = [];*/



var clickTabCount = 0;

var clickTabCount1 = 0;



var updateContentArray = [

    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Let's check on Baby Conrad’s vital signs once more. Are they normal or abnormal? Select the correct option and click Submit." },

    {
        time: "2",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: "#topImgCnt2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },
    {
        time: "2",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".rightCnt", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    }

];

var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. As you can see on the right, Baby Conrad’s vital signs are normal." }

];

var updateContentArray1 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That’s correct. Baby Conrad’s vital signs are normal." }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

}

var __dataXml;

var audplayer = document.getElementById('audioplayer');

$(document).ready(function() {

    disableNextBtn();
    clickViewMoreInfo();
    bindClickableHotspot();
    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    var n = isInArray("M1L0T1P65", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        //fnGlowNextBtn();

        fnDesiableNext(false)

    }

});



function audioReset() {

    gAudioId = "";

    onTimelineEnd();

}



function isInArray(value, array) {

    return array.indexOf(value) > -1;

}







function fnPlaySectionAudio(gCurrentIndex) {

    indexAudio = (gCurrentIndex);

    audioId = "audio_" + gCurrentIndex;

    gAudioId = audioId;

    fnHideShowAudioPlayer(false);

    updateContentArray = eval("updateContentArray" + (gCurrentIndex));

    initAudioPlayer(gItemAudioPath[gCurrentIndex])

}





function fnCompletion() {





    var _getCount1 = clickTabCount + clickTabCount1;

    if (_getCount1 >= 2) {



        enableNextBtn();

        $('.boxInst').show()

        fnAudioFinishItemComp();

    }



}



function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {



        //   enableNextBtn();

        //  fnAudioFinishItemComp();

        // we need to replace this

        //fnClick();

        //bindClickableHotspot();

        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        $('.small_expand1').css('display', 'block').css('opacity', '1');

        audplayer.pause();

        audplayer.currentTime = 0;

    } else {
        $('.boxInst').show();
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        $('.small_expand1').css('display', 'block').css('opacity', '1');
        //fnGlowNextBtn();
        fnAudioFinishItemComp();
        audplayer.pause();
        audplayer.currentTime = 0;
    }

}

var correctOptions = [0];



function bindClickableHotspot() {



    $('.option').addClass('aactive'); //.css({ 'cursor': 'pointer' });

    $('.option').off().on('click', function() {

        $('.option').removeClass('clicked');

        $(this).addClass('clicked');

        if ($('.option.clicked').length >= 1) {

            $('.cSubmitBtn').addClass('active');

            $('.cSubmitBtn.active').off().on('click', function() {

                submitClick();



            });

        } else {

            $('.cSubmitBtn').removeClass('active');

        }

    });



}



function submitClick() {

    tinCanWrapper.sendStatementData("answered", "Baby-Conrad's-vital-signs-are:", "Baby Conrad's vital signs are:");

    $('.cSubmitBtn.active').hide();

    var incorrectCount = 0;

    $('.option').each(function() {

        if ($(this).hasClass('clicked') && ($.inArray($(this).index(), correctOptions) == -1)) {

            $(this).addClass('wrong');

            incorrectCount++;

        }



        $(this).off(); //.removeClass('clicked');

    });

    $(correctOptions).each(function(i, val) {

        $('.option').eq(val).addClass('correct');

    });

    if (incorrectCount == 0) {

        fnPlaySectionAudio(1);

        // $('.downloadText').show();

    } else {

        fnPlaySectionAudio(0);

    }

    $('.option').off().removeClass('aactive'); //.css({ 'cursor': 'default' });

    $('.cSubmitBtn').removeClass('active');

    $('.informationRight').show();

    //fnCompletion();
    enableNextBtn();
    fnDesiableNext(false);
    gCompPageArr.push("M1L0T1P65");

}



$(".small_expand").off().on("click", function() {


    fnPauseAudio();

    //audioReset();

    $(".modal").show();

    $("#TabPopup5").addClass("blur");

    // $("#TabPopup5 .sectionContent").addClass("blur");
    $('.boxInst').addClass("blur");

    $(".modalTxtImg").hide();
    $("#imgPopup1").show();

    $('.modalTextBottom').hide();

    $("#ModalTextBottom1").show();

    $('.caseStudyContent').addClass('maxBot0');

    $('.caseStudyContent').removeClass('maxBot');





});

$(".small_expand1").off().on("click", function() {

    fnPauseAudio();

    //audioReset();

    $(".modal").show();

    $("#TabPopup5").addClass("blur");

    //$("#TabPopup5 .sectionContent").addClass("blur");
    $('.boxInst').addClass("blur");

    $(".modalTxtImg").hide();
    $("#imgPopup2").show();

    $('.modalTextBottom').hide();

    $("#ModalTextBottom2").show();


    $('.modalContent').addClass('maxBot');

    $('.modalContent').removeClass('maxBot0');



});

$(".closepopup").off().on("click", function() {

    fnPlayAudio();

    //audioReset();

    $(".modal").removeAttr("style");

    $("#TabPopup5").removeClass("blur");

    $("#TabPopup5 .sectionContent").removeClass("blur");
    $('.boxInst').removeClass("blur");
    $(".modalTxtImg").hide();


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