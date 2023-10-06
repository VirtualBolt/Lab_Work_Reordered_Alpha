manifest = [

    { src: 'pages/images/Topic01/T01P66/img2.png', id: '1' },

    { src: 'pages/images/Topic01/T01P66/image_02_small.png', id: '2' },

];







var audioPath = "pages/audio/Topic01/T01P66/T01P66";

var gItemAudioPath = ["pages/audio/Topic01/T01P66/T01P66_1",

    "pages/audio/Topic01/T01P66/T01P66_3",

    "pages/audio/Topic01/T01P66/T01P66_3",

    "pages/audio/Topic01/T01P66/T01P66_3",

    "pages/audio/Topic01/T01P66/T01P66_3"

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

    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Now that Baby Conrad’s vital signs are normal, what further actions should be taken? Select all that apply and click Submit." },

    { time: "5.0", carry: "", event: "", show: "", hide: "", transcript: "Now that Baby Conrad’s vital signs are normal, what further actions should be taken? Select all that apply and click Submit." }


];

var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That is correct. Click Next to continue." }

];

var updateContentArray1 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. See the options highlighted in yellow that are appropriate actions to be taken. Click Next to continue." }

];

var updateContentArray2 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. See the options highlighted in yellow that are appropriate actions to be taken. Click Next to continue." }

];

var updateContentArray3 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. See the options highlighted in yellow that are appropriate actions to be taken. Click Next to continue." }

];

var updateContentArray4 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. See the options highlighted in yellow that are appropriate actions to be taken. Click Next to continue." }

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

    var n = isInArray("M1L0T1P66", gCompPageArr);

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

        audplayer.pause();

        audplayer.currentTime = 0;

    } else {
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        fnAudioFinishItemComp();
        audplayer.pause();
        audplayer.currentTime = 0;
    }

}

var correctOptions = ["0", "1"];



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


/* highlight */
__clickedOpt = [];

function correctAnswerNotClicked(aCorrectAnswerVal) {
    for (var i = 0; i < aCorrectAnswerVal.length; i++) {
        //console.log("highlighted "+aCorrectAnswerVal[i]);
        //$(".clsPanel .option[curid='"+aCorrectAnswerVal[i]+"']").addClass("cborder");
        $(".clsPanel .option[curid='" + aCorrectAnswerVal[i] + "']").addClass("cborder");
    }
}

function areDifferentByIds(clickVal, correctVal) {
    var newArr = correctVal.slice();

    for (var i = 0; i < clickVal.length; i++) {


        var index = newArr.indexOf(clickVal[i]);
        if (index !== -1) {
            newArr.splice(index, 1);
        }

    }

    return newArr;
}

function highlightBorderPushVal() {
    __clickedOpt = [];
    $(".option.clicked").each(function() {

        __clickedOpt.push($(this).attr("curid"));
    });
}
/* highlight */


function submitClick(aCurrent) {
    if (aCurrent.hasClass("active")) {


        tinCanWrapper.sendStatementData("answered", "What-actions-would-be-taken?", "What actions would be taken?");

        $('.cSubmitBtn.active').hide();

        var selected = $('.clicked').length;



        var incorrectCount = 0,
            correctCount = 0;

        $('.option').each(function() {




            if ($(this).hasClass('clicked') && ($.inArray($(this).attr("curid"), correctOptions) == -1)) {

                $(this).addClass('wrong');
                // $(this).append('<span class="feedback_icon" id="' + $(this).index() + '"></span>');



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

            if (__ficon == "2") {
                _getDesc = "Baby Conrad's symptoms are most likely related to being an IDM, and there are no maternal risk factors for infection. If he were to become ill or unstable, then a blood culture would be considered.";
                _getHeading = "Obtain a blood culture";

            } else if (__ficon == "5") {
                _getDesc = "Baby Conrad's symptoms are most likely related to being an IDM, and there are no maternal risk factors for infection. If he were to become ill or unstable, then a CBC would be indicated.";
                _getHeading = "Obtain a complete blood count";
            } else if (__ficon == "3") {
                _getDesc = "Baby Conrad's respiratory status improved with treatment for hypoglycemia. If he were to develop respiratory distress, then a CBG test would be considered.";
                _getHeading = "Determine the capillary blood gas value";
            } else if (__ficon == "4") {
                _getDesc = "Baby Conrad's respiratory status improved with treatment for hypoglycemia. If he were to develop respiratory distress, then a chest x-ray would be considered. ";
                _getHeading = "Obtain a chest x-ray";
            } else if (__ficon == "6") {
                _getDesc = "At this point, Baby Conrad has responded to initial therapy to treat hypoglycemia. If he had persistent hypoglycemia that was resistant to treatment, then a neonatology and endocrinology consult would be considered.";
                _getHeading = "Request a consult from a pediatric endocrinologist";
            }

            $("<div class='glossaryPopup'></div>").insertAfter('.gridContainer');
            var __html = '<div class="popupglossasryCnt"><div id="helptopbar"><div id="id_glosTitleText">' + _getHeading + '</div><div class="close_txt"><span id="clsText">Close</span></div><div id="id_glosCloseBtn" class="id_glosCloseBtn" title="Close"></div></div><div class="glossaryCntTxt">' + _getDesc + '</div></div>';
            $('.glossaryPopup').html(__html);
        });


        $(correctOptions).each(function(i, val) {
            $('.option').eq(val).removeClass("wrong").addClass('correct');

        });

        // if (incorrectCount == 0 && correctCount== correctOptions.length) {

        //     fnPlaySectionAudio(1);

        // //    $('.downloadText').show();

        // } else {

        //     fnPlaySectionAudio(0);

        // }

        if (incorrectCount == 0 && correctCount == correctOptions.length) {

            fnPlaySectionAudio(0);

        } else if (incorrectCount != 0 && correctCount == correctOptions.length && correctCount > 0) {

            fnPlaySectionAudio(1);

        } else if (incorrectCount == 0 && correctCount < correctOptions.length && correctCount > 0) {

            fnPlaySectionAudio(2);

        } else if (incorrectCount != 0 && correctCount < correctOptions.length && correctCount > 0) {

            fnPlaySectionAudio(3);

        } else if (incorrectCount != 0 && correctCount == 0) {

            fnPlaySectionAudio(4);

        } else {

            fnPlaySectionAudio(4);

        }

        $('.option').off().removeClass('aactive'); //.css({'cursor':'default'});

        $('.cSubmitBtn').removeClass('active');

        highlightBorderPushVal();
        var _checkN = areDifferentByIds(__clickedOpt, correctOptions);
        //console.log(__clickedOpt,correctOptions);
        //console.log("highlight "+_checkN);
        correctAnswerNotClicked(_checkN);

        fnCompletion();
        enableNextBtn();
        fnDesiableNext(false);
        gCompPageArr.push("M1L0T1P66");
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

        $('.modalTxtImg').css('height', '420px');

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