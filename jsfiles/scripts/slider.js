/********************************************/

//*Slider functionality using masterTimeline**//

//*Generated timline object to work for slider**//

/********************************************/

//Generate masterTimeline

var playerWidth, nMargin, mouseClick, sliderComplete, totalSliderWid, FinalUIVAL;

//var isslideReached=false;
var nextButtonUnlocked = false;

function fnOnAudioComplete() { }


function generateTimeLine() {

    var prevTime = 0;

    var curTime = 0;

    nextButtonUnlocked = false;
    var diff = 0;

    $("#slider").slider({

        disabled: false

    }).draggable('enable');

    $(".ui-slider ,.ui-slider-handle").css("cursor", "pointer");

    var curTime = 0;

    //to reset slider

    TweenMax.killAll();

    resetSlider();



    masterTimeline = new TimelineMax({

        paused: true,

        onUpdate: updateSlider,

        onComplete: function () {

            try {

                /*This function need to define in all pages for Audio/slider Completion*/

                fnOnAudioComplete();

            } catch (e) { }

            if (currentAudioObj != 0) {

                onTimelineEnd();

            }

        }

    })



    masterTimeline.clear();


    //updateContentArray.push(  {time:"3", carry:"", event:"", show:"", hide:""});
    $.each(updateContentArray, function (key, currenrCue) {

        curTime = (parseFloat(currenrCue.time)).toFixed(2);

        diff = curTime - parseFloat(prevTime);

        prevTime = curTime;

        if (diff > 0) {
            masterTimeline.to($(''), 0, { delay: diff });
        }





        if (updateContentArray[key].transcript != "" && updateContentArray[key].transcript != undefined) {

            masterTimeline.to($("#transcripttext"), 0, {

                text: updateContentArray[key].transcript

            }, curTime);

        }

        if (updateContentArray[key].hide != "" && updateContentArray[key].hide != undefined) {

            var hideStr = $("" + updateContentArray[key].hide + "");

            masterTimeline.to(hideStr, 0.2, { autoAlpha: 0 }, curTime);

        }



        if (updateContentArray[key].show != "" && updateContentArray[key].show != undefined) {

            var showStr = $("" + updateContentArray[key].show + "");

            masterTimeline.to(showStr, 0.2, { autoAlpha: 1 }, curTime);

        }

        if (updateContentArray[key].event != "" && updateContentArray[key].event != undefined) {

            funArray = updateContentArray[key].event.split("),");

            $.each(funArray, function (key, val) {

                var parameters = "";

                if (val.indexOf(")") == -1) {

                    parameters = val.substring((val.indexOf("(") + 1), (val.length));

                } else {

                    parameters = val.substring((val.indexOf("(") + 1), (val.length - 1));

                }

                var functionName = val.substr(0, val.indexOf("("));

                masterTimeline.call(eval(functionName), parameters.split(","), curTime);

            })

        }

        if (updateContentArray[key].addClass != "" && updateContentArray[key].addClass != undefined) {

            $.each(currenrCue.addClass, function (key, classTarget) {

                var target = $("" + classTarget.target + "");

                var className = "+=" + classTarget.className;

                masterTimeline.set(target, { className: className });

            });

        }

        if (updateContentArray[key].removeClass != "" && updateContentArray[key].removeClass != undefined) {

            $.each(currenrCue.removeClass, function (key, classTarget) {

                if (classTarget.className == "") {

                    var target = $("" + classTarget.target + "");

                    masterTimeline.set(target, { className: "" });

                } else {

                    var target = $("" + classTarget.target + "");

                    var className = "-=" + classTarget.className;

                    masterTimeline.set(target, { className: className });

                }

            });

        }



        if (updateContentArray[key].removeClass == "" && updateContentArray[key].removeClass != undefined) {



            $.each(currenrCue.removeClass, function (key, classTarget) {

                var target = $("" + classTarget.target + "");

                var className = "-=" + $(target).attr("class");

                masterTimeline.set(target, { className: className });



            });

        }

        if (currenrCue.animation != "" && currenrCue.animation != undefined) {

            var animationCount = 0;

            var activityduration = 0;

            $.each(currenrCue.animation, function (key, animationObj) {

                var target = $("" + animationObj.target + "");

                var activity = animationObj.activity;

                var insertpos = masterTimeline.duration();

                activityduration = (parseFloat(activityduration) + parseFloat(animationObj.duration));



                animationCount = (animationCount + 1);

                if (animationCount > 1) {

                    masterTimeline.to(target, animationObj.duration, { css: activity }, curTime);

                } else {

                    masterTimeline.to(target, animationObj.duration, { css: activity }, curTime);

                    /*below line is used to play animation one by one in case of multimuple animation at same time*/

                    /*masterTimeline.to(target, animationObj.duration, {css:activity},(curTime+activityduration));*/

                }

            });

        }

    });

    // setTimeout(function(){
    //  masterTimeline.to($("#spnTopicTitleTxt"), 2, {css: {'opacity':'1','display':'block'}}, audioObjRef.duration);   
    // },2000)
    // masterTimeline.to($("#spnTopicTitleTxt"), 2, {css: {'opacity':'1','display':'block'}}, audioObjRef.duration);
    //  $("#slider").trigger("click");

}

