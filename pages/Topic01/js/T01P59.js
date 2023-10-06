manifest = [

    { src: 'pages/images/Topic01/T01P59/img2.png', id: '1' },

    { src: 'pages/images/Topic01/T01P59/image_02_small.png', id: '2' },

];



console.log("Labor" + gCompPageArr);

var audioPath = "pages/audio/Topic01/T01P59/T01P59";

var gItemAudioPath = ["pages/audio/Topic01/T01P59/T01P59_1",

    "pages/audio/Topic01/T01P59/T01P59_2",

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

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Let’s check on Baby Conrad. Do his vital signs look normal or abnormal? Select the correct option and click Submit." },

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".topImgCnt", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },

    {
        time: "0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".rightCnt", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    }

];

var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. Baby Conrad’s vital signs are abnormal. Click Next to continue." }

];

var updateContentArray1 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That’s correct. Baby Conrad’s vital signs are abnormal. Click Next to continue." }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

}

var __dataXml;

var audplayer = document.getElementById('audioplayer');

$(document).ready(function() {

    disableNextBtn();
    bindClickableHotspot();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    var n = isInArray("M1L0T1P59", gCompPageArr);

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

    console.log("end");

    var _getCount1 = clickTabCount + clickTabCount1;
    if (_getCount1 >= 2) {
        console.log("start new");
        enableNextBtn();
        $('.boxInst').show()
        fnAudioFinishItemComp();
    }

}



function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

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

var correctOptions = [1];



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

    tinCanWrapper.sendStatementData("answered", "Let's-check-on-Baby-Conrad.He-is-with-his-mother-in-the-labor-recovery-room.Jennifer-tells...", "Let's check on Baby Conrad. He is with his mother in the labor recovery room. Jennifer tells you that he has been sleepy and not been interested in breastfeeding. When you unwrap him so that you can check his blood sugar, you notice that he is hypotonic. His color is pink. You take a full set of vital signs.");

    $('.cSubmitBtn.active').hide();

    $(".leftCnt span.addcolor").addClass("yellowclr");

    //	var selected = $('.clicked').length;



    var incorrectCount = 0; //, correctCount = 0;

    $('.option').each(function() {



        if ($(this).hasClass('clicked') && ($.inArray($(this).index(), correctOptions) == -1)) {

            $(this).addClass('wrong');

            incorrectCount++;

        }

        //else if($(this).hasClass('clicked') && ($.inArray($(this).index(), correctOptions) != -1)){

        //	correctCount++;

        //}



        $(this).off(); //.removeClass('clicked');

    });



    $(correctOptions).each(function(i, val) {

        $('.option').eq(val).addClass('correct');

    });

    // if (incorrectCount == 0 && correctCount== correctOptions.length) {

    //     fnPlaySectionAudio(1);

    // //    $('.downloadText').show();

    // } else {

    //     fnPlaySectionAudio(0);

    // }



    if (incorrectCount == 0) {

        fnPlaySectionAudio(1);

        // $('.downloadText').show();

    } else {

        fnPlaySectionAudio(0);

    }

    $('.option').off().removeClass('aactive'); //.css({'cursor':'default'});

    $('.cSubmitBtn').removeClass('active');

    $('.informationRight').show();

    enableNextBtn();
    fnDesiableNext(false);
    gCompPageArr.push("M1L0T1P59");

}



$(".small_expand").off().on("click", function() {

    fnPauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");

    $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

    $('.modalTextBottom').hide();

    $('#ModalTextBottom' + $(this).attr('click_id')).show();

    $('.modalContent').addClass('maxBot0');

    $('.modalContent').removeClass('maxBot');





});

$(".small_expand1").off().on("click", function() {

    fnPauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");
    $('.boxInst').addClass("blur");

    $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

    $('.modalTextBottom').hide();

    $('#ModalTextBottom' + $(this).attr('click_id')).show();



    $('.modalContent').addClass('maxBot');

    $('.modalContent').removeClass('maxBot0');



});

$(".closepopup").off().on("click", function() {

    fnPlayAudio();

    //audioReset();

    $("#TabPopup5 .modal").removeAttr("style");

    $("#TabPopup5 .sectionTop").removeClass("blur");

    $("#TabPopup5 .sectionContent").removeClass("blur");
    $('.boxInst').removeClass("blur");

});


function pauseAudio() {

    if (!fnPauseAudio()) {

        console.log(true);

        fnPauseAudio()

    } else {

        playPauseAudio();

        console.log(false);

    }

}

function playAudio() {

    if (!fnPauseAudio()) {

        console.log(true);

        playPauseAudio();

    }

}