manifest = [{ src: 'pages/images/Topic01/T01P50/small_expand.png', id: '1' }

];

var audioPath = "pages/audio/Topic01/T01P50/T01P50";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "For infants who are at an increased risk for hypoglycemia, evaluate the blood sugar within 1 to 2 hours after birth, or when it is determined that the infant is sick. Then continue monitoring the blood sugar every 1 to 3 hours based on the glucose values identified, the interventions provided, and the health status of the infant&mdash;that is, stability of the infant's vital signs and whether you’re able to feed the infant versus the infant requires IV therapy." },
    { time: "1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".clsPatch", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },
    { time: "4.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".Clsback1", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },
    { time: "04.9", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".wallImage0", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },

    { time: "05.1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".wallImage1", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },

    { time: "05.3", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".wallImage2", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },

    { time: "05.3", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".paraText", duration: "0.5", activity: { 'display': 'block' } }] },

    { time: "10.8", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".wallImage3", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },

    { time: "11.0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".Clsback2", duration: "0.5", activity: { 'display': 'block' } }] },

    { time: "11.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".wallImage4", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },

    { time: "11.8", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".wallImage5", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },

    { time: "12.1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".wallImage6", duration: "0.5", activity: { 'display': 'block', 'opacity': '1' } }] },

    { time: "13.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".bullet_Text", duration: "0.5", activity: { 'display': 'block' } }] },

    { time: "16.0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#para1", duration: "0.5", activity: { 'display': 'list-item' } }] },


    { time: "17.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#para2", duration: "0.5", activity: { 'display': 'list-item' } }] },


    { time: "19.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#para3", duration: "0.5", activity: { 'display': 'list-item' } }] },


    { time: "22.0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#para4", duration: "0.5", activity: { 'display': 'list-item' } }] },


    { time: "25.0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#para5", duration: "0.5", activity: { 'display': 'list-item' } }] },


    { time: "27.5", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#para6", duration: "0.5", activity: { 'display': 'list-item' } }] }

    // { time: "23.80", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".clickToEnlarge", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }, 

    // { time: "23.80", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".small_expand", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }

];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;

var aud = document.getElementById("audioplayer");

$(document).ready(function () {



    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }


    var n = isInArray("M1L0T1P50", gCompPageArr);

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

aud.ontimeupdate = function () { myFunction() };

var contentEl = $('#ClsText_2');

var imageEl = $('#ClsText_2_img');



var contentEl1 = $('#ClsText_3');

var imagePl = $('#ClsText_3_img');



function myFunction() {

    var value = (100 / aud.duration) * aud.currentTime;

    // Display the current position of the video in a p element with id="demo"

    if (value > 0 && value < 10) {

        imageEl.attr('src', "pages/images/Topic01/T01P50/T01P50_02.gif");

        imagePl.attr('src', "pages/images/Topic01/T01P50/T01P50_03.gif");



    } else if (value > 10.02 && value < 11.09) {

        imageEl.attr('src', "pages/images/Topic01/T01P50/T01P50_02.gif?" + Math.random());



    } else if (value > 33 && value < 35) {

        //debugger;

        imagePl.attr('src', "pages/images/Topic01/T01P50/T01P50_03.gif?" + Math.random());

    }

}

$("#icon01").on("click", function () {
    pauseAudio()
    $(".modal").show();
    $(".mainContainer").addClass("blur");
    $(".ClsImage0").addClass("blur");
    $('.boxInst').addClass("blur");



});



$(".closepopup").on("click", function () {
    playAudio()
    // audioReset();
    $(".modal").hide();

    $(".mainContainer").removeClass("blur");

    $(".ClsImage0").removeClass("blur");
    $('.boxInst').removeClass("blur");





});

function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        fnAudioFinishItemComp();

        $('.boxInst').show();

        $('.icon00').css('display', 'block').css('opacity', '1');
        $('#icon01').css('display', 'block').css('opacity', '1');

        gCompPageArr.push("M1L0T1P50");

        aud.pause();

        aud.currentTime = 0;

    } else {



    }

}
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