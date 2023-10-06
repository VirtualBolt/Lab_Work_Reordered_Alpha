		manifest = [{ src: 'pages/images/Topic01/T01P42/small_expand.png', id: '1' }

		];

		var audioPath = "pages/audio/Topic01/T01P72/T01P72";





		var currCue = 0;

		var idd = 0;



		var updateContentArray = [

		    { time: "0", carry: "", event: "", show: "", hide: "", transcript: "Even though we've focused on infants who are too sick to be fed, we should also discuss the IDM, LGA, SGA, and late preterm infants who are healthy enough to feed. It's becoming common practice to treat hypoglycemia with a combination of dextrose gel and breast or formula feedings. If the infant is not promptly responding to this therapy, then supportive care with IV dextrose may also be required. However, please recognize that it’s not uncommon for enterally fed - late preterm, IDM, and SGA infants - to require glucose testing for 24 to 72 hours after birth, and in some cases even longer." },

		    { time: "5", carry: "", event: "", show: "", hide: "", transcript: "Even though we've focused on infants who are too sick to be fed, we should also discuss the IDM, LGA, SGA, and late preterm infants who are healthy enough to feed. It's becoming common practice to treat hypoglycemia with a combination of dextrose gel and breast or formula feedings. If the infant is not promptly responding to this therapy, then supportive care with IV dextrose may also be required. However, please recognize that it’s not uncommon for enterally fed - late preterm, IDM, and SGA infants - to require glucose testing for 24 to 72 hours after birth, and in some cases even longer." },

		    { time: "13", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".Cls_Image0", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },

		    { time: "20", carry: "", event: "", show: "", hide: "", transcript: "", animation: [{ target: ".Cls_Image1", duration: "0.5", activity: { 'opacity': '1', 'display': 'block' } }] },
		    {

		        time: "27.0",

		        carry: "",

		        event: "",

		        show: "",

		        hide: "",

		        transcript: "",

		        animation: [{

		                target: ".overlay",

		                duration: "0.5",

		                activity: {

		                    'display': 'block'

		                }

		            },
		            {

		                target: ".feedback",

		                duration: "0.5",

		                activity: {

		                    'display': 'block'

		                }

		            }
		        ]

		    }

		];



		function fnAudioFinishItemComp() {

		    fnAudioFinishPageComp();

		    fnUpdatePageCompletionCounter(0);

		    //fnUpdatePageCompletionCounter(7);

		}

		var __dataXml;

		var __clickCount = 0;



		$(document).ready(function() {

		    disableNextBtn();

		    var ele = document.getElementsByTagName('div');

		    for (var i = 0; i < ele.length; i++) {

		        ele[i].setAttribute("unselectable", "on");

		    }



		    // $(".clsEnaBackBtn").on("click",function(){

		    // 			console.log('clicked');

		    // 			fnJumpToPageByID("M1L0T1P16_10");

		    // 		});

		    var n = isInArray("M1L0T1P72", gCompPageArr);

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

		var popupOpen = 0;

		$(".small_expand").on("click", function() {

		    pauseAudio();

		    popupOpen = 1;

		    $(".modalTxtImg").hide();



		    var i = $(this).attr("id").slice(8);

		    $("#case_study_popup" + i).show();

		    $("#imgPopup" + i).show();

		    $("#idPatchMainC").addClass("blur");

		    $(".Cls_Image0").addClass("blur");

		    $(".Cls_Image1").addClass("blur");

		});



		$(".closepopup").on("click", function() {

		    // audioReset();

		    var __aIndex = $(this).attr("id").slice(8);

		    /*		if(!fnPauseAudio()){

		    			console.log(true);

		    			playPauseAudio();

		    		}

		    */

		    popupOpen = 0;

		    playAudio()

		    $(".modal").removeAttr("style");

		    $("#idPatchMainC").removeClass("blur");

		    $(".Cls_Image0").removeClass("blur");

		    $(".Cls_Image1").removeClass("blur");

		});

		function fnOnAudioComplete() {

		    if (gAudioId == "startAudio") {

		        enableNextBtn();

		        fnAudioFinishItemComp();

		        $('.boxInst').show();

		        gCompPageArr.push("M1L0T1P72");

		        audplayer.pause();

		        audplayer.currentTime = 0;

		        //debugger;

		    } else {



		    }

		}



		var audplayer = document.getElementById('audioplayer');

		audplayer.addEventListener("timeupdate", function() {



		    if (audplayer.currentTime > 26.5) {



		        $('.Cls_Image0').addClass('blur');

		        $('.Cls_Image1').addClass('blur');



		        $('#idPatchMainC').addClass('blur');

		    } else if (audplayer.currentTime > 0.2 && audplayer.currentTime < 23.5) {

		        if (popupOpen == 0)

		        {

		            $('.Cls_Image0').removeClass('blur');

		            $('.Cls_Image1').removeClass('blur');



		            $('#idPatchMainC').removeClass('blur');

		        }



		    }

		});



		function pauseAudio() {

		    if (!fnPauseAudio()) {

		        fnPauseAudio()

		    } else {

		        playPauseAudio();

		    }

		}



		function playAudio() {

		    if (!fnPauseAudio()) {

		        playPauseAudio();

		    }

		}