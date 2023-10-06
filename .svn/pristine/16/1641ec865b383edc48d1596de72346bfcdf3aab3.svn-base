var tinCanWrapper = {
    init: function() {
        xapiFlag = "live";
        console.log("TinCan Initialized");
        if (xapiFlag == "testing"){
            //testing
            _endpointValDef = "https://cloud.scorm.com/lrs/JZ3B7T63HK/";
            _username = "chelladurai.s@ansrsource.com";
            _pwd = "Manithai@123";
            tincan = new TinCan({
                recordStores: [{
                    endpoint: _endpointValDef,
                    username: _username,
                    password: _pwd,
                    //auth: authVal,
                    allowFail: false
                }]
            });
        }else{
            //live 
            tincan = new TinCan({ url: window.location.href });
        }
        tinCanWrapper.sendStatementData("attempted", "sugar-module", "Sugar and Safe Care");
    },
    getStatementFromTincan: function() {
        tincan.getStatements({
            'callback': function(err, result) {
                console.log("Result Statements " + JSON.stringify(result.statements));
            }
        });
    },
    sendStatementData: function(aVerbId, aVerbDisplay, aVerbDesc) {
        if (xapiFlag == "testing") {
            //testing
            tincan.sendStatement({
                    actor: {
                        mbox: "mailto:" + _username
                    },
                    verb: {
                        id: "http://adlnet.gov/expapi/verbs/" + aVerbId,
                    },
                    target: {
                        id: "https://experienceapi.com/activities/" + aVerbDisplay,
                        "definition": {
                            "name": {
                                "en-US": aVerbDesc
                            }
                        }
                    }
                },
                function(err, result) {
                    // console.log(JSON.stringify(result, null, 4));
                }
            );
        } else {
            //live
            tincan.sendStatement({
                verb: {
                    id: "http://adlnet.gov/expapi/verbs/" + aVerbId,
                },
                target: {
                    id: "https://experienceapi.com/activities/" + aVerbDisplay,
                    "definition": {
                        "name": {
                            "en-US": aVerbDesc
                        }
                    }
                }
            });
        }
    },
    sendStatementWithScore: function(aVerbId, aResultCompleteStatus, aResultStatus, aResultScore) {
        var scoreVerb = '';
        if (aResultScore == 100) {
            scoreVerb = {
                "scaled": 1,
                "raw": aResultScore,
                "min": 0,
                "max": 100
            }
        } else {
            var _scoreVal = "0." + aResultScore,
                _scoreNumber = Number(_scoreVal);
            scoreVerb = {
                "scaled": _scoreNumber,
                "raw": aResultScore,
                "min": 0,
                "max": 100
            }
        }


        if (xapiFlag == "testing") {
            tincan.sendStatement({
                actor: {
                    mbox: "mailto:" + _username
                },
                verb: {
                    id: "http://adlnet.gov/expapi/verbs/" + aVerbId,
                },
                object: {
                    "id": "http://example.com/activities/sugar-assessment",
                    "definition": {
                        "name": {
                            "en-US": "Assessment"
                        }
                    }
                },
                result: {
                    "completion": aResultCompleteStatus,
                    "success": aResultStatus,
                    "score": scoreVerb
                }
            });

        } else {
            tincan.sendStatement({
                verb: {
                    id: "http://adlnet.gov/expapi/verbs/" + aVerbId,
                },
                object: {
                    "id": "http://example.com/activities/sugar-assessment",
                    "definition": {
                        "name": {
                            "en-US": "Temperature Assessment"
                        }
                    }
                },
                result: {
                    "completion": aResultCompleteStatus,
                    "success": aResultStatus,
                    "score": scoreVerb
                }
            });
        }

    }
}