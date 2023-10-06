manifest = [{ src: 'pages/images/Topic01/T01P76/img1.png', id: '1' },

    { src: 'pages/images/Topic01/T01P76/img2.png', id: '2' },

    { src: 'pages/images/Topic01/T01P76/img3.png', id: '3' }

];



var audioPath = "pages/audio/Topic01/T01P76/T01P76";

var gItemAudioPath = ["pages/audio/Topic01/T01P76/T01P76_1", "pages/audio/Topic01/T01P76/T01P76_2", "pages/audio/Topic01/T01P76/T01P76_3"];



var currCue = 0;

var idd = 0;

var popupContentArray0 = [];

var __aIndex = []



var updateContentArray = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Identify the contradictions for using a UVC or a UAC by clicking on the dropdown menu and selecting the appropriate option." }

];



var popupSectionArray0 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "That is incorrect. Please try again." }

];





var popupSectionArray1 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "That is correct.<br/>Contraindications for placement of a UVC includes omphalitis, peritonitis, and if the infant has an omphalocele. Contraindications for placement of a UAC are the same as for a UVC, however, additional contraindications include the presence of any acute abdominal process, including necrotizing enterocolitis, or evidence of vascular compromise in the lower half of the body. Click on the hyperlink for more information on Umbilical Vein Catheter (UVC) and Umbilical Artery Catheter (UAC)  Insertion - HS." }



];

var popupSectionArray2 = [

    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "That is incorrect.<br/>Contraindications for placement of a UVC includes omphalitis, peritonitis, and if the infant has an omphalocele. Contraindications for placement of a UAC are the same as for a UVC, however, additional contraindications include the presence of any acute abdominal process, including necrotizing enterocolitis, or evidence of vascular compromise in the lower half of the body. Click on the hyperlink for more information on Umbilical Vein Catheter (UVC) and Umbilical Artery Catheter (UAC)  Insertion - HS." }



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

    audioReset();

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    $("select._options").css("pointer-events", "none");

    $("#ClsbackImg2").hide()

    $("#subTxt3").hide();

    var n = isInArray("M1L0T1P76", gCompPageArr);

    if (n == true) {

        enableNextBtn();

        //fnGlowNextBtn();

        fnDesiableNext(false);

    }



    $('#pageClsResourcesPopup').hide();

    $(document).on("click", '._clickLink', function() {



        var num = $(this).attr('id').slice(10)



        console.log(referenceArr);



        $(this).addClass("_viewed");



        $('.pdflink').attr('src', referenceArr[num])



        $("#pageid_RefTitleBar").hide();



        $("#pageRefTitleBar_id").show();



    });

    $("#pageRefCloseBtn_id").click(function() {

        console.log("sdfsdfds");

        //$("#pageClsResourcesPopup").hide();

        $("#pageClsResourcesPopup").hide();



        //$("#pageid_RefTitleBar").show()



    });

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

            $('.feedbackContainer').fadeIn();

            $('.mainContainer').addClass('blur')

            if (incorrectCount != 0) {

                $('.feedTitle strong').html('That is incorrect.');

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



            }

            $(this).parent().removeClass('incorrect');

            $(this).parent().removeClass('correct');

            $(this).css("pointer-events", "all");

            $(this).val(0).change();



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



function fnOnAudioComplete() {



    if (gAudioId == "startAudio") {

        console.log("start audio");

        fnClick();

        //   fnAudioFinishItemComp();

    } else {

        if (gAudioId != 'audio_0') {

            enableNextBtn();

            $(".boxInst").show();

            //fnGlowNextBtn();

            gCompPageArr.push("M1L0T1P76");

            fnDesiableNext(false);

        }

        fnCompletion();



    }

}