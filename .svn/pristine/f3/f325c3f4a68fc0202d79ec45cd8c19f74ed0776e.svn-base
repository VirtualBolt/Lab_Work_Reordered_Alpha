manifest = [

    { src: 'pages/images/Topic01/T01P56/img1.png', id: '1' },

    { src: 'pages/images/Topic01/T01P56/image_01_small.png', id: '2' },

];





var audioPath = "pages/audio/Topic01/T01P56/T01P56";

var gItemAudioPath = ["pages/audio/Topic01/T01P56/tryagain",

    "pages/audio/Topic01/T01P56/T01P56_2",

    "pages/audio/Topic01/T01P56/wrong_feedback",

];


clickViewMoreInfo();
glossaryFuncPageLevel();

var currCue = 0;

var idd = 0;





var __curState = 0;
var correctOptions = ["0", "1", "2"];



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

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Let’s continue stabilizing Baby Mateo. Which physician orders are most appropriate in this situation? Select all that apply and click Submit." }

];


var popupSectionArray0 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "" },



];


var popupSectionArray1 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "That is correct. Click Next to continue." },



];

var popupSectionArray2 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. You should obtain a blood sugar within 30 to 60 minutes of arrival in the nursery and start an IV infusion of D10W at 5.8 mL per hour, which equals 80 mL per kilogram per day. Click Next to continue." },



];

var equaltoclicked = 0;

var plusValue = 0;

var minusValue = 0;

var divideValue = 0;

var multiplyValue = 0;


function calculationClick() {

    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #power, #dot, #para1, #para2').click(function() {

        ($(this).attr('id'));

        if (equaltoclicked == 1) {

            $('.calcDisplay').html('');

            equaltoclicked = 0;

        }

        var v = $(this).val();

        var total = $('.calcDisplay').text($('.calcDisplay').text() + v);

    });



    //clicking equal sign evaluates the textarea

    $('#equal').click(function() {

        equaltoclicked = 1;

        var calculation = eval($('.calcDisplay').text());

        $('.calcDisplay').html(calculation);

    });





    $('#clear').click(function() {

        $('.calcDisplay').html('');

    });





    $('#backspace').click(function() {

        $('.calcDisplay').html($('.calcDisplay').text().substring(0, $('.calcDisplay').text().length - 1));

    });


}

function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

}

var __dataXml;

var audplayer = document.getElementById('audioplayer');

var __dataXml;

var __clickCount = 0;

var attemptCount = 0,
    incorrectCount = 0;

$(document).ready(function() {

    audioReset()
    clickViewMoreInfo();
    disableNextBtn();
    bindClickableHotspot();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    $("select._options").css("pointer-events", "none");

    $("#ClsbackImg2").hide()

    $("#subTxt3").hide();

    var n = isInArray("M1L0T1P56", gCompPageArr);

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



function fnPlaySectionAudio(gCurrentIndex) {

    indexAudio = (gCurrentIndex);

    audioId = "audio_" + gCurrentIndex;

    gAudioId = audioId;

    fnHideShowAudioPlayer(false);

    updateContentArray = eval("popupSectionArray" + (gCurrentIndex));

    initAudioPlayer(gItemAudioPath[gCurrentIndex]);

}



function bindClickableHotspot() {

    $('.option').addClass('aactive'); //.css({ 'cursor': 'pointer' });

    $('.option').off().on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('clicked');

        if ($('.option.clicked').length >= 1) {

            $('.cSubmitBtn').addClass('active');

            $('.cSubmitBtn.active').off().on('click', function() {

                submitClick($(this));



            });

        } else {

            $('.cSubmitBtn').removeClass('active');

        }

    });



}


