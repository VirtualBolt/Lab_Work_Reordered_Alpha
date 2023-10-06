		manifest = [{ src: 'pages/images/common/small_expand.png', id: '1' }

		];

		var audioPath = "pages/audio/Topic01/T01P81/T01P81";

		//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

		//];



		var currCue = 0;

		var idd = 0;



		var updateContentArray = [

		    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "The gold standard for measuring the level of glucose in the bloodstream is the plasma glucose value. However, this measurement requires a sample of whole blood to be obtained and processed by the laboratory. The accuracy of plasma glucose levels depends on timely laboratory processing to prevent red blood cells from further metabolizing glucose, which could result in falsely low glucose values. Glucose levels may decline as much as 15 to 20 mg/dL, or 0.8�1.1 mmol/L, per hour when the blood sample stands at room temperature." }

		];



		function fnAudioFinishItemComp() {

		    fnAudioFinishPageComp();

		    fnUpdatePageCompletionCounter(0);

		    //fnUpdatePageCompletionCounter(7);

		}

		var __dataXml;

		var __clickCount = 0;



		$(document).ready(function() {

		    $('#clsMnuBtn, #clsReplay, #clsBackBtn, #ToolBtn').css({ "pointer-events": "all" });

		    disableNextBtn();

		    var ele = document.getElementsByTagName('div');

		    for (var i = 0; i < ele.length; i++) {

		        ele[i].setAttribute("unselectable", "on");

		    }





		    var n = isInArray("M1L0T1P82_1", gCompPageArr);

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

		    $(".modalTxtImg").hide();



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



		    $(".modal").removeAttr("style");

		    $(".sectionTop").removeClass("blur");

		    $(".sectionContent").removeClass("blur");

		});

		function fnOnAudioComplete() {

		    if (gAudioId == "startAudio") {

		        enableNextBtn();

		        fnAudioFinishItemComp();

		        $('.boxInst').css('display', 'block');

		        gCompPageArr.push("M1L0T1P82_1");

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