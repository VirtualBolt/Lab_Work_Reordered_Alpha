		manifest = [{ src: 'pages/images/Topic01/T01P54/right-arrow.svg', id: '1' }

		];

		var audioPath = "pages/audio/Topic01/T01P54/T01P54";

		//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

		//];



		var currCue = 0;

		var idd = 0;



		var updateContentArray = [

		    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Now that we've discussed signs and symptoms of hypoglycemia and blood sugar monitoring, let's review the initial IV fluid and rate to provide sick infants. Once IV access is established, start dextrose 10% or D10W IV fluid, without electrolytes, at a rate of 80 milliliters per kilogram per day. This rate will provide a glucose infusion rate of 5.5 milligrams per kilogram per minute, which is similar to the liver glycogen breakdown and glucose production rate in healthy term newborns. In the absence of conditions related to hyperinsulinemia, or inadequate glycogen stores, or increased glucose utilization, this glucose infusion rate is usually adequate to maintain the blood sugar within a normal range." },

		    { time: "20", carry: "", event: "", show: "", hide: "", transcript: "Now that we've discussed signs and symptoms of hypoglycemia and blood sugar monitoring, let's review the initial IV fluid and rate to provide sick infants. Once IV access is established, start dextrose 10% or D10W IV fluid, without electrolytes, at a rate of 80 milliliters per kilogram per day. This rate will provide a glucose infusion rate of 5.5 milligrams per kilogram per minute, which is similar to the liver glycogen breakdown and glucose production rate in healthy term newborns. In the absence of conditions related to hyperinsulinemia, or inadequate glycogen stores, or increased glucose utilization, this glucose infusion rate is usually adequate to maintain the blood sugar within a normal range." },

		    {
		        time: "24",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{ target: ".ClsImage0", duration: "0.5", activity: { 'display': 'block' } }]
		    },

		    {
		        time: "35",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{ target: ".ClsImage2", duration: "0.5", activity: { 'display': 'block' } }]
		    },

		    {
		        time: "37",
		        carry: "",
		        event: "",
		        show: "",
		        hide: "",
		        transcript: "",
		        animation: [{ target: ".ClsImage1", duration: "0.5", activity: { 'display': 'block' } }]
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





		    var n = isInArray("M1L0T1P54", gCompPageArr);

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

		        $('.boxInst').show();

		        gCompPageArr.push("M1L0T1P54");

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