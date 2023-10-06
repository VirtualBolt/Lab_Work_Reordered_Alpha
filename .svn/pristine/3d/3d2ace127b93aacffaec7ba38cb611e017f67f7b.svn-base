var arrAssetsInfo;
var strBasePath;
var nCurPageNum = 1;
var nBgAstCurIndex;
var nBgAstLdgCount;
var objImage;

function loadAssetsXml() {
    $.get("bgLoadingAssets.xml", function (data) {
        objAssetsXml = data;
        parseAssetsData(data);
    });
}

function parseAssetsData(p_data) {
    objImage = $('<img id="iDynamicImg">');
    objImage.load(onLoadedBgImg);
    objImage.error(onLdgErrorBgImg);

    strBasePath = $(p_data).find('basePath').text();
    arrAssetsInfo = [];
    var objAssetsData;
    var arrImgSrc;
    var xmlImgSrc;
    var xmlPages = $(p_data).find("page");
    xmlPages.each(function () {
        objAssetsData = new Object();
        objAssetsData.pageId = $(this).attr("pageId");
        objAssetsData.arrImgSrc = [];
        xmlImgSrc = $(this).find("imgSrc");
        xmlImgSrc.each(function () {
            objAssetsData.arrImgSrc.push($(this).text());
        });
        arrAssetsInfo.push(objAssetsData);
    });
}

function loadBgAssetsById(p_strPageId) {
    nBgAstLdgCount = 0;
    nBgAstCurIndex = -1;
    var nLen = arrAssetsInfo.length;

    for (var i = 0; i < nLen; i++) {
        if (arrAssetsInfo[i].pageId == p_strPageId) {
            nBgAstCurIndex = i;
            break;
        }
    }

    if (nBgAstCurIndex != -1)
        loadBgAssets();
}

function loadBgAssets() {
    if (nBgAstLdgCount < arrAssetsInfo[nBgAstCurIndex].arrImgSrc.length) {
        objImage.attr('src', strBasePath + arrAssetsInfo[nBgAstCurIndex].arrImgSrc[nBgAstLdgCount]);
    } else {
        arrAssetsInfo.splice(nBgAstCurIndex, 1);
    }
}

function onLoadedBgImg() {
    nBgAstLdgCount++;
    loadBgAssets();
}

function onLdgErrorBgImg() {
    nBgAstLdgCount++;
    loadBgAssets();
}