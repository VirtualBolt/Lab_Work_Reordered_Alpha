		manifest = [{ src: 'pages/images/Topic01/T01P55/small_expand.png', id: '1' }

		];

		var audioPath = "pages/audio/Topic01/T01P55/T01P55";

		//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

		//];



		var currCue = 0;

		var idd = 0;



		var updateContentArray = [

		    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "To calculate the IV rate, first multiply the weight in kilograms by 80. Then, divide that value by 24 to get the milliliters per hour to run the IV via an infusion pump. Mathematically, this is written as kilograms multiplied by 80, divided by 24." },

		    { time: "8", carry: "", event: "", show: "", hide: "", transcript: "To calculate the IV rate, first multiply the weight in kilograms by 80. Then, divide that value by 24 to get the milliliters per hour to run the IV via an infusion pump. Mathematically, this is written as kilograms multiplied by 80, divided by 24." },

		    {
		        time: "3",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{
		            target: ".ClsImage0",
		            duration: "0.5",
		            activity: {
		                'display': 'block',
		                "-webkit-animation": "zoomin 0.5s ease-in",
		                "animation": "zoomin 0.5s ease-in"
		            }
		        }]
		    },

		    {
		        time: "7",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{
		            target: ".ClsImage_01",
		            duration: "0.5",
		            activity: { 'display': 'block', "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" }
		        }]
		    },

		    {
		        time: "14",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{
		            target: ".cls_2",
		            duration: "0.5",
		            activity: { 'display': 'block', "width": "131px" }
		        }]
		    },

		    {
		        time: "14",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{
		            target: ".cls_3",
		            duration: "0.5",
		            activity: { 'display': 'block', "width": "131px" }
		        }]
		    },

		    {
		        time: "14.5",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{
		            target: ".ClsImage1",
		            duration: "0.5",
		            activity: { 'display': 'block', "width": "307" }
		        }]
		    },

		    {
		        time: "14.7",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{
		            target: "#para_0",
		            duration: "0.5",
		            activity: { 'display': 'block', "width": "307" }
		        }]
		    }

		];

		function fnAudioFinishItemComp() {

		    fnAudioFinishPageComp();

		    fnUpdatePageCompletionCounter(0);

		    //fnUpdatePageCompletionCounter(7);

		}

		var __dataXml;

		var __clickCount = 0;

		var aud = document.getElementById("audioplayer");

		$(document).ready(function() {

		    disableNextBtn();

		    var ele = document.getElementsByTagName('div');

		    for (var i = 0; i < ele.length; i++) {

		        ele[i].setAttribute("unselectable", "on");

		    }





		    var n = isInArray("M1L0T1P55", gCompPageArr);

		    console.log(n);

		    if (n == true) {

		        enableNextBtn();

		        // fnGlowNextBtn();

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





		    $(".CaseStudy").removeAttr("style");

		    $(".sectionTop").removeClass("blur");

		    $(".sectionContent").removeClass("blur");

		});

		function fnOnAudioComplete() {

		    if (gAudioId == "startAudio") {

		        enableNextBtn();

		        fnAudioFinishItemComp();

		        $('.boxInst').css('display', 'block');

		        gCompPageArr.push("M1L0T1P55");

		        aud.pause();

		        aud.currentTime = 0;

		    } else {

		        $("#idTick0" + selectedIndex).css({ "opacity": "1" });

		        $("#clsTabTxt" + selectedIndex).css({ 'color': '#80848b' });

		        $(".ClsTab").removeClass("clsDisable");

		        $("#TabImage" + selectedIndex).addClass("clsDisable");

		        fnCompletion();

		        if ($(".clsVisited").length === 2) {



		        }

		    }

		}