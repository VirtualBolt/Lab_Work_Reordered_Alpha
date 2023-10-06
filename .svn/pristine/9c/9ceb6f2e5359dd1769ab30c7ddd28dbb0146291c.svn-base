manifest = [

    { src: 'pages/images/Topic01/T01P62/img2.png', id: '1' },

    { src: 'pages/images/Topic01/T01P62/image_02_small.png', id: '2' },

];



console.log("Labor" + gCompPageArr);

glossaryFuncPageLevel();

var audioPath = "pages/audio/Topic01/T01P62/T01P62";

var gItemAudioPath = ["pages/audio/Topic01/T01P62/T01P62_1",

    "pages/audio/Topic01/T01P62/T01P62_2",

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

    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "When should the blood sugar be repeated? Select the correct option and click Submit." }

];

var updateContentArray1 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "Here is some feedback on your response. You have not selected the correct time interval to repeat the blood sugar. See the option highlighted in yellow that is the appropriate time to repeat the blood sugar. Click Next to continue." }

];

var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That is correct. Click Next to continue." }

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

    var n = isInArray("M1L0T1P62", gCompPageArr);

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

        $('.boxInst').show();

        fnAudioFinishItemComp();

    }



}



function fnOnAudioComplete() {
    if (gAudioId == "startAudio") {
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        audplayer.pause();
        audplayer.currentTime = 0;
    } else {
        $('.boxInst').show();
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');
        fnCompletion();
        //fnGlowNextBtn();
        fnAudioFinishItemComp();
        audplayer.pause();
        audplayer.currentTime = 0;
    }
}

var correctOptions = ["1"];



function bindClickableHotspot() {



    $('.option').addClass('aactive'); //.css({ 'cursor': 'pointer' });

    $('.option').off().on('click', function() {
        //e.preventDefault();

        //$('.option').removeClass('clicked');

        //$(this).toggleClass('clicked');
        $('.option').removeClass('clicked');

        $(this).addClass('clicked');

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
        console.log("highlight " + $(this).attr("curid"));
        __clickedOpt.push($(this).attr("curid"));
    });
}
/* highlight */



function submitClick(aCurrent) {
    if (aCurrent.hasClass("active")) {

        tinCanWrapper.sendStatementData("answered", "When-should-the-blood-sugar-be-repeated?", "When should the blood sugar be repeated?");

        $('.cSubmitBtn.active').hide();

        var incorrectCount = 0;
        $('.option.clicked').addClass("wrong");

        $('.option').each(function() {
            console.log($(this).index());



            if ($(this).hasClass('clicked') && ($.inArray($(this).attr("curid"), correctOptions) == -1)) {

                $(this).addClass('wrong');
                // $(this).append('<span class="feedback_icon" id="' + $(this).index() + '"></span>');



                incorrectCount++;

                console.log(incorrectCount);

            }



            $(this).off(); //.removeClass('clicked');

        });

        $(".feedback_icon").show();
        $(".feedback_icon").off("click").on("click", function() {
            fnPauseAudio();
            //e.preventDefault();
            var _getDesc = '';
            var _getHeading = '';
            __ficon = $(this).attr("id").split("_");
            console.log("current ID" + __ficon);
            if (__ficon == "0") {
                _getDesc = "Allow at least 15 to 30 minutes after the bolus is completed before checking blood sugar.";
                _getHeading = "10 minutes after the bolus is started";

            } else if (__ficon == "2") {
                _getDesc = "The blood sugar should be checked within 15 to 30 minutes after administration of the bolus. The lower the blood sugar, the sooner the test should be repeated.";
                _getHeading = "2 hours after the bolus is completed";
            }

            $("<div class='glossaryPopup'></div>").insertAfter('.gridContainer');
            var __html = '<div class="popupglossasryCnt"><div id="helptopbar"><div id="id_glosTitleText">' + _getHeading + '</div><div class="close_txt"><span id="clsText">Close</span></div><div id="id_glosCloseBtn" class="id_glosCloseBtn" title="Close"></div></div><div class="glossaryCntTxt">' + _getDesc + '</div></div>';
            $('.glossaryPopup').html(__html);
        });

        $(correctOptions).each(function(i, val) {
            $('.option').eq(val).removeClass('wrong').addClass('correct');
        });

        if (incorrectCount == 0) {
            fnPlaySectionAudio(0);
            // $('.downloadText').show();
        } else {
            fnPlaySectionAudio(1);
        }
        $('.option').off().removeClass('aactive'); //.css({ 'cursor': 'default' });
        $('.cSubmitBtn').removeClass('active');

        highlightBorderPushVal();
        var _checkN = areDifferentByIds(__clickedOpt, correctOptions);
        //console.log(__clickedOpt,correctOptions);
        //console.log("highlight "+_checkN);
        correctAnswerNotClicked(_checkN);

        enableNextBtn();
        fnDesiableNext(false);
        gCompPageArr.push("M1L0T1P62");

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