function fnVolumeControl(){

    var palyerVol = document.getElementById("audioplayer");
  
    $("#slidervertical").slider({
        orientation: "vertical",         
        animate: "slow",
        min:0,     
        range: "min",
        value:100,
      
       // default value of slider
        // start:function(event,ui){
        //     ui.value=palyerVol.volume;
        //      console.log('Value 1:'+  ui.value);
        // }  ,  
        slide : function(e, ui){
           
            var value = ui.value / 100;
            console.log('Value 2:'+value)     ;
            document.getElementById("audioplayer").volume = value.toFixed(2);          
            if(  ui.value<5){        
                $("#clsAudioOnBtn").css("display", "none");
                $("#clsAudioOffBtn").css("display", "inline");
                audioObjRef.muted = true;
            }
            else{
                audioObjRef.muted = false;
                $("#clsAudioOffBtn").css("display", "none");
            $("#clsAudioOnBtn").css("display", "inline");
            }
        },
        stop: function (event, ui) {

            // $("#slidervertical").slider("destroy");

            //audioObjRef = document.getElementById("audioplayer");

      

            try {

            

            } catch (e) { }





        }

    }).draggable(); /*Added to solve touch and drag slider issue on touch devices.Use library jquery-ui-touch-punch.js*/

}

function fnProgressBar() {

    //console.log("fnProgressBar")





    $("#slider").slider({

        range: "min",

        start: function (event, ui) {

            audioObjRef.pause();

            masterTimeline.pause();

        },

        slide: function (event, ui) {

            //console.log(event);

            //if()

            //$("#TabImage1").addClass("clsVisited");

            $(".startingCnt #TabImage1 .clsTick").removeClass("end");

            $(".startingCnt #TabImage5 .clsTick").removeClass("end");



            /*if(isslideReached){

            	//$(document).unbind();

            }*/



            //if(!isslideReached){

            var progress = $('#id_sliderContainer');
            console.log(progress.offset().left)
            mouseClick = event.pageX - progress.offset().left;

            // sliderComplete = mouseClick - ($("#id_sliderContainer").position().left);
           
            FinalUIVAL =  (100 * mouseClick) / document.getElementById("id_sliderContainer").getBoundingClientRect().width;

           // FinalUIVAL = ((sliderComplete / totalSliderWid) * 100);

            masterTimeline.pause();

            var currTime = ((FinalUIVAL * masterTimeline.duration()) / 100).toFixed(2);


            audioObjRef.currentTime = currTime;      

            currentAudioObj = 1;

            bAudioPlaying = true;

            try {

                if (FinalUIVAL <= 0) {

                    FinalUIVAL = 0;

                }

            } catch (e) { }



            masterTimeline.progress(((FinalUIVAL) / 100));

            masterTimeline.play();





            //	console.log("page -x -"+event.pageX );

            $('#clsPlayPauseBtn').removeClass("clsPlayDisable clsPlay").addClass("clsPause");

            // Below line is added to solve the play/pause status update issue while sliding to and fro

            fnEnablePlay();



            try {

                if (FinalUIVAL >= 100) {

                    onTimelineEnd();



                }

            } catch (e) { }



            //}

        },

        stop: function (event, ui) {

            //console.log("slide stop");

            audioObjRef = document.getElementById("audioplayer");

            //console.log("audio source"+audioObjRef);

            try {

                /*audioPlayer.duration  to masterTimeline.duration()*/

                var currTime = (((FinalUIVAL * masterTimeline.duration()) / 100).toFixed(2));

                audioObjRef.currentTime = currTime;

                //console.log(currTime)

                currentAudioObj = 0;



                /*Function to seek the masterTimeline to specific time*/

                masterTimeline.seek(currTime);

                //To check if play button is enable or not

                if ($("#clsPlayPauseBtn").hasClass("clsPlay")) {

                    audioObjRef.pause();

                    masterTimeline.pause();

                } else if ($("#clsPlayPauseBtn").hasClass("clsPlayDisable")) {

                    //function call if slider drag at end and clickable not working.



                    //chella commented this

                    //audioObjRef.setAttribute('src', _currAudioPlayingPath + '.mp3');

                    //audioObjRef.setAttribute('type', 'audio/mpeg');

                } else {

                    audioObjRef.play();

                    masterTimeline.play();

                }

                if (FinalUIVAL >= 100) {

                    onTimelineEnd();

                    //fnOnAudioComplete();/*This function need to define in all pages for Audio/slider Completion*/

                }

            } catch (e) { }





        }

    }).draggable(); /*Added to solve touch and drag slider issue on touch devices.Use library jquery-ui-touch-punch.js*/

}



function fnEnableGlobalSlider() {

    $("#slider").slider({

        disabled: false

    }).draggable("enable");

    $(".ui-slider ,.ui-slider-handle").css("cursor", "pointer");

}



