// These codes provide 508 accessibility.
var arrTabIndex = [];
var strLastEscSel = '';
var bIs508 = false;
var bIsCtrlPressed = bIsShiftPressed = false;

function removeTabIndex(){
    var nLen = arrTabIndex.length;    
    for(var i = 0; i < nLen; i++){
        $(arrTabIndex[i]).removeAttr('tabindex').unbind('keyup');
    }
    
//    $('*').attr('tabindex', -1)
}

/*
p_arrTabIndex   -> tab index items
p_strFocus      -> Focus on given item
p_bIsEsc        -> Enable Esc key action
p_strEscAction  -> Esc key action element
*/
function updateTabIndex(p_arrTabIndex, p_strFocus, p_bIsEsc, p_strEscAction){
    if(!bIs508)
        return;
    
    removeTabIndex();    
    arrTabIndex = p_arrTabIndex
    var nLen = arrTabIndex.length;    
        
    for(var i = 0; i < nLen; i++){        
        $(arrTabIndex[i]).attr('tabindex', (i + 1)).unbind('keyup').bind('keyup', function(p_evt){
            p_evt.stopImmediatePropagation();            
            action4HotKeys(p_evt.keyCode);
                        
            if(p_evt.keyCode == 13 || p_evt.keyCode == 32){
				$(this).click();
//                console.log($(this).html());
//                console.log($(this).attr('tabindex'));
            }
            else if(p_bIsEsc && p_evt.keyCode == 27)
                $(p_strEscAction).click();
		});
    }
    
    if(p_bIsEsc)
        $(p_strEscAction).focus();
    else if(p_strFocus)
        $(arrTabIndex[0]).focus();    
}

// Enable hot keys to control the player's button. [Ctrl(17) + Shift(16)]
function enableHotKeys(){
    $('body').bind('keydown', function(p_evt){
        p_evt.stopImmediatePropagation();
//        console.log('You pressed key : ' + p_evt.keyCode);
        if(p_evt.keyCode == 17)
            bIsCtrlPressed = true;
        if(p_evt.keyCode == 16)
            bIsShiftPressed = true;
    });
}

/*
Action on press hot keys to control the player's button.
[Ctrl(17) + Shift(16)]
Exit 		-> X(88)
Menu 		-> M(77)
Help 		-> H(72)
Glossary 	-> L(76)
Play/Pause 	-> A(65)
Replay 		-> Y(89)
Transcript 	-> C(67)
Back 		-> B(66)
Next 		-> F(70)
*/
function action4HotKeys(p_keyCode){
//        console.log('You released key : ' + p_keyCode);
    if(p_keyCode == 17)
        bIsCtrlPressed = false;
    if(p_keyCode == 16)
        bIsShiftPressed = false;
    
    if(!bIsCtrlPressed || !bIsShiftPressed)
        return;
    
    switch(p_keyCode){
        case 88:
            $('#clsExitBtn').click();
            break;
        case 77:
            $('#clsMnuBtn').click();
            break;
        case 72:
            $('#clsHelpBtn').click();
            break;
        case 76:
            $('#clsGlosBtn').click();       
            break;
        case 65:
            $('#clsPlayPauseBtn').click();
            break;
        case 89:
            $('#clsReplay').click();
            break;
        case 67:
            $('#transcriptBtn').click();
            break;
        case 66:
            $('#clsBackBtn').click();
            break;
        case 70:
            $('#clsNxtBtn').click();
            break;
    }
}




















