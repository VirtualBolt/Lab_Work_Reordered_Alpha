/*********** Player level constants and attributes are initialized here ********************/

function fnCurrentPageObj(lPageId) {
    var moduleCounter, lessonCounter, topicCounter, pageCounter, totalPageCounter;
    moduleCounter = 0;
    totalPageCounter = 0;
    var isPageAvailable = false;
    oXML.find("MODULE").each(function() {
        lessonCounter = 0;
        $(this).find("LESSON").each(function() {
            topicCounter = 0;
            $(this).find("TOPIC").each(function() {
                pageCounter = 0;
                $(this).find("PAGE").each(function() {
                    if ($(this).attr("ID") == lPageId) {
                        gCurrPage = pageCounter;
                        gCurrTop = topicCounter;
                        gCurrLess = lessonCounter;
                        gCurrMod = moduleCounter;
                        //To skip assessment pages
                        if ($(this).attr("SHOWINMENU").toUpperCase() == "F" || $(this).attr("SHOWINMENU").toUpperCase() == "N") {
                            gCurrPageNum--; //to solve page counter issue for assessment and result page
                        } else
                            gCurrPageNum = (totalPageCounter + 1);
                        isPageAvailable = true;
                    }
                    pageCounter++;
                    if ($(this).attr("SHOWINMENU").toUpperCase() != "F" && $(this).attr("SHOWINMENU").toUpperCase() != "N")
                        totalPageCounter++;
                });
                topicCounter++;
            });
            lessonCounter++;
        });
        moduleCounter++;
    });

    //gTotalPages = totalPageCounter;
    return isPageAvailable;
}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}

/* xAPI code start */
function getCurPageName() {
    //console.log(gCurrPage)
    return gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].find("PAGETITLE").text();
}

function updateExperiencedVal() {
    var _getCurPageName = getCurPageName();
    var _spaceReplaceToHyphen = _getCurPageName.replace(/-|\s/g, "-");
    tinCanWrapper.sendStatementData("experienced", _spaceReplaceToHyphen, _getCurPageName);
}
/* xAPI code end */



function fnJumpToPageByID(lPageId, lIsHideMenu) {
    enabledAllButtons();
    clearInterval(checkblinkGlwBtn);
    //console.log(lPageId);
    var n = isInArray(lPageId, gCompPageArr);
    if (n == true) {
        //if(gCompPageArr.includes(lPageId)){
        ////////////////RJ//////////    setTimeout(function() {
        enableNextBtn();
        //fnGlowNextBtn();
        fnDesiableNext(false)
            //////////////////////////////  }, 500)
    }
    /*if ($("#clsNxtBtn").hasClass("clsGlowNxtBtn")) {
        $("#clsNxtBtn").removeClass("clsGlowNxtBtn");
        $("#NextGlow").css("display", "none");
    }*/
    if ($("#clsNxtBtn").hasClass("clsBlinkNxtBtn")) {
        $("#clsNxtBtn").removeClass("clsBlinkNxtBtn");
    }
    $('#contentFrame').html("")
    if ($("#clsHelpBtn").hasClass("highlight")) {
        removeHighlightHelp();
    }
    fnSetCurrSndObj(null);
    transcriptText.html("");

    if (lIsHideMenu == true) {
        disablePopup();
    }

    fnShowPreLoader();
    var isPageAvailable = fnCurrentPageObj(lPageId);
    if (isPageAvailable) {
        /* if (gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ISASSMTINTRO") == "Y") {
            //To Identify Assessment Intro Page
            if (gIsAssessmentCompleted) { //Assessment completed
                gCurrPage = gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages.length - 1; //Load Result screen
                fnCurrentPageObj(gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].Pages[gCurrPage].attr("ID"));
            } else {
                //Assessment not completed
            }
        } */
        fnLoadPage(gCurrMod, gCurrLess, gCurrTop, gCurrPage, true);
    }
    if (lPageId == "M1L0T1P16_10") {
        $('#id_sliderContainer').hide()
        $('#clsAudioOffBtn').hide()
        $('#clsAudioOnBtn').hide()
        $("#clsPlayPauseBtn").hide();
        if (__alreadyVisitedFourIcon == 1) {
            __alreadyVisitedFourIcon = 2;
        }
        __videoPage = true;
    }  else {
        $('#id_sliderContainer').show()
        $('#clsAudioOffBtn').show()
        $('#clsAudioOnBtn').show()
        $("#clsPlayPauseBtn").show();
        __videoPage = false;
    }

    //xAPI code
    setTimeout(function() {
        updateExperiencedVal();
    }, 300);
}