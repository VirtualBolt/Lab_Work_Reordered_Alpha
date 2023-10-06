// JavaScript Document
/*********** Player level constants and attributes are initialized here ********************/
var isLastTopicPage = false;
var isAssessmentLock = false;
var closedNavigation = false;

function fnCreateMenu() {

    isLastTopicPage = false;
    fnCreateLockedMenu();

}

function fnCreateLockedMenu() {
    closeHelpBtnFunc();
    if ($("#ToolBtn").hasClass("ClsToolbtnSelected"))
    fnTools();
    //var menuStr = "";
    closedNavigation = oXML.find("CLOSEDNAVIGATION").text().toLowerCase();
    isAssessmentLock = fnCheckAssessmentPageLock()

    var menuStr = "<div id='menuheader'></div><div class='clssMenuContainer'><ul id='menu' class='menu'>";
    var bool = false;
    for (var i = 0; i < gModuleArr.length; i++) {
        for (var j = 0; j < gModuleArr[i].Lessons.length; j++) {
            var lessStatus = "";
            var Topiccount = 0;
            var Topiccounttxt = "";
            for (var k = 0; k < gModuleArr[i].Lessons[j].Topics.length; k++) {
                Topiccount++;
                if (Topiccount < 10) {
                    Topiccounttxt = "0" + Topiccount + ".";
                } else {
                    Topiccounttxt = "" + Topiccount + ".";
                }
                var topicNumStr = fnGetCurrentLessonNum(k);
                //console.log("::::::::::  "+gModuleArr[i].Lessons[j].Topics[k].attr("ID"))
                if (fExistInArr(gCompTopArr, gModuleArr[i].Lessons[j].Topics[k].attr("ID")) || gModuleArr[i].Lessons[j].Topics[k].Pages.length <= (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics[k].Pages, gCompPageArr))) {

                    //	if(gModuleArr[i].Lessons[j].Topics[k].Pages.length<= (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics[k].Pages, gCompPageArr))){
                    //topic completed
                    lessStatus = "topicStatusComp"
                        //topicCompleted++;
                } else if (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics[k].Pages, gCompPageArr) > 0) {
                    //one of the page visited
                    lessStatus = "topicStatusIncomp"
                } else {
                    //not started
                    lessStatus = "topicStatusUnattempt"
                }


                //if(fCheckCompletion(gModuleArr[i].Lessons[j],"Lesson"))
                if (lessStatus == "topicStatusComp") //if lession is completed
                {
                    //consoel.log(gCurrMod)
                    if (gCurrMod == i && gCurrLess == j) {
                        //Lesson current
                        //menuStr += '<li><a id = "visited" class="current-toggle-link-sub LessonGradient" href="javascript:void(0);"><div style="position:relative;display:inline-block;line-height: 24px;">'+gModuleArr[i].Lessons[j].find("LESSONTITLE").text()+'</div></a><ul class="sub-menu">'
                        menuStr += '<li class="borderImgLevel_1" id="l' + gModuleArr[i].Lessons[j].Topics[k].attr("ID") + '"><a id = "visited" class="check_1 dis_cursor completed current-toggle-link-sub LessonGradient" style="cursor:pointer;" href="javascript:void(0);"><div class="lession" style="width:100%;cursor:pointer;position:relative;display:inline-block;line-height: 37px;"><div class="cls_topicArrow topicStatusComp" style=""></div><div class="txt_hover" style="float: left; margin-top: 1.5%; line-height: 110%; margin-left: 2%; width:85%; color:#333;font-size: 14px;font-family:OpenSansRegular;float:left">' + gModuleArr[i].Lessons[j].Topics[k].find("TOPICTITLE").text() + '</div><div id="arrowCls" class="arrowClose"></div></div></a><ul class="sub-menu">'
                    } else {
                        //Lesson Completed
                        menuStr += '<li class="borderImgLevel_1" id="l' + gModuleArr[i].Lessons[j].Topics[k].attr("ID") + '"><a id = "visited" class="check_2 completed toggle-link-sub LessonGradient" style="cursor:pointer;" href="javascript:void(0);"><div class="lession" style="cursor:pointer;width:100%;position:relative;display:inline-block;line-height: 37px;"><div class="cls_topicArrow topicStatusComp" style=""></div><div class="txt_hover" style="margin-left: 2%; margin-top: 1.5%; line-height: 110%; width:85%; color:#333;font-size: 14px;font-family:OpenSansRegular;float:left">' + gModuleArr[i].Lessons[j].Topics[k].find("TOPICTITLE").text() + '</div><div id="arrowCls" class="arrowClose"></div></div></a><ul class="sub-menu">'

                    }
                } else {
                    //Lesson not completed
                    if (gCurrMod == i && gCurrLess == j) {
                        // console.log("c1"+lPgId)
                        // Lesson current
                        menuStr += '<li class="borderImgLevel_1" id="l' + gModuleArr[i].Lessons[j].Topics[k].attr("ID") + '"><a id="' + gModuleArr[i].Lessons[j].Topics[k].attr("ID") + '" class="check_3 dis_cursor current-toggle-link-sub LessonSelected lessionOpen" style="cursor:pointer;" href="javascript:void(0);"><div class="lession" style="width:100%; position:relative; display:inline-block;line-height: 202%;"><div class="txt_hover" style="margin-left: 2%; width:85%; margin-top: 1.5%; line-height: 110%; color:#333; cursor:pointer; float: left;font-size: 14px;font-family:OpenSansRegular;">' + gModuleArr[i].Lessons[j].Topics[k].find("TOPICTITLE").text() + '</div><div id="arrowCls" class="arrowClose"></div><div style="float:left; margin-left: -98.8%; margin-top: 2.5%; cursor:pointer;" class="' + lessStatus + '"></div></div></a><ul class="sub-menu">'
                    } else {
                        // console.log("d1"+lPgId)
                        if (closedNavigation == "true") {
                            menuStr += '<li class="borderImgLevel_1"  id="l' + gModuleArr[i].Lessons[j].Topics[k].attr("ID") + '"><a id="' + gModuleArr[i].Lessons[j].Topics[k].attr("ID") + '" class=" check_4 toggle-link-sub LessonGradient menuClickDeactivate" style="cursor:default;" href="javascript:void(0);"><div class="lession" style="width:100%;position:relative;display:inline-block;line-height: 202%; cursor:default;"><div style="opacity:0.5;" class="cls_topicArrow"></div><div class="txt_hover" style="margin-left: 2%; margin-top: 1.5%; line-height: 110%; width:85%; color:#333; cursor:default; float: left;font-size: 15px;font-family:OpenSansRegular;">' + gModuleArr[i].Lessons[j].Topics[k].find("TOPICTITLE").text() + '</div><div id="arrowCls" class="arrowClose"></div><div style="float:left; margin-left: -90.4%; cursor:default;" class="' + lessStatus + '"></div></div></a><ul class="sub-menu">'
                        } else {
                            menuStr += '<li class="borderImgLevel_1" id="l' + gModuleArr[i].Lessons[j].Topics[k].attr("ID") + '"><a id="' + gModuleArr[i].Lessons[j].Topics[k].attr("ID") + '" class="check_5 toggle-link-sub LessonGradient" style="cursor:pointer;" href="javascript:void(0);"><div class="lession" style="width:100%;position:relative;display:inline-block;line-height: 202%;"><div style="opacity:1;" class="cls_topicArrow"></div><div class="txt_hover" style="margin-left: 2%; margin-top: 1.5%; line-height: 110%; width:85%; color:#333; cursor:pointer; float: left;font-size: 14px;font-family:OpenSansRegular;">' + gModuleArr[i].Lessons[j].Topics[k].find("TOPICTITLE").text() + '</div><div id="arrowCls" class="arrowClose"></div><div style="float:left; margin-left: -90.4%; cursor:pointer;" class="' + lessStatus + '"></div></div></a><ul class="sub-menu">'
                        }
                    }
                }

                menuStr += '<div class="pageGap"></div>';

                // Page creation
                //for(var k=0;k<gModuleArr[i].Lessons[j].Topics.length;k++)
                {


                    for (var l = 0; l < gModuleArr[i].Lessons[j].Topics[k].Pages.length; l++) {
                        var pageStatus = "";
                        if (fCheckCompletion(gModuleArr[i].Lessons[j].Topics[k].Pages[l], "Page")) {
                            pageStatus = "cl_pageStatusComp assessmentLockVar";
                        } else {
                            pageStatus = "cl_pageStatusIncomp";
                        }

                        //alert(l + " Page ==  topic " + k + " == gCurrLess " + j + " == module " + i)
                        var lPgId = gModuleArr[i].Lessons[j].Topics[k].Pages[l].attr("ID");
                        //
                        //var tempString = 'mod="'+l+'" les="'+k+'" top="'+j+'" pag="'+i+'"';

                        // if(lPgId == "M1L0T1P16") {
                        // 	pageStatus = "cl_pageStatusIncomp";
                        // 	console.log(gCompPageArr);
                        // }
                        if (gModuleArr[i].Lessons[j].Topics[k].Pages[l].attr("SHOWINMENU") == "N") {
                            continue;
                        }

                        var tempClass = "";
                        //console.log(l+" "+gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text()+" "+gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text().length)
                        if (gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text().length > 20) {
                            tempClass = "doubleLineMenu"
                        }
                        var liClass = "";
                        if (gModuleArr[i].Lessons[j].Topics[k].Pages[l].attr("SUBMENU") == "TRUE") {
                            liClass = " submenu "
                        }
                        if (gCurrPage == l && gCurrTop == k && gCurrLess == j && gCurrMod == i) {                         
                            if (fCheckCompletion(gModuleArr[i].Lessons[j].Topics[k].Pages[l], "Page")) {
                               console.log(lPgId)
                                var mImg = "<div class='menuTickmark ClSSPAGESELECTED' style='cursor: default;'></div>"
                                var tickMark = "<div class='menuTickmarkSymbol ClSSPAGESELECTED cl_pageStatusComp' style='cursor: default;'></div>"
                                menuStr += '<li id="selected" class="pageSelected currentPage '+liClass+'" pageId="' + lPgId + '"><a  class="forSelection" >' + mImg + '<div class="pageStyle pageSelectedStyle" style="position:relative; cursor: default;"><div id="' + lPgId + '" style="font-size: 14px;cursor: default;font-family:OpenSansRegular;" class=' + tempClass + '>' + gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text() + '</div></div><div class="' + pageStatus + '"></div></a>'
                            } else {
                                console.log("not complete"+lPgId)
                                //if current page not completed
                                var mImg = "<div class='menuTickmark ClSSPAGESELECTED' style='cursor: default;'></div>"
                                var tickMark = "<div class='menuTickmarkSymbol ClSSPAGESELECTED' style='cursor: default;'></div>"
                                menuStr += '<li id="selected" class="pageSelected currentPage '+liClass+'" pageId="' + lPgId + '"><a  class="forSelection ">' + mImg + '<div class=" pageStyle pageSelectedStyle" style="position:relative; cursor: default;"><div id="' + lPgId + '" style="font-size: 14px;cursor: default;font-family:OpenSansRegular;font-weight: bold;" class=' + tempClass + '>' + gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text() + '</div></div><div class="' + pageStatus + '"></div></a>'
                            }
                        } else {
                             console.log("2"+lPgId)
                            // for completed page
                            //if(fCheckCompletion(gModuleArr[i].Lessons[j].Topics[k].Pages[l],"Page")){
                            //if(gModuleArr[i].Lessons[j].Topics[k].Pages[l].isCompleted == "1"){
                            if (fCheckCompletion(gModuleArr[i].Lessons[j].Topics[k].Pages[l], "Page")) {
                                //completed page
                                var mImg = "<div class='menuTickmark'></div>"
                                var tickMark = "<div class='menuTickmarkSymbol cl_pageStatusComp'></div>"
                                menuStr += '<li class="pageNormal completedPage CLSSVISITED '+liClass+'" style="opacity:1;" id="' + lPgId + '" pageId="' + lPgId + '"  onclick="javascript:fnOnMenuItemClick(\'' + lPgId + '\',true);"><a id="visited" class="forSelection" style="cursor:pointer;">' + mImg + '<div class="pageStyle" style="position:relative; cursor:pointer;"><div style="font-size: 14px; cursor:pointer;font-family:OpenSansRegular;" class=' + tempClass + '>' + gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text() + '</div></div><div class="' + pageStatus + '"></div></a>'
                            } else {
                                //for lock page
                                //var mImg = "<div class='menuTickmark'><img src='media/images/player/menu/menu_dash.png'/></div>"
                                console.log("lock page")
                                if (closedNavigation == "true") {
                                    var mImg = "<div style='opacity:1;' class='menuTickmark'></div>"
                                    var tickMark = "<div class='menuTickmarkSymbol' style='opacity:1;'></div>"
                                        //lock page
                                    menuStr += '<li class="pageNormal '+liClass+'" id="' + lPgId + '" pageId="' + lPgId + '"  onclick="javascript:fnOnMenuItemClick(\'' + lPgId + '\',true);"><a id="visited" class="forSelection lockHover" style="cursor:default;">' + mImg + '<div class="pageStyle" style="position:relative; cursor:default;"><div style="font-size: 14px;font-family:OpenSansRegular;" class=' + tempClass + '>' + gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text() + '</div></div><div class="' + pageStatus + '"></div></a>'
                                } else if (isAssessmentLock && (gModuleArr[i].Lessons[j].Topics[k].Pages[l].attr("ISASSESSMENTMENUPAGE") == "T")) {
                                    var mImg = "<div style='opacity:1;' class='menuTickmark'></div>"
                                    var tickMark = "<div class='menuTickmarkSymbol' style='opacity:1;'></div>"
                                        //Only assessment page lock
                                    menuStr += '<li class="pageNormal '+liClass+'" id="' + lPgId + '" pageId="' + lPgId + '"  onclick="javascript:fnOnMenuItemClick(\'' + lPgId + '\',true);"><a id="visited" class="forSelection lockHover" style="cursor:default;">' + mImg + '<div class="pageStyle" style="position:relative; cursor:default;"><div style="font-size: 14px;font-family:OpenSansRegular;" class=' + tempClass + '>' + gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text() + '</div></div><div class="' + pageStatus + '"></div></a>'
                                } else {
                                    //console.log(lPgId)
                                    var mImg = "<div style='opacity:1;' class='menuTickmark '></div>"
                                    var tickMark = "<div class='menuTickmarkSymbol' style='opacity:1;'></div>"
                                        //for open page
                                    menuStr += '<li class="pageNormal completedPage CLSSVISITED '+liClass+'" style="opacity:1;" id="' + lPgId + '" pageId="' + lPgId + '"  onclick="javascript:fnOnMenuItemClick(\'' + lPgId + '\',true);"><a id="visited" class="forSelection" style="cursor:pointer;">' + mImg + '<div class="pageStyle" style="position:relative; cursor:pointer;"><div style="font-size: 14px; font-family:OpenSansRegular; cursor: inherit;" class=' + tempClass + '>' + gModuleArr[i].Lessons[j].Topics[k].Pages[l].find('PAGETITLE').text() + '</div></div></a>'

                                }
                            }
                        }
                        if (l != gModuleArr[i].Lessons[j].Topics[k].Pages.length - 1)
                            menuStr += '<div class="pageGap"></div>';
                    }
                    menuStr += '</ul></li>'
                }

                //menuStr += '<div class="topicLastPageGap"></div>'
                menuStr += '<div class="lessionGap"></div>';

                //menuStr += '</ul></li>';
            }
        }
        //menuStr += '</ul></li>';

        menuStr += '</ul></div>';
    }
    //menuStr += '</ul></ul>';

    $("#accordion-menu-wrapper").html(menuStr);
    setTimeout(function() { $("#accordion-menu-wrapper").addClass('open') }, 100);


    // Enable next page
    if (closedNavigation == "true") {
        var compId = $("#selected").attr("pageid")
        if (fCheckPageCompletion(compId)) {
            var nextP = findNextPageId();
            var nextT = findNextTopicId();
            //console.log(nextP)
            //console.log("nextP = "+nextP+" nextT = "+nextT)
            if (nextP != "") {
                $("#" + nextP).addClass('isAvailable');
                $("#" + nextP).addClass('CLSSVISITED');
                $("#" + nextP).css('cursor', 'pointer');
                $("#" + nextP).find('a').removeClass("lockHover");
                $("#" + nextP).find('a').css('cursor', 'pointer');
                $("#" + nextP).find('.pageStyle').css('cursor', 'pointer');
                $("#" + nextP + " .pageDisable").addClass('pageStyle');
                $("#" + nextP).bind("click", function() {
                    fnOnMenuItemClick(nextP, true);
                    playerToggleAciteClass();
                });
            }

            if (isLastTopicPage) {
                $("#" + nextT).removeClass("menuClickDeactivate");
                $("#" + nextT).css("cursor", "pointer");
                $("#" + nextT).find("div").css("cursor", "pointer");
                $("#" + nextT).css("opacity", "1");
            }
        }
    }

    //hide last lession gap
    $("#menu .lessionGap:last").hide();
    fnAssignMenuEvents();


    //*************************------------------////////////////
    /*

	var topicCompleted=0;
	for(var i=0;i<gModuleArr.length;i++)
	{
		if(i == gCurrMod){
			for(var j=0;j<gModuleArr[i].Lessons.length;j++)
			{
				for(var k=0;k<gModuleArr[i].Lessons[j].Topics.length;k++)
				{
					if(gModuleArr[i].Lessons[j].Topics[k].attr("SHOWINMENU")=="F"){
						continue;
					}
					var topTitle = gModuleArr[i].Lessons[j].Topics[k].find("TOPICTITLE").text()

					var lessStatus = ""
					if( fExistInArr(gCompTopArr, gModuleArr[i].Lessons[j].Topics[k].attr("ID")) || gModuleArr[i].Lessons[j].Topics[k].Pages.length<= (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics[k].Pages, gCompPageArr))){

//					if(gModuleArr[i].Lessons[j].Topics[k].Pages.length<= (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics[k].Pages, gCompPageArr))){
						//topic completed
						lessStatus = "topicStatusComp"
						topicCompleted++;
					}else if(fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics[k].Pages, gCompPageArr)>0){
						//one of the page visited
						lessStatus = "topicStatusIncomp"
					}else{
						//not started
						lessStatus = ""
					}
					if(k==gModuleArr[i].Lessons[j].Topics.length-1)
					{
					// for assessment lock and unlock
						if(topicCompleted==(gModuleArr[i].Lessons[j].Topics.length-1))
						{
							var dynattribute = 'id="menu_'+gModuleArr[i].Lessons[j].Topics[k].attr("ID")+'" onclick=createLockedMenuPages('+i+','+j+','+k+','+true+')';
							var menuCursor1="menuCursorHand";
						}
						else
						{
							var dynattribute = 'id="menu_'+gModuleArr[i].Lessons[j].Topics[k].attr("ID")+'"';
							var menuCursor1="menuCursorDefault";
							var disabledTextClass1="disabledText"
						}
					}
					else
					{
					var dynattribute = 'id="menu_'+gModuleArr[i].Lessons[j].Topics[k].attr("ID")+'" onclick=createLockedMenuPages('+i+','+j+','+k+','+true+')';
					var menuCursor1="menuCursorHand";
					}
					//console.log("--> K: "+k+"   completed: "+topicCompleted+"  length: "+(gModuleArr[i].Lessons[j].Topics.length-1));
					menuStr += '<div class="menulesssondiv '+menuCursor1+'" '+dynattribute+'><div class="lessStatus '+lessStatus+'"></div><div class="lessonText '+disabledTextClass1+'"><span class="spnLessTitle">'+topTitle+'</span></div><div id="lesborder"/></div>'//Lesson div
				}
			}
		}
	}

	$("#menulessonholder").html(menuStr);
	if(isiPAD){
		$("#menulessonholder").css("height","100%")
	}
	if(gModuleArr[gCurrMod].Lessons[gCurrLess].Topics[gCurrTop].attr("SHOWINMENU")!="F"){
		createLockedMenuPages(gCurrMod, gCurrLess, gCurrTop);
	} */
}


