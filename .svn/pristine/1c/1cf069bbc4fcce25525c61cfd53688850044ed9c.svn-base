/*-----------------------------Main Function and Variables-----------------------*/
function Glossary() {
    /*-----------------------------CSS declarations---------------------------------*/
    var __$cContentContainer = $(".contentContainer");
    var __$iWordContainer = $("#wordContainer");
    var __$cMedNameContainer = $(".medicineNameContainer");
    var __$cDescMedNameContainer = $(".descMedNameContainer");
    var __$cMedDescContainer = $(".medDescContainer");
    var __$cChapterText = $(".chapterText");
    var __$cAudioIcon = $(".audioIcon");
    var __$iDropDownList = $(".dropDownClass");
    var __$iSearchBox = $("#search");
    var __$cPrevBtn = $(".prevBtn");
    var __$cNextBtn = $(".nextBtn");
    /*-----------------------------Array declarations-------------------------------*/
    var __$charArray = [];
    var __$visibleCharArr = [];
    var __$charValuesArr = [];
    var __$medTextArr = [];
    var __$medNodeArr = [];
    var __$disableAlphCharacter = [];
    var __$currentAlphabets = [];
    var __selectedAlphapets;
    /*-----------------------------variable declarations----------------------------*/
    var __dataXml;
    var __$cMedicineClass = "";
    var __$cAlphabetClass = "";
    var __$selectedMedName = 0;
    var __startNumber;
    var __wordValue = "";
    var __dropDownVal = 0;
    var __mediaPath = "";
    /*------------------------------ Xml Complete function ------------------------- */
    var __onXMLComplete = function(xml) {
            __dataXml = xml;
            $(__dataXml).find("characters").children().each(function(i, aChar) {
                //console.log(aChar);
                __$charArray.push(aChar);
            });
            __$cAudioIcon.hide();
            __createMedNames();
            __createAlphabets();
            __createDropDownList();
            __dropDownVal = __startNumber;
            __closeFunc();
            $(".medicineNameContainer").mCustomScrollbar();
        }
        /*------------------------------ Create Table Container function ------------------------- */
    var __createAlphabets = function() {
        for (var i = 0; i < __$charArray.length; i++) {
            //if($(__$charArray[i]).text() =="All"){
            __$iWordContainer.append("<td class='alphabets' id=" + $(__$charArray[i]).text() + ">" + $(__$charArray[i]).text() + "</td>");
            //}else{
            //if(__selectedAlphapets[i] == $(__$charArray[i]).text()){
            //console.log("Yes "+$(__$charArray[i]).text());
            //}else{
            //console.log("No "+$(__$charArray[i]).text());
            //}
            //__$iWordContainer.append("<td class='alphabets disableLetter'>"+$(__$charArray[i]).text()+"</td>");
            //}
            //console.log("Letters "+__selectedAlphapets[i]+" ::: "+$(__$charArray[i]).text());
            //if(__selectedAlphapets[i] == $(__$charArray[i]).text()){
            //__$iWordContainer.append("<td class='alphabets'>"+$(__$charArray[i]).text()+"</td>");
            //}else{

            //}
        }
        __$cAlphabetClass = $(".alphabets");
        __$cAlphabetClass.off("click");
        __$cAlphabetClass.on("click", __onAlphabetClick);
        __$cAlphabetClass.off("mouseover");
        __$cAlphabetClass.on("mouseover", __onAlphabetsMouseOver)
        __$cAlphabetClass.off("mouseout");
        __$cAlphabetClass.on("mouseout", __onAlphabetsMouseOut);
        __activeLetters();
    }

    var __activeLetters = function() {
            $("#wordContainer td.alphabets").addClass("disableLetter");
            $("#wordContainer td#All").removeClass("disableLetter").css("color", "#E4BA4E").css("text-decoration", "underline").css("font-weight", "bold");;
            for (var i = 0; i < __selectedAlphapets.length; i++) {
                //console.log(__selectedAlphapets[i]);
                $("#wordContainer td#" + __selectedAlphapets[i]).removeClass("disableLetter");
            }
        }
        /*------------------------------ close glossary ------------------------- */
    var __closeFunc = function() {
            $("#id_glosCloseBtn").off("click").click(function() {
                disableHelpPopup();
                $(".bgHelpPopup").remove();
                $(".HelpPopup").remove();
            });
        }
        /*------------------------------on Alphabet Click function ------------------------- */
    var __onAlphabetClick = function(aEvent) {
            console.log($(aEvent.currentTarget).hasClass("disableLetter"));
            if ($(aEvent.currentTarget).hasClass("disableLetter") == true) {

            } else {
                var _curNumber = 0
                var _alphabetVal = $(aEvent.currentTarget).text();
                var _medLetter = "";
                var _makeUpperCase = "";
                if (_alphabetVal == "All") {
                    __$cMedicineClass.show();
                    __addActiveClass(".medicineNameContainer .medicineClass", "#med_0")
                } else {
                    __$cMedicineClass.each(function(i, elem) {
                        _medLetter = ($(elem).attr("letter"));
                        //console.log($(elem).text() +":::"+i +":::"+$(elem).attr("Chapter")); //for testing repetetive words
                        _makeUpperCase = _medLetter.toUpperCase();
                        if (_makeUpperCase == _alphabetVal) {
                            $(elem).show();
                            if (_curNumber == 0) {
                                _curNumber = 1;
                                $(".medicineNameContainer #med_" + $(i)[0]).addClass("active");
                            }

                        } else {
                            $(elem).hide();
                        }
                    });
                }
                __$selectedMedName = 0;
                __$cAlphabetClass.removeAttr("style").css("color", "#5B5B5B");
                __$cAlphabetClass.off("mouseover");
                __$cAlphabetClass.on("mouseover", __onAlphabetsMouseOver)
                __$cAlphabetClass.off("mouseout");
                __$cAlphabetClass.on("mouseout", __onAlphabetsMouseOut);
                $(aEvent.currentTarget).off("mouseover");
                $(aEvent.currentTarget).off("mouseout");
                $(aEvent.currentTarget).removeAttr("style").css("color", "#E4BA4E").css("text-decoration", "underline").css("font-weight", "bold");
                __$iSearchBox.val("");
                __$cDescMedNameContainer.html("");
                __$cMedDescContainer.html("");
                __$cChapterText.html("");
                __$iDropDownList.val(0);
                __$cAudioIcon.hide();
                __createMedArray();
            }
        }
        /*------------------------------on Alphabet Mouse Over function ------------------------- */
    var __onAlphabetsMouseOver = function(aEvent) {
            if ($(aEvent.currentTarget).hasClass("disableLetter") == false) {
                $(aEvent.currentTarget).removeAttr("style").css("color", "#E4BA4E").css("text-decoration", "underline").css("font-weight", "bold");
            }
        }
        /*------------------------------on Alphabet Mouse Out function ------------------------- */
    var __onAlphabetsMouseOut = function(aEvent) {
        //if($(aEvent.currentTarget).hasClass("disableLetter") == false){
        $(aEvent.currentTarget).removeAttr("style").removeAttr("style").css("color", "#5B5B5B");
    }

    var __duplicateRemoveVal = function(aArray) {
            aArray.filter(function(elem, index, self) {

                return index === self.indexOf(elem);

            });
        }
        /*------------------------------ Create Medicine Names function ------------------------- */
    var __createMedNames = function() {
            var _medId = "";
            var _medClass = "medicineClass";
            var _styleText = "";
            var _remText = "";
            $(__dataXml).find("chapter").children().each(function(aNum, aMedName) {
                //console.log($(aMedName).attr("medName"));
                __$medTextArr.push($(aMedName).attr("medName").toLowerCase());
                __$medNodeArr.push(aMedName);
                __$currentAlphabets.push($(aMedName).attr("letter").toUpperCase());
                //$.get(decodeURIComponent($(aMedName).attr("audioFile")) + ".mp3");
            });
            __$medTextArr.sort();
            //console.log(__$medTextArr);
            for (var i = 0; i < __$medTextArr.length; i++) {
                //console.log("wordNumber::"+i+"::"+__$medTextArr[i]);
                //$.get(__mediaPath + decodeURIComponent(__$medTextArr[i]) + ".mp3");
                for (var j = 0; j < __$medNodeArr.length; j++) {
                    if (__$medTextArr[i] == $(__$medNodeArr[j]).attr("medName").toLowerCase()) {

                        //var _getCur = uniqBy(__$currentAlphabets, JSON.stringify)

                        _medId = "med_" + i;

                        __createDiv(__$cMedNameContainer, _medId, _medClass);
                        __updateAttributes($("#" + _medId), $(__$medNodeArr[j]));
                        //console.log($(__$medNodeArr[j]).attr("medName"))
                        $("#" + _medId).html($(__$medNodeArr[j]).attr("medName"));
                        //console.log($(__$medNodeArr[j]));
                        if ($(__$medNodeArr[j]).attr("styleType") == "italics") {
                            _styleText = $(__$medNodeArr[j]).attr("styleText");
                            //_styleText = $("#"+_medId).html().split('(')[0];
                            _remText = $("#" + _medId).html().split(_styleText)[1];
                            $("#" + _medId).html("<i>" + _styleText + "</i>" + _remText);
                        }
                        if ($(__$medNodeArr[j]).attr("styleType") == "doubleQuote") {
                            _styleText = $(__$medNodeArr[j]).attr("styleText");
                            //_styleText = $("#"+_medId).html().split('(')[0];
                            _remText = $("#" + _medId).html().split(_styleText)[1];
                            $("#" + _medId).html("&quot;" + _styleText + "&quot;" + " " + _remText);
                        }
                        if (_medId == "med_0") {
                            $(".medicineNameContainer #" + _medId).addClass("active");
                        }
                    }
                }
            }
            __$cMedicineClass = $("." + _medClass);
            __$cMedicineClass.off("click");
            __$cMedicineClass.on("click", __onMedNameClick);

            if (__startNumber != 0 && __wordValue == "none") {
                __showChapter(__startNumber, __wordValue);
            } else if (__startNumber != 0) {
                __showMedNameOfChapter(__startNumber, __wordValue);
            }
            __$iSearchBox.on("keyup", __onsearchKeyUp);
            __createMedArray();
            __showHideHextPrev();
            __activateButtons();

            __selectedAlphapets = __$currentAlphabets.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
            });
        }
        /*------------------------------Update Attributes function ------------------------- */


    var __updateAttributes = function(aTarget, aNode) {
            aTarget.attr({
                "chapter": aNode.parent().attr("chapNumber"),
                "defaultChap": 0,
                "description": aNode.text(),
                "letter": aNode.attr("letter"),
                "audioSource": aNode.attr("audioFile")
            });
        }
        /*------------------------------ On Medicine Name Click function ------------------------- */
    var __onMedNameClick = function(aEvent) {
        __addActiveClass(".medicineNameContainer .medicineClass", aEvent.currentTarget)
        var _audioSource = $(aEvent.currentTarget).attr("audioSource");
        //console.log(_audioSource);
        var _medName = $(aEvent.currentTarget).text();
        if ($(aEvent.currentTarget).css('font-style') == 'italic') {
            __$cDescMedNameContainer.html($(aEvent.currentTarget).html());
            __$cDescMedNameContainer.css('font-style', 'italic');
        } else {
            __$cDescMedNameContainer.html($(aEvent.currentTarget).html());
            __$cDescMedNameContainer.css('font-style', 'normal');
        }
        __$cMedDescContainer.html($(aEvent.currentTarget).attr("description"));
        __$cChapterText.html("Chapter" + " " + $(aEvent.currentTarget).attr("Chapter"));
        __refreshAudio(_audioSource);
        __$cAudioIcon.show();
        __$cAudioIcon.off("click");
        __$cAudioIcon.on("click", __onAudioIconClick);
        __$selectedMedName = $.inArray(_medName, __$visibleCharArr);
        __showHideHextPrev();
    }
    var __addActiveClass = function(aCurrentTarget, aCurrent) {
            $(aCurrentTarget).removeClass("active");
            $(aCurrent).addClass("active");
        }
        /*------------------------------ Refresh Audio function ------------------------- */
    var __refreshAudio = function(aSrc) {
            var _source = '<audio id="audio_player">';
            _source += '<source id="audio_player_ogv" src="' + decodeURIComponent(aSrc) + '.ogg"  type="audio/ogg" />';
            _source += '<source id="audio_player_mp3" src="' + decodeURIComponent(aSrc) + '.mp3"  type="audio/mpeg" />';
            _source += '</audio>';
            $('#divAudio_Player').html(_source);
        }
        /*------------------------------ on Audio Icon Click function ------------------------- */
    var __onAudioIconClick = function() {
            $('#audio_player').get(0).play();
        }
        /*------------------------------create Drop Down List function ------------------------- */
    var __createDropDownList = function() {
            $(__dataXml).find("chapter").each(function(aVal, aChap) {
                __$iDropDownList.append("<option value='" + $(aChap).attr("chapNumber") + "'>Chapter" + " " + $(aChap).attr("chapNumber") + "</option>");
            });
            __$iDropDownList.val(parseInt(__startNumber));
            __$iDropDownList.off("change");
            __$iDropDownList.on("change", __ondropDownselected);
        }
        /*-----------------------------drop down select Function ---------------------------------------*/
    var __ondropDownselected = function(aEvent) {
            var _selectedValAll = $(aEvent.currentTarget).find(":selected").text();
            var _selectedVal = $(aEvent.currentTarget).find(":selected").text().split(" ")[1];
            var _medChapter = 0;
            __dropDownVal = parseInt($(aEvent.currentTarget).val());
            if (_selectedValAll == "All Chapters") {
                __$cMedicineClass.show();
            } else {
                __$cMedicineClass.each(function(i, elem) {
                    _medChapter = $(elem).attr("chapter");
                    if (_medChapter == _selectedVal) {
                        $(elem).show();
                    } else {
                        $(elem).hide();
                    }
                });
            }
            __$selectedMedName = 0;
            __$cDescMedNameContainer.html("");
            __$cMedDescContainer.html("");
            __$cChapterText.html("");
            __$cAudioIcon.hide();
            __$cAlphabetClass.css("color", "#000000");
            __$iSearchBox.val("");
            __createMedArray();
        }
        /*------------------------------ Create div function ------------------------- */
    var __showMedNameOfChapter = function(aChapNumber, aWordVal) {
            var _chapterNum = aChapNumber;
            var _medChapter;
            var _word;
            __$cMedicineClass.each(function(i, elem) {
                _medChapter = $(elem).attr("chapter");
                _word = $(elem).text();
                if ((_medChapter == _chapterNum) && (_word == aWordVal)) {
                    $(elem).show();
                } else {
                    $(elem).hide();
                }
            });
            __createMedArray();
        }
        /*------------------------------ Create div function ------------------------- */
    var __showChapter = function(aChapNumber, aWordVal) {
        var _chapterNum = aChapNumber;
        var _medChapter;
        var _wordVal;
        __$cMedicineClass.each(function(i, elem) {
            _medChapter = $(elem).attr("chapter");
            _wordVal = $(elem).text();
            if (_medChapter == _chapterNum) {
                $(elem).show();
            } else {
                $(elem).hide();
            }
        });
        __createMedArray();
    }

    /*-------------------------------search function--------------------------------------*/
    var __onsearchKeyUp = function() {
            $(".medicineNameContainer .medicineClass").removeClass("active");
            var _curNumber = 0;
            var _string = __$iSearchBox.val();
            var _chapNum = 0;
            var _defaultChap = 0;
            _string = _string.toLowerCase();
            __$cMedicineClass.each(function(i, elem) {
                _medName = $(elem).text();
                _medLowerCase = _medName.toLowerCase();
                _chapNum = parseInt($(elem).attr("chapter"));
                _defaultChap = parseInt($(elem).attr("defaultChap"));
                result = _medLowerCase.match("^" + _string);
                if (_medLowerCase.indexOf(_string) > -1) {
                    $(elem).show();
                    if (_curNumber == 0) {
                        $(".medicineNameContainer #" + $(elem).attr("id")).addClass("active");
                        _curNumber = 1;
                    }
                } else {
                    $(elem).hide();
                }
            });
            $(".dropDownClass").val(0);
            __$cAlphabetClass.removeAttr("style").css("color", "#5B5B5B");
            __$cDescMedNameContainer.html("");
            __$cMedDescContainer.html("");
            __$cChapterText.html("");
            __$cAudioIcon.hide();
            __createMedArray();
        }
        /*------------------------------ Create Medicine Array function ------------------------- */
    var __createMedArray = function() {
            __$visibleCharArr = [];
            __$charValuesArr = [];
            __$cMedicineClass.each(function(i, elem) {
                if ($(elem).css("display") != "none") {
                    __$visibleCharArr.push($(elem).text());
                    __$charValuesArr.push(elem);
                }
            });
            if (__$visibleCharArr.length < 1) {
                __$cMedDescContainer.html("Sorry, your search did not match any terms.");
            } else {
                __displayDescription();
            }
            __showHideHextPrev();
            __$cMedNameContainer.scrollTop(0);
            __$selectedMedName = 0;
        }
        /*------------------------------ Activate buttons function ------------------------- */
    var __activateButtons = function() {
            __$cPrevBtn.off("click");
            __$cPrevBtn.on("click", __onPrevClick);
            __$cNextBtn.off("click");
            __$cNextBtn.on("click", __onNextClick);
        }
        /*------------------------------ on Previous Click function ------------------------- */
    var __onPrevClick = function() {
            __$selectedMedName--;
            __displayDescription();
            __showHideHextPrev();
        }
        /*------------------------------ on Next Click function ------------------------- */
    var __onNextClick = function() {
            __$selectedMedName++;
            __displayDescription();
            __showHideHextPrev();
        }
        /*------------------------------Display Description function ------------------------- */
    var __displayDescription = function() {
            if ($(__$charValuesArr[__$selectedMedName]).css('font-style') == 'italic') {
                __$cDescMedNameContainer.html($(__$charValuesArr[__$selectedMedName]).html());
                __$cDescMedNameContainer.css('font-style', 'italic');
            } else {
                __$cDescMedNameContainer.html($(__$charValuesArr[__$selectedMedName]).html());
                __$cDescMedNameContainer.css('font-style', 'normal');
            }
            //console.log($(__$charValuesArr[__$selectedMedName]).html());
            __$cMedDescContainer.html($(__$charValuesArr[__$selectedMedName]).attr("description"));
            __$cChapterText.html("Chapter" + " " + $(__$charValuesArr[__$selectedMedName]).attr("Chapter"));
            __refreshAudio($(__$charValuesArr[__$selectedMedName]).attr("audioSource"));
            __$cAudioIcon.show();
            __$cAudioIcon.off("click");
            __$cAudioIcon.on("click", __onAudioIconClick);
        }
        /*------------------------------ Show hide next previous button function ------------------------- */
    var __showHideHextPrev = function() {
            if (__$visibleCharArr.length < 1) {
                __$cNextBtn.hide();
                __$cPrevBtn.hide();
            } else if (__$visibleCharArr.length == 1) {
                __$cPrevBtn.hide();
                __$cNextBtn.hide();
            } else if (__$selectedMedName == 0) {
                __$cPrevBtn.hide();
                __$cNextBtn.show();
            } else if (__$selectedMedName == __$visibleCharArr.length - 1) {
                __$cNextBtn.hide();
                __$cPrevBtn.show();
            } else {
                __$cPrevBtn.show();
                __$cNextBtn.show();
            }
        }
        /*------------------------------ Create div function ------------------------- */
    var __createDiv = function(aTarget, aId, aClass) {
            aTarget.append("<div id='" + aId + "' class='" + aClass + "'></div>");
        }
        /*-------------------------------Loading Xml--------------------------------------*/
    var __loadXML = function() {
            $.ajax({
                type: "GET",
                url: "elements/glossary/data/glossary.xml",
                dataType: "xml",
                success: __onXMLComplete
            });
        }
        /*-----------------------------Init Function ---------------------------------------*/
    this.init = function(aNum, aWord, aMediaPath) {
        __startNumber = aNum;
        __wordValue = aWord;
        __mediaPath = aMediaPath;
        __loadXML();
    }
    this.destroy = function() {}
}