function fnDisableGlobalSlider() {

    $("#slider").slider({

        disabled: false

    }).draggable("enable");

    $(".ui-slider ,.ui-slider-handle").css("cursor", "default");

}


function getCurPageIDVal() {
    return gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID")
}

function updateCurrenPageIdVal(aCurId) {

    //if (aCurId != "M1L0T1P0") {
    gCompPageArr.push(aCurId);
    // }
}


//function gets called on masterTimeline update function

function updateSlider() {



    //	console.log("updated");

    $("#id_sliderContainer").css("opacity", "1");

    currentAudioObj = 1;



    var perDone = Math.round((masterTimeline.progress()) * 100);

    var curtim = ((perDone * masterTimeline.duration()) / 100);

    var _getCurrentPageID = getCurPageIDVal();


    if (currentPageType) {

        if (audioObjRef.currentTime > 0 && currentPageType != "lockedPage") {
            if (!nextButtonUnlocked) {
                enableNextBtn();
                fnDesiableNext(false);
                updateCurrenPageIdVal(_getCurrentPageID);
                nextButtonUnlocked = true;
            }
        }
    } else {
        enableNextBtn();
        fnDesiableNext(false);
        if (!nextButtonUnlocked) {
            updateCurrenPageIdVal(_getCurrentPageID);
        }
        nextButtonUnlocked = true;
    }

    /*Added to solve Audio repeat issue on Mac safari*/

    var Audiocompleted = false;

    if (audioObjRef != "" && curtim > audioObjRef.duration && audioObjRef.currentTime > 0) {

        Audiocompleted = true;

    }

    if (!isAudioPlaying) {

        if (masterTimeline.duration() > 0)

            $("#slider").slider("value", perDone);

    } else {

        isAudioPlaying = true;

    }

    /*Added on 23 April 2015 :- To solve the audio pause issue*/

    if (!Audiocompleted) {

        if (audioObjRef.paused && audioObjRef.currentTime > 0) {

            audioObjRef.currentTime = curtim;

            audioObjRef.play();

            masterTimeline.play();

        }

    }

}



function onTimelineEnd() {

    audioObjRef.pause(); /* ------Added to solve repeat issue on Mac safari------------------ */

    masterTimeline.seek(audioObjRef.duration);

    fnDisablePlay();





    if (true) {

        $("#id_sliderContainer").css("opacity", "1");

        currentAudioObj = 0;



        /*$("#clsReplay").css({"opacity":"1","z-index":"1"});

        $('#clsReplay').css('display', 'block');

        $("#clsPlayPauseBtn").css("opacity","0");

        $(".ui-slider-range").css("width","100%");

        $(".ui-slider-handle").css("left","100%");*/

    } else {

        //console.log("repeats");

        audioObjRef.src = "";

        masterTimeline.play();

        // $("#id_sliderContainer").css("opacity", "0.4");

        $("#ctrl_slider a").css("cursor", "default")

        isAudioPlaying = false;

        $("#playPauseID").removeClass().addClass("PLAYPAUSEDISABLEDCLSS");

        $("#slider").slider({

            disabled: true

        }).draggable({ disabled: true }).unbind("mousemove");

        // $("#slider").slider({

        //     disabled: false

        // }).draggable("enable");



        if (FinalUIVAL > 94) {

            //$("#slider").on( "slidestop", function( event, ui ) {

            //$("#slider").unbind("").slider({disabled: true}).draggable({disabled:true});

            //$("#slider").find("a").attr("left","100%");

            //$("#slider").find("div").removeClass("ui-slider-range");

            //console.log("hureeee");





            //} );

            //isslideReached=true;

        }



        $("#slider").slider({ disabled: true });

        // $("#slider").slider({disabled:false});



        $(".ui-slider ,.ui-slider-handle").css("cursor", "default");

        $("#playPauseID").off("click");

        $("#slider").slider("value", "100");

        TweenMax.killAll();

        /*$("#clsReplay").css({"opacity":"1","z-index":"1"});

        $('#clsReplay').css('display', 'block');

        $("#clsPlayPauseBtn").css("opacity","0");*/

        setPlayPauseButtonState("TRUE");





    }

    /*if(isslideReached){

		$("#slider").slider("value", "100").slider({disabled:true});

		$("#playPauseID").off("click").css("pointer-events","none");

        TweenMax.killAll();

		audioObjRef.src = "";

		console.log("fsgdf");

	}*/

}



function resetSlider() {

    $("#slider").slider("value", "0");

    TweenMax.killAll();

}



function matchAudioTimeWithTimeline() {

    if (!isNaN(audioObjRef.duration)) {

        masterTimeline._totalDuration = audioObjRef.duration;

        masterTimeline._duration = audioObjRef.duration;
        var adjustedTime = audioObjRef.duration - 1;

        masterTimeline.to($("#spnTopicTitleTxt"), 1, { css: { 'opacity': '1', 'display': 'block' } }, adjustedTime);

    } else {

        setTimeout(function () {

            matchAudioTimeWithTimeline()

        }, 1000);

    }

}