// common functions
var lastLesSelected;

function showSelectedLesson(mod, les, topic) {
    if (lastLesSelected != undefined) {
        $("#" + lastLesSelected).removeClass("menulessonCurdiv");
        $("#" + lastLesSelected + " .lessonText").removeClass("lessonCurText");
    }
    var a = "menu_" + gModuleArr[mod].Lessons[les].Topics[topic].attr("ID");
    $("#" + a).addClass("menulessonCurdiv");
    $("#" + a + " .lessonText").addClass("lessonCurText");
    lastLesSelected = a;

}

function fnOnMenuItemClick(lPgId, lIsHideMenu) {
    $("#id_transcriptBox #transcripttext").html("");
    //var lPgId = ""+gModuleArr[mod].Lessons[les].Topics[topic].Pages[pag].attr("ID");
    //playerToggleAciteClass();
    // console.log(lPgId);
    /* if(lPgId=="M1L0T1P0" || lPgId=="M1L0T1P1" || lPgId=="M1L0T1P2"){
    	$("#topFrame").addClass("topFrame");
    }else{
    	$("#topFrame").removeClass("topFrame");
    } */

    if (lPgId == "M1L0T1P0" || lPgId == "M1L0T1P1" || lPgId == "M1L0T1P2" || lPgId == "M1L0T1P3" || lPgId == "M1L0T1P4" || lPgId == "M1L0T1P5" || lPgId == "M1L0T1P6" || lPgId == "M1L0T1P7" || lPgId == "M1L0T1P8" || lPgId == "M1L0T1P9" || lPgId == "M1L0T1P10" || lPgId == "M1L0T1P11" || lPgId == "M1L0T1P12" || lPgId == "M1L0T1P13" || lPgId == "M1L0T1P14") {
        //$("#topFrame").addClass("topFrame");
        $("#topFrame .home-btn").hide();
        $("#contentContainer").removeClass("sugar");
    } else {
        $("#topFrame .home-btn").show();
        $("#contentContainer").addClass("sugar");
    }
    if ($('#' + lPgId).hasClass('CLSSVISITED') || lPgId == "selected") {
        if (lPgId == "selected") {
            lPgId = $('#' + lPgId).attr('pageid');
        }
        isPageDisabled = false;
        fnJumpToPageByID(lPgId, lIsHideMenu)
    } else {
        isPageDisabled = true;
    }
    __backPageId = lPgId;
    $("#topFrame .back-btn").hide();
}

