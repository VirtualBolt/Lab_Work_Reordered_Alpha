manifest = [{
        src: 'pages/images/Topic01/T01P02/img2.png',
        id: '1'
    },

    {
        src: 'pages/images/Topic01/T01P02/image_02_small.png',
        id: '2'
    },

    {
        src: 'pages/images/Topic01/T01P02/small_graph.png',
        id: '3'
    },

];



var audioPath = "pages/audio/Topic01/T01P02/T01P12";

var gItemAudioPath = ["pages/audio/Topic01/T01P02/T01P12_correct", "pages/audio/Topic01/T01P02/T01P12_wrong"];

clickViewMoreInfo();

var currCue = 0;

var idd = 0;





var __curState = 0;

var clickTabCount = 0;

var clickTabCount1 = 0;



var updateContentArray = [

    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Now take a look at Baby Conrad's vital signs shortly after birth. Are they normal or abnormal? Select the correct option and click Submit." },


    {
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".topImgCnt", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },

    {
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "",
        animation: [{ target: ".rightCnt", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    }

];

var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That is correct. Baby Conrad’s vital signs are normal. Click Next to continue." }

];

var updateContentArray1 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. Baby Conrad’s vital signs are normal. Compare his vital signs with the normal vital signs for a neonate on the right and you will notice that Baby Conrad’s vital signs fall within these ranges. Click Next to continue." }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

}

var __dataXml;

var audplayer = document.getElementById('audioplayer');

$(document).ready(function() {

    bindClickableHotspot();
    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    var n = isInArray("M1L0T1P12", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        // fnGlowNextBtn();

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

    // if (_getCount1 >= 2) {

    console.log("start new");

    enableNextBtn();

    $('.boxInst').show()

    fnAudioFinishItemComp();

    // }



}



function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        console.log("start audio");

        //   enableNextBtn();

        //  fnAudioFinishItemComp();

        // we need to replace this

        //fnClick();


        audplayer.pause();

        audplayer.currentTime = 0;

        $(".clickToEnlarge").show();
        $(".small_expand").show();
        $(".small_expand1").show();

    } else {

        fnCompletion();

        enableNextBtn();

        $('.boxInst').show();
        $(".clickToEnlarge").show();
        $(".small_expand").show();
        $(".small_expand1").show();

        gCompPageArr.push("M1L0T1P12");

        fnAudioFinishItemComp();

        audplayer.pause();

        audplayer.currentTime = 0;



    }

}

var correctOptions = [0];



function bindClickableHotspot() {

    console.log("clicked");


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
    tinCanWrapper.sendStatementData("answered", "baby-conrad-postnatal-course", "Baby Conrad - Postnatal Course - Now take a look at Baby Conrad's vital signs shortly after birth. Are they normal or abnormal?");

    $('.cSubmitBtn.active').hide();

    console.log("clicked");

    // fnCompletion()

    enableNextBtn();
    fnDesiableNext(false);
    gCompPageArr.push("M1L0T1P12");
    // $(".leftCnt span.addcolor").addClass("yellowclr");

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

        fnPlaySectionAudio(0);

        // $('.downloadText').show();

    } else {

        fnPlaySectionAudio(1);

    }

    $('.option').off().removeClass('aactive'); //.css({'cursor':'default'});

    $('.cSubmitBtn').removeClass('active');

    $('.informationRight').show();

}



$(".small_expand").off().on("click", function() {

    pauseAudio();

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

    pauseAudio();

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

    playAudio();

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