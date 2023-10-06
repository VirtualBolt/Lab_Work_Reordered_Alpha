manifest = [{

        src: 'pages/images/Topic01/T01P69/T01P69_01.png',

        id: '3'

    },

    {

        src: 'pages/images/Topic01/T01P69/T01P69_02.png',

        id: '5'

    },



    {

        src: 'pages/images/Topic01/T01P69/T01P69_03.png',

        id: '7'

    }

];

var audioPath = "pages/audio/Topic01/T01P68/T01P68";

var gItemAudioPath = ["pages/audio/Topic01/T01P68/T01P68_1", "pages/audio/Topic01/T01P68/T01P68_2", "pages/audio/Topic01/T01P68/T01P68_3", "pages/audio/Topic01/T01P68/T01P68_4", "pages/audio/Topic01/T01P68/T01P68_5", "pages/audio/Topic01/T01P68/T01P68_6"

];





var currCue = 0;

var idd = 0;



var updateContentArray = [{

        time: "0",

        carry: "",

        event: "",

        show: "",

        hide: "",

        transcript: "If you are presented with an infant whose blood glucose is less than 50 milligrams per deciliter, certain steps must be taken to ensure a normal blood glucose level is reached. The first step is to establish IV access and start D10W at 80 mL per kilogram per day. What would you do next? Complete the chart below by clicking on the correct step from the options shown on the left."

    },
    {
        time: "0",
        carry: "",
        event: "",
        show: "#idText3",
        hide: "",
        transcript: "",
        animation: [{ target: "#idText3", duration: "0.5", activity: { 'opacity': '0', 'display': 'none' } }]
    },
    {
        time: "0",
        carry: "",
        event: "",
        show: "#idText1",
        hide: "",
        transcript: "",
        animation: [{ target: "#idText1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    },

    {
        time: "0",
        carry: "",
        event: "",
        show: "#drop1 .dropped",
        hide: "",
        transcript: "",
        animation: [{ target: "#drop1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block', 'box-shadow': '0 0 0 3px rgba(228, 186, 78, 1)' } }]
    },
    {
        time: "0",
        carry: "",
        event: "",
        show: "#drop2",
        hide: "",
        transcript: "",
        animation: [{ target: "#drop2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }]
    }, {

        time: "8",

        carry: "",

        event: "",

        show: "",

        hide: "",

        transcript: "If you are presented with an infant whose blood glucose is less than 50 milligrams per deciliter, certain steps must be taken to ensure a normal blood glucose level is reached. The first step is to establish IV access and start D10W at 80 mL per kilogram per day. What would you do next? Complete the chart below by clicking on the correct step from the options shown on the left."

    }

];

var updateContentArray0 = [{

        time: "0.0",

        carry: "",

        event: "",

        show: "",

        hide: "",

        transcript: "That is correct. Review this summary information, then click Next to continue."

    },
    { time: "0", carry: "", event: "", show: "#idText3", hide: "", transcript: "", animation: [{ target: "#idText3", duration: "0.5", activity: { 'opacity': '0', 'display': 'none' } }] }, { time: "0", carry: "", event: "", show: "#idText1", hide: "", transcript: "", animation: [{ target: "#idText1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }
];

var updateContentArray1 = [{

        time: "0.0",

        carry: "",

        event: "",

        show: "",

        hide: "",

        transcript: "Please select another option."

    }, { time: "0", carry: "", event: "", show: "#idText1", hide: "", transcript: "", animation: [{ target: "#idText1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "#idText3", hide: "", transcript: "", animation: [{ target: "#idText3", duration: "0.5", activity: { 'opacity': '0', 'display': 'none' } }] }
];
var updateContentArray2 = [{
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "That is correct. Use your good judgment to check the glucose at an interval that reflects the prior blood glucose value. For example, if the blood sugar is 30 milligrams per deciliter or less and you give a glucose bolus, check the blood sugar 15 to 30 minutes after the bolus is completed. The repeat blood sugar check is less than 50 milligrams per deciliter. What would you do next? Select the correct step to continue. "
    },
    { time: "0", carry: "", event: "", show: "#idText2", hide: "", transcript: "", animation: [{ target: "#idText2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "", hide: "#idText3", transcript: "", animation: [{ target: "#idText3", duration: "0.5", activity: { 'display': 'none', 'opacity': '0' } }] },
    { time: "14", carry: "", event: "", show: "", hide: "#idText1", transcript: "", animation: [{ target: "#idText1", duration: "0.5", activity: { 'display': 'none', 'opacity': '0' } }] },
    { time: "18", carry: "", event: "", show: "#idText3", hide: "", transcript: "", animation: [{ target: "#idText3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "18", carry: "", event: "", show: "", hide: "#idText2", transcript: "", animation: [{ target: "#idText2", duration: "0.5", activity: { 'display': 'none', 'opacity': '0' } }] }


];
var updateContentArray3 = [{
    time: "0.0",
    carry: "",
    event: "",
    show: "",
    hide: "",
    transcript: "That is correct. Select the next step to continue."
}, { time: "0", carry: "", event: "", show: "#idText3", hide: "", transcript: "", animation: [{ target: "#idText3", duration: "0.5", activity: { 'opacity': '0', 'display': 'none' } }] }, { time: "0", carry: "", event: "", show: "#idText1", hide: "", transcript: "", animation: [{ target: "#idText1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }];
var updateContentArray4 = [{
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "That is correct. At this point, the repeat blood sugar check is still less than 50 milligrams per deciliter. What should you do? Select the correct step to continue."
    }, { time: "0", carry: "", event: "", show: "#idText1", hide: "", transcript: "", animation: [{ target: "#idText1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
    { time: "0", carry: "", event: "", show: "#idText3", hide: "", transcript: "", animation: [{ target: "#idText3", duration: "0.5", activity: { 'opacity': '0', 'display': 'none' } }] }
];


function fnAudioFinishItemComp() {

    fnAudioFinishPageComp();

    fnUpdatePageCompletionCounter(0);

    //fnUpdatePageCompletionCounter(7);

}

var __dataXml;

var __clickCount = 0;

var allCorrect = 0;
var audplayer = document.getElementById('audioplayer');
var step3 = 0;

$(document).ready(function() {

    disableNextBtn();

    var ele = document.getElementsByTagName('div');

    for (var i = 0; i < ele.length; i++) {

        ele[i].setAttribute("unselectable", "on");

    }

    enableClickStart(0);

    $('#idText1').html('If you are presented with an infant whose blood glucose <b>is less than</b> 50 mg/dL (2.8 mmol/L), certain steps must be taken to ensure a normal blood glucose level is reached. The <u>first step</u> is to establish IV access and start D<sub>10</sub>W at 80 mL/kg/day. What would you do next?');
    // < i class= "instc" style = "color: #4D667B;position:relative;top:-7px;" > Complete the chart below by selecting the correct step from the right.</i > 

    var n = isInArray("M1L0T1P68", gCompPageArr);

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

    updateContentArray = eval("updateContentArray" + (gCurrentIndex));

    initAudioPlayer(gItemAudioPath[gCurrentIndex])

}


function enableClickStart() {
    bindDragClickable();
    $('i.instc').css({ "visibility": "visible" });
    $('#drop1').addClass('dropped');
    $('#drop2').addClass('active');
}

function enableNextBtnFunc() {
    enableNextBtn();
    fnDesiableNext(false);
    gCompPageArr.push("M1L0T1P68");
}


function fnOnAudioComplete() {

    if (gAudioId == "startAudio") {

    } else {
        if (allCorrect) {
            $('.boxInst').show();
            fnAudioFinishItemComp();
            audplayer.pause();
            audplayer.currentTime = 0;

        } else {
            $('.dragRegion').css({ "pointer-events": "all" });
        }
        if (step3 == 1) {
            $('.line1').show();
            $('.arrow1').show();
        }


    }



}



function bindDragClickable() {

    $('.dragRegion .drag').off().on('click', function() {


        //console.log($(this).attr('dropid')+":::::"+$('.drop.active').attr('dropid'));
        if ($(this).attr('dropid') == $('.drop.active').attr('dropid')) {

            console.log($(this).attr('dropid') + ":::::" + $('.drop.active').attr('dropid'));

            if ($(this).attr('dropid') == "2") {

                var che = $('.dragRegion .drag')[0];

                $($('.dragRegion .drag')[1]).insertBefore(che);

                $("<div class='drag' dropid='8'><div class='dragImage'><img src='pages/images/Topic01/T01P68/T01P68_02.png' alt='' /></div><div class='dragText'><span>Check the blood sugar 15 to 30 minutes after bolus is completed.</span></div></div>").insertAfter(che);

                //$('div[dropid="8"]').hide();
                $("<div class='drag' dropid='99'><div class='dragImage'><img src='pages/images/Topic01/T01P70/T01P68_04.png' alt='' /></div><div class='dragText'><span>Increase IV fluid rate to 120 mL/kg/day.</span></div></div>").insertAfter(che);
                bindDragClickable();


            }

            if ($(this).attr('dropid') == "3") {
                $($('.dragRegion .drag')[1]).after("<div class='drag' dropid='4'><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_01.png' alt='' /></div><div class='dragText'><span>Repeat 2 mL/kg D<sub>10</sub>W over 1 mL per minute.</span></div></div>");
                bindDragClickable();
                $('#idText1').hide().html('That is correct. Use your good judgment to check the glucose at an interval that reflects the prior blood glucose value. For example, if the blood sugar is 30 mg/dL (1.7 mmol/L) or less and you give a glucose bolus, check the blood sugar 15 to 30 minutes after the bolus is completed. ').fadeIn();


                step3 = 1;
                //$('.dragRegion').css({ "pointer-events": "none" });
                $('.dragRegion').css({ "pointer-events": "" });
                $("#idText1").hide();


            }

            if ($(this).attr('dropid') == "4") {
                $('#idText2').hide().css("opacity", "0");
                $('#drop4 .boxText').hide();

                $($('.dragRegion .drag')[1]).after("<div class='drag' dropid='5'><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_02.png' alt='' /></div><div class='dragText'><span>Check the blood sugar 15 to 30 minutes after bolus is completed.</span></div></div>");

                bindDragClickable();



            }

            if ($(this).attr('dropid') == "5") {

                $($('.dragRegion .drag')[1]).attr("dropid", "6");

                $($('.dragRegion .drag')[1]).after("<div class='drag' dropid='7'><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_01.png' alt='' /></div><div class='dragText'><span>Repeat 2 mL/kg D<sub>10</sub>W over 1 mL per minute.</span></div></div>");

                bindDragClickable();
                // $('#idText1').hide().html('That is correct. What additional IV support should you consider?').fadeIn();

            }

            if ($(this).attr('dropid') == "6") {

                $($('.dragRegion .drag')[0]).before("<div class='drag' dropid='99'><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_02.png' alt='' /></div><div class='dragText'><span>Check the blood sugar 15 to 30 minutes after bolus is completed.</span></div></div>");

                $("<div class='line2'><img src='pages/images/Topic01/T01P69/Path 178.png' alt='' /></div>").prependTo($(".dropRegion"));

                $("<div class='arrow2'><img src='pages/images/Topic01/T01P69/right-arrow.png' alt='' /></div>").prependTo($(".dropRegion"));

                bindDragClickable();

            }

            if ($(this).attr('dropid') == "7") {


                $('#drop7 .boxText').hide();
                $('div[dropid="99"]').remove();
                $($('.dragRegion .drag')[0]).after("<div class='drag' dropid='99'><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_03.png' alt='' /></div><div class='dragText'><span>Increase IV fluid rate to 100 mL/kg/day. (Optional)</span></div></div>");
                $('div[dropid="8"]').show();
                //$('div[dropid="99"]').remove();
                $($('.dragRegion .drag')[1]).after("<div class='drag' dropid='99'><div class='dragImage'><img src='pages/images/Topic01/T01P68/T01P68_01.png' alt='' /></div><div class='dragText'><span>Give 2 mL/kg D<sub>10</sub>W&nbsp;over 1 mL per minute.</span></div></div>");
                bindDragClickable();

            }

            if ($(this).attr('dropid') == "8") {
                $('div[dropid="99"]').remove();
                $($('.dragRegion .drag')[0]).before("<div class='drag' dropid=''><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_01.png' alt='' /></div><div class='dragText'><span>Repeat 2 mL/kg D<sub>10</sub>W over 1 mL per minute.</span></div></div>");

                //$($('.dragRegion .drag')[0]).before("<div class='drag' dropid='9'><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_02.png' alt='' /></div><div class='dragText'><span>Check blood sugar 15 to 30 minutes after bolus is completed.</span></div></div>");
                $($('.dragRegion .drag')[0]).before("<div class='drag' dropid='9'><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_04.png' alt='' /></div><div class='dragText'><span>Increase dextrose concentration to D<sub>12.5</sub>W (or higher), or increase IV fluid rate to 100&ndash;120 mL/kg/day.</span></div></div>");
                $($('.dragRegion .drag')[1]).after("<div class='drag' dropid='99'><div class='dragImage'><img src='pages/images/Topic01/T01P70/T01P68_3.png' alt='' /></div><div class='dragText'><span>Increase IV fluid rate to 100 mL/kg/day. (Optional).</span></div></div>");




                bindDragClickable();

            }

            if ($(this).attr('dropid') == "9") {

                $('#idText1').hide().css("opacity", "0");
                $("#transcripttext").html("");





                //$($('.dragRegion .drag')[0]).before("<div class='drag' dropid=''><div class='dragImage'><img src='pages/images/Topic01/T01P69/T01P69_01.png' alt='' /></div><div class='dragText'><span>Repeat 2 mL/kg D<sub>10</sub>W over 1 mL per minute.</span></div></div>");



                bindDragClickable();

            }

            var $cloneDrag = $(this).clone();

            // $cloneDrag.appendTo('#section0').css({

            // 	'position': 'absolute',

            // 	'top': $(this).position().top,

            // 	'left': $(this).position().left,

            // //	'display':'block'

            // }).animate({

            // 	'top': $('.drop.active').position().top,

            // 	'left': $('.drop.active').position().left,

            // }, 2000, function () {

            $cloneDrag.css({

                'top': 0,

                'left': 0,

                'position': 'relative'

            }).appendTo($('.drop.active'));

            $droppedDiv = $('.drop.active');

            $('.drag').removeClass('incorrect');

            $droppedDiv.removeClass('active').addClass('dropped');

            $('.drop.dropped').length != 9 ? $('.drop').eq($droppedDiv.index() + 1).addClass('active') : '';

            //})

            $(this).hide();

            if ($('.drop.dropped').length == 9) {

                $('.drag').addClass("disabled").off();

                setTimeout(function() {

                    allCorrect = 1;

                    $('.overlay').fadeIn();

                    $('.drag').off();

                    $('#idPatchMainRajnik,#section0').addClass('blur');

                    fnPlaySectionAudio(0);

                    enableNextBtnFunc();


                }, 3000);

            } else if ($('.drop.dropped').length == 3) {
                fnPlaySectionAudio(2);
            } else if ($('.drop.dropped').length == 5) {
                fnPlaySectionAudio(3);
                $('#idText1').html('That is correct. What additional IV support should you consider?<br><i style="color: #4D667B;">Select the correct step to continue.</i>');
                //$('.dragRegion').css({ "pointer-events": "none" });
                $('.dragRegion').css({ "pointer-events": "" });

            } else if ($('.drop.dropped').length == 6) {
                fnPlaySectionAudio(4);
                $('#idText1').html('That’s correct. At this point, the repeat blood sugar check <b>is still less than</b> 50 mg/dL (2.8 mmol/L). What should you do?<br><i style="color: #4D667B;">Select the correct step to continue.</i>');
                //$('.dragRegion').css({ "pointer-events": "none" });
                $('.dragRegion').css({ "pointer-events": "" });
            } else if ($('.drop.dropped').length == 8) {
                fnPlaySectionAudio(3);
                $('#idText1').html('That is correct. At this point, what additional IV support should you consider? <br><i style="color: #4D667B;">Select the next step to continue.</i>');
                //$('.dragRegion').css({ "pointer-events": "none" });
                $('.dragRegion').css({ "pointer-events": "" });


            } else {
                fnPlaySectionAudio(3);
                $('#idText1').html('That is correct. <br/><i style="color: #4D667B;">Select the next step to continue.</i>');
                //$('.dragRegion').css({ "pointer-events": "none" });
                $('.dragRegion').css({ "pointer-events": "" });

            }

        } else {
            $('#idText2').hide().css("opacity", "0");
            $(this).addClass('incorrect');
            $('#idText1').html('<br/><i style="color: #4D667B;">Please select another option.</i>');

            fnPlaySectionAudio(1);

            //$('.dragRegion').css({ "pointer-events": "none" });
            $('.dragRegion').css({ "pointer-events": "" });

            //bindDragClickable();

        }

    });

}

// var audplayer = document.getElementById('audioplayer');