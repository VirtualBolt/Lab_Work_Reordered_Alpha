manifest = [{
    src: 'pages/images/Topic01/T01P22/base.png',
    id: '1'
}];

var audioPath = "pages/audio/Topic01/T01P22/T01P22";
var gItemAudioPath = ["pages/audio/Topic01/T01P22/T01P22_1", "pages/audio/Topic01/T01P22/T01P22_2"];
var currCue = 0;
var idd = 0;
var clickTabCount = 0;
var clickTabCount1 = 0;
var updateContentArray = [{
        time: "0.5",
        carry: "",
        event: "",
        show: "",
        hide: ".clsAllTabs",
        transcript: "To prepare for extrauterine life, the fetus stores glucose in the form of glycogen in different parts of the body. Can you identify the parts in the illustration below?",
        animation: [{
            target: ".clsAllTabs",
            duration: "",
            activity: {
                'opacity': '0'
            }
        }]
    },
    {
        time: "4.5",
        carry: "",
        event: "",
        show: ".clsAllTabs",
        hide: "",
        animation: [{
            target: ".clsAllTabs",
            duration: "0.13",
            activity: {
                'opacity': '1',
                "display": "block"
            }
        }]
    },
    {
        time: "4.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{
            target: "#idText2",
            duration: "0.13",
            activity: {
                'opacity': '1',
                "display": "block"
            }
        }]
    }, {
        time: "5",
        carry: "",
        event: "",
        show: ".cSubmitBtn",
        hide: "",
        animation: [{
            target: ".cSubmitBtn",
            duration: "0.5",
            activity: {
                'opacity': '1',
                "display": "block"
            }
        }]
    }
];
var popupSectionArray0 = [{
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "That is correct. At term gestation, glycogen accounts for approximately 5 to 8 percent of the liver and skeletal muscle weight and 4 percent of the cardiac muscle weight. A small amount of glycogen is also stored in the kidneys and lungs, but minimal amounts, if any, are stored in the brain. Click Next to continue.",
        animation: [{
            target: "",
            duration: "",
            activity: {
                'opacity': '0'
            }
        }]
    },
    {
        time: "3",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{
            target: ".organShowed",
            duration: "0.8",
            activity: {

                "display": "none"
            }
        }]
    },
    {
        time: "2.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{
            target: ".selectCounter",
            duration: "0.10",
            activity: {
                "display": "none"
            }
        }]
    },
    {
        time: "3",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{
            target: ".clsAllTabs1",
            duration: "0.13",
            activity: {

                "display": "block"
            }
        }]
    }, {
        time: "7",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{ target: ".feedbackBox2", duration: "0.5", activity: { 'display': 'block', "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" } }]
    }, {
        time: "11",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{ target: ".feedbackBox1", duration: "0.5", activity: { 'display': 'block', "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" } }]
    }
];
var popupSectionArray1 = [{
        time: "0.0",
        carry: "",
        event: "",
        show: "",
        hide: "",
        transcript: "Here is some feedback on your response. At term gestation, glycogen accounts for approximately 5 to 8 percent of the liver and skeletal muscle weight and 4 percent of the cardiac muscle weight. A small amount of glycogen is also stored in the kidneys and lungs, but minimal amounts, if any, are stored in the brain. Click Next to continue.",
        animation: [{
            target: "",
            duration: "",
            activity: {
                'opacity': '0'
            }
        }]
    }, {
        time: "3",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{
            target: ".clsAllTabs",
            duration: "0.13",
            activity: {

                "display": "none"
            }
        }]
    },
    {
        time: "2.5",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{
            target: ".selectCounter",
            duration: "0.10",
            activity: {
                "display": "none"
            }
        }]
    },
    {
        time: "3",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{
            target: ".clsAllTabs1",
            duration: "0.13",
            activity: {

                "display": "block"
            }
        }]
    }, {
        time: "7",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{ target: ".feedbackBox2", duration: "0.5", activity: { 'display': 'block', "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" } }]
    }, {
        time: "10",
        carry: "",
        event: "",
        show: "",
        hide: "",
        animation: [{ target: ".feedbackBox1", duration: "0.5", activity: { 'display': 'block', "-webkit-animation": "zoomin 0.5s ease-in", "animation": "zoomin 0.5s ease-in" } }]
    }
];

function fnPlaySectionAudio(gCurrentIndex) {
    indexAudio = (gCurrentIndex);
    audioId = "audio_" + gCurrentIndex;
    gAudioId = audioId;
    fnHideShowAudioPlayer(false);
    updateContentArray = eval("popupSectionArray" + (gCurrentIndex));
    initAudioPlayer(gItemAudioPath[gCurrentIndex])
    console.log('IRF')
}
var aud = document.getElementById("audioplayer");

