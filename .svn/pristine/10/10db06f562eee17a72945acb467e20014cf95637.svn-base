		manifest = [{ src: 'pages/images/Topic01/T01P79/T01P79_01.png', id: '1' },

		    { src: 'pages/images/Topic01/T01P79/T01P79_01_01.png', id: '2' },

		    { src: 'pages/images/Topic01/T01P79/T01P79_02_01.png', id: '3' },

		    { src: 'pages/images/Topic01/T01P79/T01P79_02.png', id: '4' },

		    { src: 'pages/images/Topic01/T01P79/T01P79_03.png', id: '5' },

		    { src: 'pages/images/Topic01/T01P79/T01P79_03_01.png', id: '6' }

		];

		var audioPath = "pages/audio/Topic01/T01P79/T01P79";

		//var gItemAudioPath=["pages/audio/Topic01/T01P17/T01P17"

		//];



		var currCue = 0;

		var idd = 0;



		var updateContentArray = [

		    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "When a UAC is in use, monitor the skin closely for signs of arterial spasm or emboli. Signs of vascular compromise include white, blue, or black discoloration of the skin on the back, abdomen, buttocks, groin, legs, feet, or toes. If a peripheral arterial line is in the radial or ulnar artery, then closely monitor the hand and fingers for any signs of vascular compromise. Click on the links below for more information about safe use of umbilical catheters." },

		    { time: "1", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsSubImage0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "4", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsSubImage1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "7", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsSubImage2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "11", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsSubImage3", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "14", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsSubImage4", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "18", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsSubImage5", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "22", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: "#clsSubImage6", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    //{ time: "28", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".small_expand", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
		    { time: "26", carry: "", event: "", show: "#_clickImg0pdf", hide: "", transcript: "", animation: [{ target: "#_clickImg0pdf", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
		    { time: "26", carry: "", event: "", show: ".pdfIcon0", hide: "", transcript: "", animation: [{ target: ".pdfIcon0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    // { time: "28", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".small_expand", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
		    { time: "26", carry: "", event: "", show: "#_clickImg0pdf1", hide: "", transcript: "", animation: [{ target: "#_clickImg0pdf1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
		    { time: "26", carry: "", event: "", show: ".pdfIcon1", hide: "", transcript: "", animation: [{ target: ".pdfIcon1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    // { time: "28", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".small_expand", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
		    { time: "26", carry: "", event: "", show: "#_clickImg0pdf2", hide: "", transcript: "", animation: [{ target: "#_clickImg0pdf2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
		    { time: "26", carry: "", event: "", show: ".pdfIcon2", hide: "", transcript: "", animation: [{ target: ".pdfIcon2", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] }

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





		    var n = isInArray("M1L0T1P79", gCompPageArr);

		    console.log(n);

		    if (n == true) {

		        enableNextBtn();

		        // fnGlowNextBtn();

		        fnDesiableNext(false);

		    }

		    $('#pageClsResourcesPopup').hide();

		    $(document).on("click", '._clickLink', function() {



		        var num = $(this).attr('id').slice(10)



		        // console.log(referenceArr);



		        $(this).addClass("_viewed");



		        //$('.pdflink').attr('src', referenceArr[num])



		        $("#pageid_RefTitleBar").hide();



		        $("#pageRefTitleBar_id").show();



		    });
		    $("#id_glosCloseBtn").click(function() {
		        enabledAllButtons();
		        fnPlayAudio();
		        $("#pageClsResourcesPopup").hide();
		    });

		    $("#_clickImg0pdf").on("click", function() {

		        fnPauseAudio();


		        disabledAllButtons();
		        $(".pdflink").hide();
		        $("#p82_1").show();
		        //  $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/uvc_uac.pdf');

		        $('#pageReftitleText_id').html('What complications should I watch for when a UAC is in place?');

		        $("#pageClsResourcesPopup").show();
		        $("#p82_1").show();


		    });

		    $("#_clickImg0pdf1").on("click", function() {
		        fnPauseAudio();
		        disabledAllButtons();
		        $(".pdflink").hide();

		        $("#p82_2").show();
		        //  $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/uvc_uac_insertion.pdf');

		        $('#pageReftitleText_id').html('Umbilical catheter insertion');

		        $("#pageClsResourcesPopup").show();
		        $("#p82_2").show();


		    });

		    $("#_clickImg0pdf2").on("click", function() {
		        fnPauseAudio();
		        disabledAllButtons();

		        $(".pdflink").hide();

		        $("#p82_3").show();

		        //  $('#pageClsResourcesPopup .pdflink').attr('src', 'pages/Topic01/pdf/how_fast_should_i_withdraw_blood_from_a_high-positioned_UAC_and_how_fast_should_i_return_blood_and_flush.pdf');

		        $('#pageReftitleText_id').html('How fast should I withdraw blood from a high-positioned UAC and how fast should I return blood and flush?');

		        $("#pageClsResourcesPopup").show();
		        $("#p82_3").show();



		    });

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



		});



		$(".closepopup").on("click", function() {

		    // audioReset();

		    var __aIndex = $(this).attr("id").slice(8);

		    $(".modal").removeAttr("style");

		    $(".mainContainer").removeClass("blur");



		});

		$(".closepopup1").on("click", function() {

		    // audioReset();

		    var __aIndex = $(this).attr("id").slice(8);



		    console.log(__aIndex);

		    $(".modal").removeAttr("style");

		    $(".mainContainer").removeClass("blur");

		});

		function fnOnAudioComplete() {

		    if (gAudioId == "startAudio") {

		        enableNextBtn();

		        fnAudioFinishItemComp();

		        $('.boxInst').show();
		        $('.small_expand').css('display', 'block').css('opacity', '1');

		        gCompPageArr.push("M1L0T1P79");

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