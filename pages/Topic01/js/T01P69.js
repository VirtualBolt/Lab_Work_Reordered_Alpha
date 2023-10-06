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

		var audioPath = "pages/audio/Topic01/T01P69/T01P69";

		var gItemAudioPath = ["pages/audio/Topic01/T01P69/T01P69_1"

		];





		var currCue = 0;

		var idd = 0;



		var updateContentArray = [{

		        time: "0",

		        carry: "",

		        event: "",

		        show: "",

		        hide: "",

		        transcript: "If the repeat blood sugar check is less than 50 mg/dL (2.8 mmol/L), Complete the chart below by selecting a step in the box on the right and clicking the highlighted box."

		    },





		];

		var updateContentArray0 = [{

		    time: "0.0",

		    carry: "",

		    event: "",

		    show: "",

		    hide: "",

		    transcript: "Continue to monitor the blood sugar on a regular basis until it remains greater than 50 mg/dL (2.8 mmol/L) on at least two consecutive evaluations. It’s important to be aware that some infants may have what appears to be a stable blood sugar, but then their blood sugar falls to below 50 again.Therefore, it is important to watch for signs of hypoglycemia and continue monitoring the blood sugar until you’re certain that the infant’s blood sugar level is in a stable and safe range. Use good clinical judgment to decide when blood glucose testing can be safely decreased or stopped altogether."
		}];



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





		    var n = isInArray("M1L0T1P69", gCompPageArr);

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



		function fnCompletion() {

		    // console.log("end");

		    //if($(".clsVisited").length==gTotalPopups){

		    //enableNextBtn();

		    //fnAudioFinishItemComp();

		    //}

		}







		function fnOnAudioComplete() {

		    if (gAudioId == "startAudio") {

		        //		enableNextBtn();

		        //	fnAudioFinishItemComp();

		        bindDragClickable();

		        //		$('.boxInst').show();

		        //		gCompPageArr.push("M1L0T1P49");				

		    } else {

		        enableNextBtn();

		        $('.boxInst').show();

		        gCompPageArr.push("M1L0T1P69");

		        fnAudioFinishItemComp();

		        audplayer.pause();

		        audplayer.currentTime = 0;

		    }



		}



		function bindDragClickable() {

		    $('.drag').off().on('click', function() {



		        if ($(this).attr('dropid') == $('.drop.active').attr('dropid')) {





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

		            $('.drop.dropped').length != 7 ? $('.drop').eq($droppedDiv.index() + 1).addClass('active') : '';

		            //})

		            $(this).hide();

		            setTimeout(function() {

		                if ($('.drop.dropped').length == 7) {

		                    $('.overlay').fadeIn();

		                    $('.drag').off();

		                    $('#idPatchMainRajnik,#section0').addClass('blur');

		                    fnPlaySectionAudio(0);

		                }

		            }, 1000);

		        } else {

		            $(this).addClass('incorrect');

		        }

		    });

		}

		// var audplayer = document.getElementById('audioplayer');    

		// audplayer.addEventListener("timeupdate", function() {



		// if (audplayer.currentTime>35.1)

		// {



		// 	$('.ClsImage0Rajnik').addClass('blur');

		// 	$('.ClsImage1Rajnik').addClass('blur');

		// 	$('.ClsImage2Rajnik').addClass('blur');

		// 	$('#idPatchMainRajnik').addClass('blur');

		// } else {

		// 	$('.ClsImage0Rajnik').removeClass('blur');

		// 	$('.ClsImage1Rajnik').removeClass('blur');

		// 	$('.ClsImage2Rajnik').removeClass('blur');

		// 	$('#idPatchMainRajnik').removeClass('blur');

		// }





		//});