function fnAudioFinishItemComp() {
    fnAudioFinishPageComp();
    fnUpdatePageCompletionCounter(0);
}
var __dataXml;
$(document).ready(function() {
    disableNextBtn();
    $('.livr').mouseout(function() {
        $('.livr').css('display', 'none')
    })
    $('.arm').mouseout(function() {
        $('.arm').css('display', 'none')
    })
    $('.brain').mouseout(function() {
        $('.brain').css('display', 'none')
    })
    $('.heart').mouseout(function() {
        $('.heart').css('display', 'none')
    })
    $('.kidney').mouseout(function() {
        $('.kidney').css('display', 'none')
    })
    $('.lung').mouseout(function() {
        $('.lung').css('display', 'none')
    })
    $('.thigh').mouseout(function() {
            $('.thigh').css('display', 'none')
        })
        //$('.map').maphilight();

    var ele = document.getElementsByTagName('div');
    for (var i = 0; i < ele.length; i++) {
        ele[i].setAttribute("unselectable", "on");
    }

    var n = isInArray("M1L0T1P22", gCompPageArr);
    console.log(n);
    if (n == true) {
        enableNextBtn();
        // fnGlowNextBtn();
        fnDesiableNext(false);
    }



    $(".cSubmitBtn").off().on("click", function() { // fnCompletion();


        if ($(this).hasClass("active")) {
            enableNextBtn();
            fnDesiableNext(false);
            gCompPageArr.push("M1L0T1P22");

            tinCanWrapper.sendStatementData("answered", "Preparation-for-extrauterine-life-to-prepare-for-extrauterine-life,-the-fetus-stores-glucose-in-the-form-of-glycogen-in-different-parts-of-the-body.", "To prepare for extrauterine life, the fetus stores glucose in the form of glycogen in different parts of the body.");
            $(".cSubmitBtn").removeClass("active").hide();
            $('.correctAnswer').show();
            if ($('.brainShown.organShowed').length == 1) {
                $('.braincorrect').show();
                fnPlaySectionAudio(1);
            } else {
                if ($('.brainShown.organShowed').length == 0 && $('.organShowed').length == 9) {
                    fnPlaySectionAudio(0);
                } else {
                    fnPlaySectionAudio(1);
                }
            }


        } else {

        }
    });
});

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

function audioReset() {
    gAudioId = "";
    onTimelineEnd();
}

function fnPlayItemAudio(gCurrentIndex) {
    audioindex = (gCurrentIndex);
    gAudioId = "audio_" + gCurrentIndex;
    fnHideShowAudioPlayer(false);
    updateContentArray = eval("popupContentArray" + (gCurrentIndex));
    initAudioPlayer(gItemAudioPath[gCurrentIndex])
}

var succRefFunc = function fnInitPage(oXML) {
    gPageXMLObj = oXML;
}
var errRefFunc = function fnXMLLoadError() {
    alert("Error loading XML file.");
}

function fnCompletion() {
    console.log("sdfsdf");
    enableNextBtn();
    fnAudioFinishItemComp();
    $(".boxInst").show();
    aud.pause();
    aud.currentTime = 0;
    gCompPageArr.push("M1L0T1P22");
}

function fnOnAudioComplete() {
    if (gAudioId == "startAudio") {
        //fnCompletion();
        //gCompPageArr.push("M1L0T1P16_17");
        //fnClick();
        //enableNextBtn();
        //fnAudioFinishItemComp();
    } else {

        fnCompletion();
        //if ($(".clsVisited").length === 2) {}
    }
}


var elmRefArr = ["liver", "bicep", "bicep1", "bicep2", "bicep3", "brain", "lungs", "lungs1", "heart", "kidney", "kidney1"]

var elmToOpen = ["livr", "arm", "arm", "arm", "arm", "brain", "lung", "lung", "heart", "kidney", "kidney"]

$.each(elmRefArr, function(index, value) {


    $("#" + value).attr("elmOpen", elmToOpen[index]);

    $("#" + value).mouseenter(function() {
        var openElmVal = $(this).attr("elmOpen");
        hoverOrgans(openElmVal);
    })
});






function hoverOrgans(organs) {
    $('.livr, .bicep, .brain, .heart, .kidney, .lung, .thigh, .arm').css('display', 'none');
    $('.' + organs).css('display', 'block');
}

function hideOrgans(organs) {
    $('.' + organs).css('display', 'none');
    // $('.'+organs).css('display', 'block');	
}




function showOragns(organ1, organ2) {

    if ($('.' + organ1).css('display') == "none") {
        $('.' + organ2).hide();
        $('.' + organ1).show().addClass('organShowed');
    } else if ($('.' + organ1).css('display') == "block" || $('.' + organ1).css('display') == "inline") {

        $('.' + organ2).hide();
        $('.' + organ1).hide().removeClass('organShowed');
    }
    /*
    if (organ1=="brainShown")
    {
        $('.bicepShown').css('display', 'none').removeClass('organShowed');
        $('.thighShown').css('display', 'none').removeClass('organShowed');
    } else if (organ1=="bicepShown")
    {
        $('.brainShown').css('display', 'none').removeClass('organShowed');
        $('.thighShown').css('display', 'none').removeClass('organShowed');
    } else if (organ1=="thighShown")
    {
        $('.brainShown').css('display', 'none').removeClass('organShowed');
        $('.bicepShown').css('display', 'none').removeClass('organShowed');
    
    } else {
        $('.brainShown').css('display', 'none').removeClass('organShowed');
        $('.bicepShown').css('display', 'none').removeClass('organShowed');
        $('.thighShown').css('display', 'none').removeClass('organShowed');
    
    if ($('.organShowed').length==4)
    {
    
        $('.clickBlocker').removeAttr('style')
        $('.clickBlocker').show();
        fnPlayItemAudio(0);
    }
    }
    
    */
    if ($('.organShowed').length > 0) {
        $(".cSubmitBtn").removeClass("active").addClass("active");
    } else {
        $(".cSubmitBtn").removeClass("active");
    }

    $(".cSubmitBtn").focus();
}


//fnPlayItemAudio(0);


function bicepshownval() {
    $('.arm').show();
    $('.armShown').hide();
}

function brainshownval() {
    $('.brain').show();
    $('.brainShown').hide();
}

function heartshownval() {
    $('.heart').show();
    $('.heartShown').hide();
}

function kidneyshownval() {
    $('.kidney').show();
    $('.kidneyShown').hide();
}

function lungsshownval() {
    $('.lung').show();
    $('.lungShown').hide();
}

function thighshownval() {
    $('.thigh').show();
    $('.thighShown').hide();
}