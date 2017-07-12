/**
 * Created by jiangqian on 2017/1/12.
 */
//var musicStar = document.getElementById('musicStar');
//var musicChange = document.getElementById('musicChange');
//$(function(){
//    var musicStar = document.getElementById('musicStar');
//    var musicChange = document.getElementById('musicChange');
//    musicStar.load();
//    musicStar.src="res/music-one.mp3";
//    musicStar.play();
//});
/***�ж�ͼƬ�Ƿ������ɡ����ٷֱ���ʾ**/
function funImgLoading(containID,txtID,fnComplete) {
    if (sessionStorage.getItem("pageloaded")=="true") {
        fnComplete();
        return false;
    }
    var box = document.getElementById(containID);
    var domTag = box.getElementsByTagName("*");
    var domLen = domTag.length;

    var imgLoadedNum = 0;

    var imgAllNum = 0;

    var loadDiv = document.getElementById(txtID);

    for(var i = 0; i < domLen; i++) {
        var thisDom = domTag[i];

        var imgUrl = window.getComputedStyle(thisDom).getPropertyValue("background-image");


        var imgNewUrl = imgUrl.match(/[^url\("'](.+)[^'"\)]/g);


        if(imgNewUrl[0].indexOf("/") != -1) {

            imgAllNum++;

            var imgNewUrlStr = imgNewUrl[0];

            var bgimgElement = document.createElement("img");
            bgimgElement.setAttribute("src", imgNewUrlStr);

            bgimgElement.addEventListener("load", funLoad);

        }

        else if(thisDom.tagName == "IMG") {

            imgAllNum++;

            if(thisDom.complete){

                ++imgLoadedNum;
            }else{

                thisDom.addEventListener("load", funLoad);
            }

        }
    }

    function funLoad() {
        //�����
        var percent = parseInt((++imgLoadedNum) / imgAllNum * 100);
        loadDiv.innerHTML = percent+'%';
        $('#img-loading-txt').html(percent+'%');
        $('#portrait').css('display','none');
        // console.log(percent);
        if (percent<=50) {
        } else {
            if(percent >= 100) {
                setTimeout(fnComplete,500);
                $('#portrait').fadeIn();
                sessionStorage.setItem("pageloaded", "true");
            }
        }
    }
}
var loadingPage = document.getElementById("loadingPage");

funImgLoading("page-box","img-loading-txt",function(){
    if(sessionStorage.getItem("pageloaded")){
        loadingPage.style.display = "none";
        $('#portrait').fadeIn();
    }
});
/******rem ����*******/
(function(win){
    var remCalc = {};
    var docEl = win.document.documentElement,
        tid,
        hasRem = true;
    hasZoom = true;
    designWidth = 750;
    function refresh(){
        var width = docEl.getBoundingClientRect().width;
        if(hasRem){
            var rem = width/10;
            docEl.style.fontSize = rem + "px";
            remCalc.rem = rem;
            var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
            if(actualSize!== rem && actualSize>0 && Math.abs(actualSize-rem)>1){
                var remScaled = rem*rem/actualSize;
                docEl.style.fontSize = remScaled + "px";
            }
        }
        if(hasZoom){
            var style = document.getElementById('y_style');
            if(!style){
                style = document.createElement('style');
                style.id = 'y_style';
            }
            style.innerHTML = '._z{zoom:'+ width/designWidth + '}';
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
    function dbcRefresh(){
        clearTimeout(tid);
        tid = setTimeout(refresh,100);
    }
    win.addEventListener("resize",function(){
        dbcRefresh()
    },false);
    win.addEventListener("pageshow",function(e){
        if(e.persisted){
            dbcRefresh()
        }
    },false);
    refresh();
    if(hasRem){
        remCalc.refresh = refresh;
        remCalc.rem2px = function(d){
            var val = parseFloat(d)/this.rem;
            if(typeof d==="string" && d.match(/px$/)){
                val+="rem";
            }
            return val
        };
        win.remCalc = remCalc;
    }
})(window);

	//音乐暂停播放
    //musicStar.pause();
    //musicChange.play();