//Topic completion  lObj.Pages.length<= (fGetCompleteElementCount(lObj.Pages, gCompPageArr)
function checkLessonStatus(i, j) {
    var visitStatus = "notStarted"
    if (gModuleArr[i].Lessons[j].Topics.length <= (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics, gCompTopArr))) {
        //lesson completed
        visitStatus = "completed"
    } else if (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics, gCompTopArr) > 0) {
        //atleast one topic completed
        visitStatus = "incomplete"
    } else {
        //check pages
        for (var k = 0; k < gModuleArr[i].Lessons[j].Topics.length; k++) {
            //gModuleArr[i].Lessons[j].Topics[k].Pages.length<= (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics[k].Pages, gCompPageArr)
            if (fGetCompleteElementCount(gModuleArr[i].Lessons[j].Topics[k].Pages, gCompPageArr) > 0) {
                visitStatus = "incomplete"
                break;
            }
        }
    }
    return visitStatus
}





var dummyClick

function fnAssignMenuEvents() {
    var selected = jQuery("#selected");
    var parentTL = jQuery(selected).parents("li:first");

    if (parentTL != null) {
        var innerUL = jQuery(parentTL).children("ul:first");
        if (innerUL.attr("class") != null) {
            parentTL = jQuery(parentTL).parents("li:first")
            jQuery(parentTL).children("ul:first").slideToggle(100);
            jQuery(parentTL).children("a:first").toggleClass("active-child-toggle-link-sub");

            var checkElement = jQuery(innerUL);
            //innerUL.find('li').length
            $('#menu ul:visible').not(checkElement.parentsUntil('#menu')).slideUp('normal');

            //If one page then dont slide down.
            if (innerUL.find('li').length > 1) {
                checkElement.slideDown('normal');
                //innerUL.find('li').find("#arrowCls").removeClass("arrowClose").addClass("arrowOpen")
                var t = innerUL.parent()
                $(t).find("a").find("#arrowCls").removeClass("arrowClose").addClass("arrowOpen")
                    //debugger;
            }
        }
    }


    $(".sub-menu").hide();
    $(".current_page_item .sub-menu").show();

    $('#menu li a').click(
        function() {

            if (jQuery(this).hasClass("menuClickDeactivate")) {
                return false;
            }

            if (jQuery(this).hasClass("lockHover")) {
                return false;
            }
            //if menu open, current lession will not clickable
            /*if($(this).hasClass('lessionOpen'))
            {
            //return false;
            if($(this).hasClass("completed"))
            $(this).find(".iconHolder").attr("src","components/menu/images/menu_indicator3.png")
            else
            $(this).find(".iconHolder").attr("src","components/menu/images/menu_indicator1.png")

            }
            if(($(this).hasClass('LessonSelected')&& jQuery(this.parentElement).find("li").length <= 1))
            {
            //return false;

            if($(this).hasClass("completed"))
            $(this).find(".iconHolder").attr("src","components/menu/images/menu_indicator3.png")
            else
            $(this).find(".iconHolder").attr("src","components/menu/images/menu_indicator1.png")

            }*/
            var checkElement = $(this).next();
            //current-toggle-link-sub LessonSelected
            //toggle-link-sub LessonGradient

            //debugger;

            dummyClick = checkElement
            if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                checkElement.slideUp('normal');
                checkElement.removeClass('current-toggle-link-main');
                checkElement.addClass('toggle-link-main');
                $(this).find("#arrowCls").removeClass("arrowOpen").addClass("arrowClose")
                return false;
            }
            $('#menu li a').removeClass('lessionOpen');

            $('#menu li a').each(function() {
                $(this).find("#arrowCls").removeClass("arrowOpen").addClass("arrowClose")
                    /*if($(this).hasClass("completed"))
                    //$(this).find(".iconHolder").attr("src","components/menu/images/menu_indicator3.png")
                    else
                    //$(this).find(".iconHolder").attr("src","components/menu/images/menu_indicator1.png")*/
            });



            if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#menu ul:visible').not(checkElement.parentsUntil('#menu')).slideUp('normal');

                if (!checkElement.hasClass('sub-menu')) {
                    // module

                    $('#menu li a').removeClass('current-toggle-link-main');
                    $('#menu li a').addClass('toggle-link-main')
                } else {
                    checkElement.addClass('toggle-link-sub LessonGradient')
                }
                //$('#menu li a').removeClass('lessionOpen');
                /*if($(this).hasClass("completed"))
                $(this).find(".iconHolder").attr("src","components/menu/images/menu_indicator1.png")
                else
                $(this).find(".iconHolder").attr("src","components/menu/images/menu_indicator1.png")
                */


                //DONT DELETE BELOW CODE
                /*
                //one page then don't slide down, load page.
                if(jQuery(this.parentElement).find("li").length > 1){
                	checkElement.slideDown('normal');
                	//checkElement.find("#arrowCls").removeClass("arrowOpen").addClass("arrowClose")

                	$(this).addClass('lessionOpen');
                	$(this).find("#arrowCls").removeClass("arrowClose").addClass("arrowOpen")
                }else{
                	$(this).addClass('lessionOpen');
                	$(this).find("#arrowCls").removeClass("arrowClose").addClass("arrowOpen")
                	var lPageId = $(this.parentElement.getElementsByTagName('li')).attr('id')
                	fnOnMenuItemClick(lPageId,true)
                }
                */
                checkElement.slideDown('normal');
                $(this).addClass('lessionOpen');
                $(this).find("#arrowCls").removeClass("arrowClose").addClass("arrowOpen")

                ///////////////////
                if (checkElement.parent().attr('level') == 1) {

                    //if(checkElement.parent().hasClass('module')){
                    checkElement.parent().find("a").each(function() {

                        if ($(this).hasClass('forSelection')) {
                            $(this).removeClass('toggle-link-main');
                        } else {
                            $(this).removeClass('toggle-link-main');
                            $(this).addClass('current-toggle-link-main');
                            //checkElement.parent().find("a").removeClass('toggle-link-main');
                            //checkElement.parent().find("a").addClass('current-toggle-link-main');
                        }
                    });
                    //}
                }

                return false;
            }
        });
    // Prabhat Disable selected class
    /*if($($('#menu li a.current-toggle-link-sub')[0].parentElement).find("li").length == 1){
    	$('#menu li a.current-toggle-link-sub').unbind('click');
    	$('#menu li a.current-toggle-link-sub').css('pointer','default');
    	// not working due to element is <a>
    }*/

}

