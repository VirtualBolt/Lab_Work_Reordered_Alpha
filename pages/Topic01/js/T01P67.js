manifest = [{ src: 'pages/images/Topic01/T01P67/Mask_Group_11.png', id: '1' }];



var audioPath = "pages/audio/Topic01/T01P67/T01P67";

var gItemAudioPath = ["pages/audio/Topic01/T01P67/T01P67_1", "pages/audio/Topic01/T01P67/T01P67_2", "pages/audio/Topic01/T01P67/T01P67_3"];



var currCue = 0;

var idd = 0;

var popupContentArray0 = [];

var __aIndex = []



var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "For sick infants who are not well enough to be enterally fed, The S.T.A.B.L.E. Program recommends the following steps. From the drop-down menus, select the option that fits each statement and click Submit." },

    { time: "6", carry: "", event: "", show: "", hide: "", transcript: "For sick infants who are not well enough to be enterally fed, The S.T.A.B.L.E. Program recommends the following steps. From the drop-down menus, select the option that fits each statement and click Submit." }

];

/* var popupSectionArray0 = [

    {time:"0", carry:"", event:"", show:"", hide:"", transcript:"In utero, the fetus relies almost exclusively on placental transfer of glucose and nutrients to meet their growth and energy demands. Fetal glucose values change throughout gestation for a variety of reasons, but in general, their glucose value is approximately 70 to 80 percent of the maternal value. If the mother�s glucose is 200 mg/dL or 11 mmol/L, the fetal glucose value will be approximately (Click on the dropdown to select the appropriate value).",animation:[{target:"#subTxt3",duration:"0.5",activity:{'display':'none'}}]},

];*/

var popupSectionArray0 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Please try again.", animation: [{ target: "#subTxt3", duration: "0.5", activity: { 'display': 'none' } }] }

];



/* var popupSectionArray1 = [

    {time:"0", carry:"", event:"", show:"", hide:"", transcript:"The fetus regulates blood glucose levels by secreting insulin. This will become an important point when we discuss maternal diabetes and the effect of maternal hyperglycemia on fetal glucose values and insulin production and secretion."},

	

]; */

var popupSectionArray1 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "That is correct. Review the information for sick infants who are not well enough to be enterally fed, then click Next to continue." }
    // { time: "1.8", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    // { time: "7.6", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    // { time: "14.7", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    // { time: "30.1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }



];

var popupSectionArray2 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "That’s not quite right.  Review the information, then click Next to continue." },
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".showlist3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }



];

function fnAudioFinishItemComp() {

    console.log("end")

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;

var attemptCount = 0,
    incorrectCount = 0;

$(document).ready(function() {

    audioReset()
    disableNextBtn();
    fnClick();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    //$("select._options").css("pointer-events", "none");

    $("#ClsbackImg2").hide()

    $("#subTxt3").hide();

    var n = isInArray("M1L0T1P67", gCompPageArr);


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

function fnClick() {

    // enableNextBtn();

    $("select._options").css("pointer-events", "")

    $("select._options").change(function() {

        var selectedCount = 0;

        $("select._options").each(function() {

            var selectedOption = $(this).children("option:selected").val();

            if (selectedOption != 'select') {

                selectedCount++;

            }

        });

        if (selectedCount == $("select").length) {

            $(".cSubmitBtn").addClass('active');

            $(".cSubmitBtn.active").off().on('click', function(e) {

                submitClick(e);

            });

        } else {

            $(".cSubmitBtn").removeClass('active');

            $(".cSubmitBtn").off();

        }

    });





    $("select._options").on("click", function() {

        if ($(this).hasClass("down")) {

            //console.log("change to up");

            $(this).removeClass("down");

        } else {

            //	console.log("change to down");

            $(this).addClass("down");

        }



    });

}











function submitClick(e) {

    incorrectCount = 0;

    if ($(e.target).html() == 'Submit') {

        $("select._options").each(function() {

            $(this).blur().css("pointer-events", "none");

            var selectedOption = $(this).children("option:selected").val();

            if (selectedOption == "correct") {

                $(this).parent().addClass('correct');

            } else {

                $(this).parent().addClass('incorrect');

                incorrectCount++;



            }

        });

        if (attemptCount != 1 && incorrectCount != 0) {

            fnPlaySectionAudio(0);

            $(e.target).html('Try Again');

        } else {

            tinCanWrapper.sendStatementData("answered", "Blood-Sugar-Monitoring:Activity-For-sick-infants-who-are-not-well...", "For sick infants who are not well enough to be enterally fed, The S.T.A.B.L.E. Program recommends the following steps.");

            $('.feedbackContainer').fadeIn();

            $('.mainContainer').addClass('blur');

            enableNextBtnFunc1();

            if (incorrectCount != 0) {

                $('.feedTitle strong').html('Here is some feedback on your response.');

                fnPlaySectionAudio(2);

            } else {

                fnPlaySectionAudio(1);

            }

            $('.cSubmitBtn').removeClass('active').hide();





        }

    } else {

        attemptCount++;

        $("select._options").each(function() {

            if ($(this).parent().hasClass('incorrect')) {
                $(this).css("pointer-events", "all");
                $(this).val(0).change();

            }

            $(this).parent().removeClass('incorrect');

            // $(this).parent().removeClass('correct');

            //$(this).css("pointer-events", "all");

            //$(this).val(0).change();




        });

        $(e.target).html('Submit');

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

function audioStop() {
    var audio = document.getElementById("audioplayer");
    audio.pause();
    audio.currentTime = 0;
}

function enableNextBtnFunc1() {
    enableNextBtn();
    gCompPageArr.push("M1L0T1P67");
    fnDesiableNext(false);
}



function fnOnAudioComplete() {



    if (gAudioId == "startAudio") {

        console.log("start audio");

        //fnClick();

        //   fnAudioFinishItemComp();

    } else {

        if (gAudioId != 'audio_0') {
            $(".boxInst").show();
            //fnGlowNextBtn();
            fnAudioFinishItemComp();
        }

        fnCompletion();



    }

}





// $(".clsIconImg").on("click", function () {

//     pauseAudio();

//     $(".sectionTop").addClass("blur");

//     $(".sectionContent").addClass("blur");

//     $(".caseStudyContent .ModalTxtImg").attr("id", "imgPopup0");

//     //        $(".caseStudyContent").attr("id","imgdd"+_getCurId);

//     $(".CaseStudy").show();

// });



// $(".closepopup").on("click", function () {

//     playAudio();

//     $(".CaseStudy").hide()

//     $("#idPatch3").removeClass("blur");

//     $(".CaseStudy .ModalTxtImg").removeAttr("id");

// });

// function pauseAudio() {

//     if (!fnPauseAudio()) {

//         fnPauseAudio()

//     } else {

//         playPauseAudio();

//     }

// }

// function playAudio() {

//     if (!fnPauseAudio()) {

//         playPauseAudio();

//     }

// }