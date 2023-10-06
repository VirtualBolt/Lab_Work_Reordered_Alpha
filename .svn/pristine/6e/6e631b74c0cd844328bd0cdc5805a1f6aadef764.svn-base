var gLastClickedAlphabet;
var gGlossaryData = new Object();
var gArrGlossary = new Array();
var gGlosXML;

function fArrangeGlossary(lXML) {
    gGlosXML = lXML;
    var lTotalAlphabets = 26;

    for (var i = 1; i <= lTotalAlphabets; i++) {
        var lChar = String.fromCharCode(64 + i);
        jQuery('<div/>', {
            class: 'clsAlphabet' + i,
            id: i,
            text: lChar
        }).appendTo('.clsGlosTerm');

        $(".clsAlphabet" + i).addClass("clsGlosChar");
        $(".clsAlphabet" + i).bind({
            mouseenter: function (e) {
                /* $(this).css('background','#E77817'); */
                $(this).css('background-color', '#F7B600');
            },
            mouseleave: function (e) {
                /* $(this).css('background','#5686D6'); */
                $(this).css('background-color', '#649FD5');
            },
            click: function (e) {
                fClickAlphabet($(this));
            }
        });                
    }
        
    //Default setting
    $(".clsAlphabet1").addClass("clsFirstChar");
    $(".clsAlphabet1").unbind('mouseenter');
    $(".clsAlphabet1").unbind('mouseleave');
    $(".clsAlphabet1").unbind('click');
    gLastClickedAlphabet = $(".clsAlphabet1");

    var i = 0;
    gGlossaryData.AlphaDivision = new Array();
    gGlosXML.find("Glossary").find("AlphaDivision").each(function () {
        gGlossaryData.AlphaDivision[i] = new Object();
		
        gGlossaryData.AlphaDivision[i].lAlphaChar = $(this).attr("alpha");
        gGlossaryData.AlphaDivision[i].ListEntry = new Array();
        var j = 0;

        if ($(this).find("ListEntry").length == 0) //Disabled if Glossary Entry not found in xml.
        {
            /* $(".clsAlphabet"+(i+1)).css({'cursor':'default',
            						'background':'#A2A2A2',
            						'color':'#888'
            }); */
            $(".clsAlphabet" + (i + 1)).css({
                'cursor': 'default',
                'background-color': '#BFBEBE',
				'color':'#888888'
            });

            $(".clsAlphabet" + (i + 1)).unbind('mouseenter');
            $(".clsAlphabet" + (i + 1)).unbind('mouseleave');
            $(".clsAlphabet" + (i + 1)).unbind('click');
        } else {            
            $(this).find("ListEntry").each(function () {
                gGlossaryData.AlphaDivision[i].ListEntry[j] = new Object();
                gGlossaryData.AlphaDivision[i].ListEntry[j].lTerm = $(this).find("Term").text();
                gGlossaryData.AlphaDivision[i].ListEntry[j].lDefinition = $(this).find("Definition").text();
                j++;
            });
            
            // Below lines are added for 508 accessibility.
            arrTabIndexUpdate.push(".clsAlphabet" + (i + 1));
        }
        i++;
    });
    // Below lines are added for 508 accessibility.
    updateTabIndex(arrTabIndexUpdate, '#id_glosCloseBtn');
    
    gArrGlossary = gGlossaryData.AlphaDivision;
    fSetGlosContent(gLastClickedAlphabet);
}

function fClickAlphabet(lCurAphabet) {
    /* gLastClickedAlphabet.css({'background':'#5686D6',
    						'cursor':'pointer',
    						'height':'100%'
    }); */

    gLastClickedAlphabet.css({
       'background-color': '#649FD5',
        'cursor': 'pointer'
    });

    gLastClickedAlphabet.bind({
        mouseenter: function (e) {
            /* $(this).css('background','#E77817'); */
            $(this).css('background-color','#F7B600');
        },
        mouseleave: function (e) {
            /* $(this).css('background','#5686D6'); */
            $(this).css('background-color','#649FD5');
        },
        click: function (e) {
            fClickAlphabet($(this));
        }
    });

    /* lCurAphabet.css({'border-bottom':'none',
    						'background':'#E77817',
    						'cursor':'default',
    						'height':'100%'
    }); */
    lCurAphabet.css({
        'border-bottom': 'none',
       'background-color': '#F7B600',
        'cursor': 'default'
    });

    lCurAphabet.unbind('mouseenter');
    lCurAphabet.unbind('mouseleave');
    lCurAphabet.unbind('click');
    gLastClickedAlphabet = lCurAphabet;
    fSetGlosContent(lCurAphabet);
}

function fSetGlosContent(lCurAphabet) {
    $('.clsGlosDescription').empty();
    var lCurChar = lCurAphabet.text();
    var lCurIndex = 0;
    for (var i = 0; i < gArrGlossary.length; i++) {
        if (gArrGlossary[i].lAlphaChar == lCurChar) {
            lCurIndex = i;
        }
    }
	console.log(gArrGlossary[0].ListEntry);
    for (var j = 0; j < gArrGlossary[lCurIndex].ListEntry.length; j++) {
        var lStr = "<b>" + gArrGlossary[lCurIndex].ListEntry[j].lTerm + "</b><br>" + gArrGlossary[lCurIndex].ListEntry[j].lDefinition + "<br><br>";
        $('.clsGlosDescription').append(lStr);
    }
}