function fnGetCurrentLessonNum(num) {
    var tempNum = parseInt(num) + 1;
    if (tempNum < 10) {
        num = "0" + tempNum + ". ";
    } else {
        num = tempNum + ". ";
    }
    return num;
}

function findNextTopicId() {
    var nextTopicId = "";
    var currentTopicFound = false;
    for (var i = 0; i < gModuleArr.length; i++) {
        for (var j = 0; j < gModuleArr[i].Lessons.length; j++) {
            for (var k = 0; k < gModuleArr[i].Lessons[j].Topics.length; k++) {
                if (currentTopicFound) {
                    nextTopicId = gModuleArr[i].Lessons[j].Topics[k].attr("ID");
                    break;
                }
                if (gCurrTop == k && gCurrLess == j && gCurrMod == i) {
                    currentTopicFound = true
                }

            }
            if (nextTopicId != "") {
                break;
            }
        }
        if (nextTopicId != "") {
            break;
        }
    }
    return nextTopicId;
}

function findNextPageId() {
    var nextPageId = "";
    var currentPageFound = false;
    for (var i = 0; i < gModuleArr.length; i++) {
        for (var j = 0; j < gModuleArr[i].Lessons.length; j++) {
            for (var k = 0; k < gModuleArr[i].Lessons[j].Topics.length; k++) {
                for (var l = 0; l < gModuleArr[i].Lessons[j].Topics[k].Pages.length; l++) {
                    if (currentPageFound) {
                        nextPageId = gModuleArr[i].Lessons[j].Topics[k].Pages[l].attr("ID");
                        break;
                    }
                    if (gCurrPage == l && gCurrTop == k && gCurrLess == j && gCurrMod == i) {
                        //gModuleArr[i].Lessons[j].Topics[k].Pages[l].attr
                        currentPageFound = true;
                        //console.log("len = "+gModuleArr[i].Lessons[j].Topics[k].Pages.length+" l = "+l)
                        if ((gModuleArr[i].Lessons[j].Topics[k].Pages.length - 1) == l) {
                            //alert("Last Page")
                            isLastTopicPage = true;
                        }
                    }

                }
                if (nextPageId != "") {
                    break;
                }
            }
            if (nextPageId != "") {
                break;
            }
        }
        if (nextPageId != "") {
            break;
        }
    }
    return nextPageId;
}

function assessmentLockFun() {
    if ($("#lM0L1T1 .assessmentLockVar").length >= $("#lM0L1T1 li").length - 1) { assessmentLockLevel_1 = true; };
    if (assessmentLockLevel_1 == true) {
        $("#M0L2T1P8").addClass("CLSSVISITED");
        $("#M0L2T1P8 a").removeClass("lockHover");
        //console.log("Unlock>>>")
    } else {
        $("#M0L2T1P8").removeClass("CLSSVISITED");
        $("#M0L2T1P8 a").addClass("lockHover");
        //console.log("lock>>>")
    }


}

function fnCheckAssessmentPageLock() {

    isAssessmentLock = (oXML.find("ONLYASSESSMENTLOCK").text().toLowerCase() == "true");
    if (closedNavigation == "true") {
        isAssessmentLock = true;
    }
    //if other pages visited then isAssessmentLock should false
    if ((gModuleArr[0].Lessons.length - 1) == gCompLessArr.length) {
        isAssessmentLock = false;
    }

    return isAssessmentLock;
}