manifest = [

    { src: 'pages/images/Topic01/T01P57/img1.png', id: '1' },

    { src: 'pages/images/Topic01/T01P57/image_01_small.png', id: '2' },

];


var audioPath = "pages/audio/Topic01/T01P57/T01P57";

var gItemAudioPath = ["pages/audio/Topic01/T01P57/T01P57_1",

    "pages/audio/Topic01/T01P57/T01P57_2",

    "pages/audio/Topic01/T01P57/T01P57_3"

];

clickViewMoreInfo();
glossaryFuncPageLevel();

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

    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Baby Mateo's first blood sugar at 50 minutes of age is 24 milligrams per deciliter. Which physician orders are most appropriate in this situation? Select all that apply and click Submit." }
];

var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That's correct. Click Next to continue." }

];

var updateContentArray1 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. You should give a 2 mL per kilogram bolus of D10W, or 3.5 mL IV over 4 minutes. Click Next to continue." }

];

var updateContentArray2 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. You should give a 2 mL per kilogram bolus of D10W, or 3.5 mL IV over 4 minutes. Click Next to continue." }

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

    var n = isInArray("M1L0T1P57", gCompPageArr);

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

        audplayer.pause();

        audplayer.currentTime = 0;
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');

    } else {
        $(".boxInst").show();
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        //fnGlowNextBtn();

        fnAudioFinishItemComp();

        audplayer.pause();

        audplayer.currentTime = 0;



    }

}

var correctOptions = ["1"];



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

        tinCanWrapper.sendStatementData("answered", "Baby-Mateo's-first-blood-sugar-at-50-minutes-of-age-is-24-mg/dL-(1.3-mmol/L).-Which-physician-orders-are-most-appropriate-in-this-situation?", "Baby Mateo's first blood sugar at 50 minutes of age is 24 mg/dL (1.3 mmol/L). Which physician orders are most appropriate in this situation?");

        $('.cSubmitBtn.active').hide();

        var selected = $('.clicked').length;

        $('.option.clicked').addClass('wrong');

        var incorrectCount = 0,
            correctCount = 0;

        $('.option').each(function() {
            console.log($(this).index());



            if ($(this).hasClass('clicked') && ($.inArray($(this).attr("curid"), correctOptions) == -1)) {

                $(this).addClass('wrong');
                incorrectCount++;

            } else if ($(this).hasClass('clicked') && ($.inArray($(this).attr("curid"), correctOptions) != -1)) {

                correctCount++;

            }



            $(this).off(); //.removeClass('clicked');

        });
        $(".feedback_icon").show();
        $(".feedback_icon").on("click", function() {
            fnPauseAudio();
            //e.preventDefault();
            var _getDesc = '';
            var _getHeading = '';
            __ficon = $(this).attr("id").split("_");
            console.log("current ID" + __ficon);
            if (__ficon == "0") {
                _getDesc = "It would be premature to increase the dextrose concentration at this time.";
                _getHeading = "Change the IV fluid to D<sub>15</sub>W";

            } else if (__ficon == "2") {
                _getDesc = "The dextrose concentration is too high and will cause rebound hypoglycemia. Also D<sub>25</sub>W is too caustic for peripheral IV administration.";
                _getHeading = "Give D<sub>25</sub>W 3.5 mL/kg IV over 4 minutes";
            } else if (__ficon == "3") {
                _getDesc = "That IV rate is too high for a newly born infant at this gestational age (140 mL/kg/day).";
                _getHeading = "Increase the D<sub>10</sub>W IV infusion rate to 10.2 mL per hour";
            } else if (__ficon == "4") {
                _getDesc = "Although confirmatory testing may be helpful, you should not delay treatment for hypoglycemia while awaiting test results.";
                _getHeading = "Send a confirmatory plasma glucose sample to the lab before taking action";
            }

            $("<div class='glossaryPopup'></div>").insertAfter('.gridContainer');
            var __html = '<div class="popupglossasryCnt"><div id="helptopbar"><div id="id_glosTitleText">' + _getHeading + '</div><div class="close_txt"><span id="clsText">Close</span></div><div id="id_glosCloseBtn" class="id_glosCloseBtn" title="Close"></div></div><div class="glossaryCntTxt">' + _getDesc + '</div></div>';
            $('.glossaryPopup').html(__html);
        });



        $(correctOptions).each(function(i, val) {
            console.log(i, val);
            $('.option').eq(val).removeClass('wrong').addClass('correct');

        });

        // if (incorrectCount == 0 && correctCount== correctOptions.length) {

        //     fnPlaySectionAudio(1);

        // //    $('.downloadText').show();

        // } else {

        //     fnPlaySectionAudio(0);

        // }
        console.log(incorrectCount);
        if (incorrectCount == 0) {
            fnPlaySectionAudio(0);
            // $('.downloadText').show();
        } else {
            fnPlaySectionAudio(1);
        }

        $('.option').off().removeClass('aactive'); //.css({ 'cursor': 'default' });

        $('.cSubmitBtn').removeClass('active');

        // fnCompletion();
        enableNextBtn();
        fnDesiableNext(false);
        gCompPageArr.push("M1L0T1P57");
    }

}



$(".small_expand").on("click", function() {

    pauseAudio();

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