function submitClick(aCurrent) {


    if (aCurrent.hasClass("active")) {

        tinCanWrapper.sendStatementData("answered", "Baby-Mateo-was-admitted-to-the-Special-Care-Nursery-15-minutes-ago-following-emergency-C-section-for-maternal-indications.-Which-physician-orders-are-most-appropriate-in-this-situation?.", "Baby Mateo was admitted to the Special Care Nursery 15 minutes ago following emergency C-section for maternal indications. Which physician orders are most appropriate in this situation?");
        $('.cSubmitBtn.active').hide();

        var __ficon = '';
        var __fLength;

        var selected = $('.clicked').length;
        $('.option.clicked').addClass('wrong');


        var incorrectCount = 0,
            correctCount = 0;

        $('.option').each(function() {
            console.log($(this).index());



            if ($(this).hasClass('clicked') && ($.inArray($(this).attr("curid"), correctOptions) == -1)) {
                $(this).addClass('wrong');
                //$(this).append('<span class="feedback_icon" id="' + $(this).index() + '"></span>');



                incorrectCount++;

            } else if ($(this).hasClass('clicked') && ($.inArray($(this).attr("curid"), correctOptions) != -1)) {

                correctCount++;

            }



            $(this).off(); //.removeClass('clicked');

        });

        $(".feedback_icon").show();

        $(".feedback_icon").off("click").on("click", function() {
            fnPauseAudio();
            var _getDesc = '';
            var _getHeading = '';
            __ficon = $(this).attr("id").split("_");
            console.log("current ID" + __ficon);
            if (__ficon == "3") {
                _getDesc = "A D<sub>5</sub>W IV solution would not deliver sufficient glucose and this IV rate would deliver too much IV fluid for a newly born infant of this gestational age (100 mL/kg/day).";
                _getHeading = "Start an IV infusion of D<sub>5</sub>W at 7.3 mL per hour";

            } else {
                _getDesc = "This IV rate would deliver too much glucose and fluid for a newly born infant of this gestational age (120 mL/kg/day).";
                _getHeading = "Start an IV infusion of D<sub>10</sub>W at 8.8 mL per hour";
            }

            $("<div class='glossaryPopup'></div>").insertAfter('.gridContainer');
            var __html = '<div class="popupglossasryCnt"><div id="helptopbar"><div id="id_glosTitleText">' + _getHeading + '</div><div class="close_txt"><span id="clsText">Close</span></div><div id="id_glosCloseBtn" class="id_glosCloseBtn" title="Close"></div></div><div class="glossaryCntTxt">' + _getDesc + '</div></div>';
            $('.glossaryPopup').html(__html);
        });



        $(correctOptions).each(function(i, val) {

            //$('.option').eq(val).addClass('correct');
            $('.option').eq(val).removeClass('wrong').addClass('correct');

        });

        // if (incorrectCount == 0 && correctCount== correctOptions.length) {

        //     fnPlaySectionAudio(1);

        // //    $('.downloadText').show();

        // } else {

        //     fnPlaySectionAudio(0);

        // }

        console.log("correct ", incorrectCount, correctCount, correctOptions.length);
        if (incorrectCount == 0 && correctCount == correctOptions.length) {

            fnPlaySectionAudio(1);

        } else if (incorrectCount != 0 && correctCount == correctOptions.length && correctCount > 0) {

            fnPlaySectionAudio(2);

        } else if (incorrectCount == 0 && correctCount < correctOptions.length && correctCount > 0) {

            fnPlaySectionAudio(2);

        } else if (incorrectCount != 0 && correctCount < correctOptions.length && correctCount > 0) {
            fnPlaySectionAudio(2);
        } else if (incorrectCount != 0 && correctCount == 0) {
            fnPlaySectionAudio(2);
        } else {

            fnPlaySectionAudio(4);

        }

        $('.option').off().removeClass('aactive'); //.css({'cursor':'default'});

        $('.cSubmitBtn').removeClass('active');

        enableNextEnd();
    }

}

function fnCompletion() {

    console.log("end");

    //  $("select").css("pointer-events", "")

    if ($(".clsVisited").length == gTotalPopups) {

        enableNextBtn();

        $(".boxInst").show();

        fnAudioFinishItemComp();

    }

}

function enableNextEnd() {
    enableNextBtn();
    fnDesiableNext(false);
    gCompPageArr.push("M1L0T1P56");
}

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {
        console.log("start audio");
        // fnClick();
        calculationClick();
        $(".calcButton").css("cursor", "pointer");
        $(".clickToEnlarge").show();
        $(".small_expand").show();
        //   fnAudioFinishItemComp();

    } else {
        $(".boxInst").show();
        $(".clickToEnlarge").show();
        $(".small_expand").show();
        //fnGlowNextBtn();
        //if (gAudioId != 'audio_0') {
        //fnGlowNextBtn();
        fnAudioFinishItemComp();
        //}

        fnCompletion();



    }

}




$(".small_expand").on("click", function() {

    fnPauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");
    $('.boxInst').addClass("blur");
    $(".modalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

    if ($(this).attr('click_id') == 2) {

        $('.modalTextBottom').hide();

        $('.modalTxtImg').css('height', '400px');

        $('.modalContent').css('background', '#fff');

    } else {

        $('.modalTextBottom').show();

        $('.modalTxtImg').css('height', '385px');

        $('.modalContent').css('background', 'rgba(91, 91, 91, 1)');

    }



});

$(".closepopup").on("click", function() {

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