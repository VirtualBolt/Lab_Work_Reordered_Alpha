		manifest = [{ src: 'pages/images/Topic01/T01P78/T01P78_01.png', id: '1' },

		    { src: 'pages/images/Topic01/T01P78/T01P78_01_01.png', id: '2' },

		    { src: 'pages/images/Topic01/T01P78/T01P78_02_01.png', id: '3' },

		    { src: 'pages/images/Topic01/T01P78/T01P78_02.png', id: '4' },

		    { src: 'pages/images/Topic01/T01P78/T01P78_03.png', id: '5' },

		    { src: 'pages/images/Topic01/T01P78/T01P78_03_01.png', id: '6' }

		];

		var audioPath = "pages/audio/Topic01/T01P78/T01P78";



		var currCue = 0;

		var idd = 0;



		var updateContentArray = [

		    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Once an umbilical catheter has been placed, closely monitor the catheter for inadvertent migration. To do this, check the centimeter marking at the umbilical cord and compare this number with prior inspections of the catheter location. Maintain an airtight system and do not allow air bubbles to infuse into the baby. Accidental disconnection of the catheter can cause rapid blood loss, so double-check that all tubing connections are secure." },

		    { time: "8", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".ClsImage0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "14", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".ClsImage1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "20", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".ClsImage2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }
		    //{ time: "26", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".small_expand", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }

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





		    var n = isInArray("M1L0T1P78", gCompPageArr);

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





		    $(".modalTxtImg").hide();



		    var i = $(this).attr("id").slice(8);

		    $("#case_study_popup" + i).show();

		    $("#imgPopup" + i).show();

		    $(".mainContainer").addClass("blur");

		    $(".boxInst").addClass("blur");



		});



		$(".closepopup").on("click", function() {

		    // audioReset();

		    var __aIndex = $(this).attr("id").slice(8);

		    $(".modal").removeAttr("style");

		    $(".mainContainer").removeClass("blur");
		    $(".boxInst").removeClass("blur");



		});

		$(".closepopup1").on("click", function() {

		    // audioReset();

		    var __aIndex = $(this).attr("id").slice(8);



		    console.log(__aIndex);

		    $(".modal").removeAttr("style");

		    $(".mainContainer").removeClass("blur");
		    $(".boxInst").removeClass("blur");

		});

		function fnOnAudioComplete() {

		    if (gAudioId == "startAudio") {

		        enableNextBtn();

		        fnAudioFinishItemComp();

		        $('.boxInst').show();

		        $(".small_expand").show().css("opacity", "1");

		        gCompPageArr.push("M1L0T1P78");

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