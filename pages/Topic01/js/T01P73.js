		manifest = [{ src: 'pages/images/Topic01/T01P73/T01P73_01.png', id: '1' }

		];

		var audioPath = "pages/audio/Topic01/T01P73/T01P73";

		//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

		//];



		var currCue = 0;

		var idd = 0;



		var updateContentArray = [

		    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "At times it may be necessary to place an umbilical catheter. The umbilical cord has two arteries and one vein. The umbilical vein catheter is abbreviated UVC. The umbilical artery catheter is abbreviated UAC." },

		    {
		        time: "5",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [
		            // {target:".cls_3circle",duration:"0.5",activity:{'display':'block',}},
		            { target: ".cls_4circle", duration: ".6", activity: { 'display': 'block' } },
		            { target: ".cls_4circle1", duration: ".6", activity: { 'display': 'block' } },
		        ]
		    },
		    {
		        time: "7",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [
		            { target: ".cls_3circle", duration: "0.5", activity: { 'display': 'block', } },

		        ]
		    },

		    /* {time:"4", carry:"", event:"", show:"", hide:"", transcript:"",animation:[{target:".cls_3",duration:"1",activity:{'display':'block',"width":"267px"}}]},
		    {time:"5", carry:"", event:"", show:"", hide:"", transcript:"",animation:[{target:".cls_4",duration:"1",activity:{'display':'block',"width":"345px"}}]},
		    {time:"7", carry:"", event:"", show:"", hide:"", transcript:"",animation:[{target:".cls_1",duration:"0.5",activity:{'display':'block',"width":"290px"}}]},
		    {time:"11", carry:"", event:"", show:"", hide:"", transcript:"",animation:[{target:".cls_2",duration:"0.5",activity:{'display':'block',"width":"310px"}}]},
		    {time:"7.2", carry:"", event:"", show:"", hide:"", transcript:"",animation:[{target:".text1",duration:".6",activity:{'opacity':'1'}}]},
		    {time:"11.2", carry:"", event:"", show:"", hide:"", transcript:"",animation:[{target:".text2",duration:".6",activity:{'opacity':'1'}}]}, */

		    { time: "10", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".cls_3", duration: "1", activity: { 'display': 'block', "width": "267px" } }] },
		    {
		        time: "10",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [
		            { target: ".cls_1", duration: "0.5", activity: { 'display': 'block', "width": "290px" } },
		            { target: ".text1", duration: ".6", activity: { 'opacity': '1' } }
		        ]
		    },

		    { time: "12", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".cls_4", duration: "1", activity: { 'display': 'block', "width": "254px" } }] },
		    { time: "12", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".cls_4_1", duration: "1", activity: { 'display': 'block', "width": "70px" } }] },

		    {
		        time: "12",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [
		            { target: ".cls_2", duration: "0.5", activity: { 'display': 'block', "width": "310px" } },
		            { target: ".text2", duration: "1", activity: { 'opacity': '1' } }
		        ]
		    },
		];



		function fnAudioFinishItemComp() {

		    fnAudioFinishPageComp();

		    fnUpdatePageCompletionCounter(0);

		    //fnUpdatePageCompletionCounter(7);

		}

		var __dataXml;

		var __clickCount = 0;

		var audplayer = document.getElementById('audioplayer');

		$(document).ready(function() {

		    disableNextBtn();

		    var ele = document.getElementsByTagName('div');

		    for (var i = 0; i < ele.length; i++) {

		        ele[i].setAttribute("unselectable", "on");

		    }





		    var n = isInArray("M1L0T1P73", gCompPageArr);

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



		$(".small_expand").on("click", function() {



		    if (!fnPauseAudio()) {

		        console.log(true);

		        fnPauseAudio()

		    } else {

		        playPauseAudio();

		        console.log(false);

		    }

		    $(".ModalTxtImg").hide();



		    var i = $(this).attr("id").slice(8);

		    $("#case_study_popup" + i).show();

		    $("#imgPopup" + i).show();

		    $(".sectionTop").addClass("blur");

		    $(".sectionContent").addClass("blur");

		});



		$(".closepopup").on("click", function() {

		    // audioReset();

		    var __aIndex = $(this).attr("id").slice(8);

		    if (!fnPauseAudio()) {

		        console.log(true);

		        playPauseAudio();

		    }



		    $(".CaseStudy").removeAttr("style");

		    $(".sectionTop").removeClass("blur");

		    $(".sectionContent").removeClass("blur");

		});

		function fnOnAudioComplete() {

		    if (gAudioId == "startAudio") {

		        enableNextBtn();

		        fnAudioFinishItemComp();

		        $('.boxInst').css('display', 'block');

		        gCompPageArr.push("M1L0T1P73");
		        audplayer.pause();
		        audplayer.currentTime = 0;

		    } else {

		        $("#idTick0" + selectedIndex).css({ "opacity": "1" });

		        $("#clsTabTxt" + selectedIndex).css({ 'color': '#80848b' });

		        $(".ClsTab").removeClass("clsDisable");

		        $("#TabImage" + selectedIndex).addClass("clsDisable");

		        fnCompletion();

		        audplayer.pause();
		        audplayer.currentTime = 0;

		    }

		}