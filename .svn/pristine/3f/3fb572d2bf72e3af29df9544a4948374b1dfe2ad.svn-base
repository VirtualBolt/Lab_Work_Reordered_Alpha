		manifest = [{

		        src: 'pages/images/Topic01/T01P68/T01P68_01.png',

		        id: '3'

		    },

		    {

		        src: 'pages/images/Topic01/T01P68/T01P68_02.png',

		        id: '5'

		    },



		    {

		        src: 'pages/images/Topic01/T01P68/T01P68_03.png',

		        id: '7'

		    }

		];

		var audioPath = "pages/audio/Topic01/T01P70/T01P70";

		var gItemAudioPath = ["pages/audio/Topic01/T01P68/T01P68_1"

		];





		var currCue = 0;

		var idd = 0;



		var updateContentArray = [{

		        time: "0",

		        carry: "",

		        event: "",

		        show: "",

		        hide: "",

		        transcript: "This chart shows the entire process of hypoglycemia treatment for infants who are too sick to feed."

		    },

		    {

		        time: "6",

		        carry: "",

		        event: "",

		        show: "",

		        hide: "",

		        transcript: "This chart shows the entire process of hypoglycemia treatment for infants who are too sick to feed."

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





		    var n = isInArray("M1L0T1P70", gCompPageArr);

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

		        enableNextBtn();

		        $('.boxInst').show();

		        gCompPageArr.push("M1L0T1P70");

		        fnAudioFinishItemComp();

		        audplayer.pause();

		        audplayer.currentTime = 0;

		    } else {



		    }



		}



		function bindDragClickable() {

		    $('.drag').off().on('click', function() {



		        if ($(this).attr('dropid') == $('.drop.active').attr('dropid')) {

		            var $cloneDrag = $(this).clone();


		            $cloneDrag.css({

		                'top': 0,

		                'left': 0,

		                'position': 'relative'

		            }).appendTo($('.drop.active'));

		            $droppedDiv = $('.drop.active');

		            $('.drag').removeClass('incorrect');

		            $droppedDiv.removeClass('active').addClass('dropped');

		            $('.drop.dropped').length != 3 ? $('.drop').eq($droppedDiv.index() + 1).addClass('active') : '';

		            //})

		            $(this).hide();

		            setTimeout(function() {

		                if ($('.drop.dropped').length == 3) {

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