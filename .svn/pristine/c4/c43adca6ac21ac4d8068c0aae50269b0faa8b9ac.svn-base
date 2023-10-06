manifest = [

    { src: 'pages/images/Topic01/T01P91/0.png', id: '1' },

    { src: 'pages/images/Topic01/T01P91/1.png', id: '2' },

    { src: 'pages/images/Topic01/T01P91/2.png', id: '3' },

    { src: 'pages/images/Topic01/T01P91/3.png', id: '4' },

    { src: 'pages/images/Topic01/T01P91/4.png', id: '5' },

    { src: 'pages/images/Topic01/T01P91/5.png', id: '6' },

    { src: 'pages/images/Topic01/T01P91/6.png', id: '7' },

    { src: 'pages/images/Topic01/T01P91/7.png', id: '8' },

    { src: 'pages/images/Topic01/T01P91/8.png', id: '9' },

    { src: 'pages/images/Topic01/T01P91/9.png', id: '10' },

    { src: 'pages/images/Topic01/T01P93/baby.png', id: '11' },

    { src: 'pages/images/Topic01/T01P91/divide.png', id: '12' },

    { src: 'pages/images/Topic01/T01P91/equal.png', id: '13' },

    { src: 'pages/images/Topic01/T01P91/minus.png', id: '14' },

    { src: 'pages/images/Topic01/T01P91/multiply.png', id: '15' },

    { src: 'pages/images/Topic01/T01P91/period.png', id: '16' },

    { src: 'pages/images/Topic01/T01P91/plus.png', id: '17' },

];



/* console.log("Labor" + gCompPageArr);



var audioPath = "pages/audio/Topic01/T01P94/T01P94";

var gItemAudioPath = ["pages/audio/Topic01/T01P91/T01P91_1",

    "pages/audio/Topic01/T01P91/T01P91_2",

]; */



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

    { time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "The new IV rate is" }, { time: "0.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".small_expand", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }, { time: "0.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".clickToEnlarge", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }

];

var updateContentArray1 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That is incorrect. Click Next to continue." }

];

var updateContentArray0 = [{ time: "0.0", carry: "", event: "", show: "", hide: "", transcript: "That is correct. Click Next to continue." }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

}

var __dataXml;

var audplayer = document.getElementById('audioplayer');



$(document).ready(function() {

    $(".bottomTxt, .instSubmit").removeAttr("style");

    $('.calcDisplay').html('');

    //$('.calcButton').prop('disabled', true);

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

    var equaltoclicked = 0;

    var plusValue = 0;

    var minusValue = 0;

    var divideValue = 0;

    var multiplyValue = 0;



    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #power, #dot, #para1, #para2').click(function() {

        ($(this).attr('id'));

        if (equaltoclicked == 1)

        {

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



/* function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        console.log("start audio");

        //   enableNextBtn();

        //  fnAudioFinishItemComp();

        // we need to replace this

        //fnClick();

        //bindClickableHotspot();

								audplayer.pause();

				audplayer.currentTime = 0;

    } else {

        fnCompletion();

		enableNextBtn();

        $('.boxInst').show();

		gCompPageArr.push("M1L0T1P94");

        fnAudioFinishItemComp();

								audplayer.pause();

				audplayer.currentTime = 0;



    }

} */

var correctOptions = [1];



function bindClickableHotspot() {

    $('.calcButton').prop('disabled', false);

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

    $('.cSubmitBtn.active').hide();

    $('.instSubmit').hide();

    var incorrectCount = 0;

    $('.option').each(function(index) {

        if ($(this).hasClass('clicked') && ($.inArray($(this).index(), correctOptions) == -1)) {

            $(this).addClass('wrong');

            incorrectCount++;

            console.log(incorrectCount);

        }
        if (index != correctOptions[0] && $(this).hasClass('clicked')) {
            $(this).addClass('wrong');
            incorrectCount++;
        }



        $(this).off(); //.removeClass('clicked');

    });

    $(correctOptions).each(function(i, val) {

        $('.option').eq(val).addClass('correct');
        $('.option').eq(val).removeClass('wrong');

    });

    if (incorrectCount == 0) {



        //fnPlaySectionAudio(0);

        // $('.downloadText').show();

    } else {

        //fnPlaySectionAudio(1);

    }

    $('.option').off().removeClass('aactive'); //.css({ 'cursor': 'default' });

    $('.calcButton').prop('disabled', true).css('cursor', "default");;

    $('.cSubmitBtn').removeClass('active');



}



$(".small_expand").on("click", function() {

    pauseAudio();

    //audioReset();

    $("#TabPopup5 .modal").show();

    $("#TabPopup5 .sectionTop").addClass("blur");

    $("#TabPopup5 .sectionContent").addClass("blur");

    $(".ModalTxtImg").attr('id', 'imgPopup' + $(this).attr('click_id'));

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