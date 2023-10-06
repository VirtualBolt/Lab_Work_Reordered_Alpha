manifest = [{ src: 'pages/images/Topic01/T01P77/T01P77_01.png', id: '1' }, { src: 'pages/images/Topic01/T01P77/T01P77_02.png', id: '2' }, { src: 'pages/images/Topic01/T01P77/T01P77_03.svg', id: '3' }

];

var audioPath = "pages/audio/Topic01/T01P77/T01P77";

//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

//];



var currCue = 0;

var idd = 0;



var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Heparin is commonly added to central line fluids to prevent clots from forming at the end of the catheter, or in the blood vessel where the catheter is located. Heparin is supplied in different concentrations; therefore, each time a heparin vial is opened, double-check that the correct concentration has been selected. Ideally, commercially prepared IV fluid containing heparin should be utilized. If this is not possible, it is advised that two nurses double-check the heparin dose that is drawn up, as well as the concentration of heparin in the vial, before the heparin is added to the IV fluid. It's important to understand that it takes only 50 to 100 units of heparin per kilogram of body weight to 'heparinize' an infant, which can lead to excessive and sometimes devastating bleeding." },


    { time: "6", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idCircle01", duration: "0.5", activity: { 'opacity': '1', 'transform': 'matrix(1,0,0,1,0,0)' } }] },
    { time: "8", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idPatch1", duration: "0.5", activity: { 'width': '778px', 'display': 'block' } }] },



    { time: "10", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist0", duration: "0.5", activity: { 'display': 'list-item' } }] },

    { time: "16", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist1", duration: "0.5", activity: { 'display': 'list-item' } }] },

    { time: "19", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist2", duration: "0.5", activity: { 'display': 'list-item' } }] },


    { time: "22", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idCircle02", duration: "0.5", activity: { 'opacity': '1', 'transform': 'matrix(1,0,0,1,0,0)' } }] },

    { time: "24 ", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#idPatch2", duration: "0.5", activity: { 'width': '778px', 'display': 'block' } }] },




    { time: "25", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".alertIcon", duration: "0.5", activity: { 'display': 'block' } }] },

    { time: "25", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist3", duration: "0.5", activity: { 'display': 'list-item' } }] },



    { time: "38", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist4", duration: "0.5", activity: { 'display': 'list-item' } }] },

    { time: "45", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist5", duration: "0.5", activity: { 'display': 'list-item' } }] }


];



function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);



}

var __dataXml;

var __clickCount = 0;

var audplayer = document.getElementById("audioplayer");

$(document).ready(function() {
    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }





    var n = isInArray("M1L0T1P77", gCompPageArr);

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





function fnCompletion() {

    // console.log("end");

    //if($(".clsVisited").length==gTotalPopups){

    //enableNextBtn();

    //fnAudioFinishItemComp();

    //}

}



$(".small_expand").on("click", function() {



    if (!fnPauseAudio()) {



        fnPauseAudio()

    } else {

        playPauseAudio();



    }

    $(".modalTxtImg").hide();



    var i = $(this).attr("id").slice(8);

    $("#case_study_popup" + i).show();

    $("#imgPopup" + i).show();

    $(".mainContainer").addClass("blur");

    //$(".sectionContent").addClass("blur");

});



$(".closepopup").on("click", function() {

    // audioReset();

    var __aIndex = $(this).attr("id").slice(8);

    if (!fnPauseAudio()) {

        console.log(true);

        playPauseAudio();

    }



    $(".modal").removeAttr("style");

    $(".mainContainer").removeClass("blur");

    //$(".sectionContent").removeClass("blur");

});


function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

        enableNextBtn();

        fnAudioFinishItemComp();

        $('.boxInst').css('display', 'block');
        $('.small_expand').css('display', 'block').css('opacity', '1');
        $('.clickToEnlarge').css('display', 'block').css('opacity', '1');

        gCompPageArr.push("M1L0T1P77");

        audplayer.pause();

        audplayer.currentTime = 0;

    } else {



    }

}