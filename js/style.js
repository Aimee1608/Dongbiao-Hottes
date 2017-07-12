function landscape(){
    document.addEventListener("WeixinJSBridgeReady", function () {
        audioAutoPlay('musicStar');
    }, false);
    var firstTouch = true;
    $('body').bind("touchstart",function(e){
        if ( firstTouch ) {
            firstTouch = false;
            musicStar.play();
        }else{
            return;
        }
    });
    //动画开始播放音乐
    musicStar.load();
    musicStar.src="video/Echo.mp3";
    musicStar.play();
    $(".open").click(function(){
        musicStar.pause();
        $(this).css("display","none");
        $(".clock").css("display","block");
        $('.btn-music').removeClass('open-music');
    });
    $(".clock").click(function(){
        musicStar.play();
        $(this).css("display","none");
        $(".open").css("display","block");
        $('.btn-music').addClass('open-music');
    });
    //第一版click事件
//  $('#close-userInfo').click(function(){
//      $('#userInfo').hide();
//  });
//  $('#gotoInfo').click(function(e){
//      e.preventDefault();
//      $('#userInfo').show();
//      $('#rule-icon').click(function(){
//          $('#actionRules').show();
//          $('#userInfo').hide();
//      });
//      $('#actionRules').unbind('click').bind('click',function(){
//          $('#actionRules').hide();
//          $("#userInfo").show();
//      });
//      ProvinceData.init('ddlProvince', 'ddlCity','agency');
//      SaveInfo.init();
//
//  });
//  $("#gotoInfo02").click(function(e){
//      e.preventDefault();
//      $('.usercar').css("display","block");
//      $('#buycar').css("display","block");
//  });
//  $(".closecar").click(function(e){
//      e.preventDefault();
//      $('.usercar').css("display","none");
//     $('#buycar').css("display","none");
//  })

     //第二版click事件
    $("#join").click(function(e){
    	e.preventDefault();
    	//$("#ending").animate({"left":"-100%"},600);
    	//$("#ending02").animate({"left":"0"},600);

        $("#ending").addClass('hide');
        $("#ending02").addClass('show');
        $('#rule-icon').click(function(){
          $('#actionRules').show();
          $('#userInfo').hide();
      });
      $('#actionRules').unbind('click').bind('click',function(){
          $('#actionRules').hide();
          $("#userInfo").show();
      });
      ProvinceData.init('ddlProvince', 'ddlCity','agency');
      SaveInfo.init();
    });
     
     
     
    $(function(){
        var w =window.Utils.windowW();
        var h = window.Utils.windowH();
        init();
        $("#portrait").css("display","none");
        $('#landscape').css({'display':'block'});
        $("body").css({"width":w,"height":h});
    });
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        var iw = window.Utils.windowW();
        var ih = window.Utils.windowH();
        canvas = document.getElementById("canvas");
        canvas.width = iw;
        canvas.height = ih;
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        $('#anim_container').css({'width':iw,'height':ih});
        $('#canvas').css({'width':iw,'height':ih});
        $('#dom_overlay_container').css({'width':iw,'height':ih});
        images = images||{};
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for(i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }
        exportRoot = new lib.PEUGEOT();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.enableMouseOver();
        //Registers the "tick" event listener.
        fnStartAnimation = function() {
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", handleTick)
            function handleTick(event) {
                var cameraInstance = exportRoot.___camera___instance;
                if(cameraInstance)
                {
                    if(cameraInstance._off != null && cameraInstance._off == true)
                        exportRoot.transformMatrix = new createjs.Matrix2D();
                    else
                    {
                        var mat = cameraInstance.getMatrix();
                        var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
                        mat.tx -= stageCenter.x;
                        mat.ty -= stageCenter.y;
                        var inverseMat = mat.invert();
                        inverseMat.prependTransform(stageCenter.x, stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
                        inverseMat.appendTransform(-stageCenter.x, -stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
                        exportRoot.transformMatrix = inverseMat;
                    }
                }
                stage.update();
            }
        };
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {
            var lastW, lastH, lastS=1;
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            function resizeCanvas() {
                var w = lib.properties.width, h = lib.properties.height;
                var iw = window.innerWidth, ih=window.innerHeight;
                var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
                if(isResp) {
                    if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                        sRatio = lastS;
                    }
                    else if(!isScale) {
                        if(iw<w || ih<h)
                            sRatio = Math.min(xRatio, yRatio);
                    }
                    else if(scaleType==1) {
                        sRatio = Math.min(xRatio, yRatio);
                    }
                    else if(scaleType==2) {
                        sRatio = Math.max(xRatio, yRatio);
                    }
                }
                canvas.width = w*pRatio*sRatio;
                canvas.height = h*pRatio*sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
                stage.scaleX = pRatio*sRatio;
                stage.scaleY = pRatio*sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;
            }
        }
        makeResponsive(true,'width',true,2);
        fnStartAnimation();
    }

}

function portrait(){
    $(function(){
        if(musicStar.played){
            musicStar.pause();
        }
        var w = window.innerWidth;
        var h = window.innerHeight;
        $("body").css({"width":w,"height":h});
        $('#landscape').css({'display':'none'});
        $("#portrait").css("display","block");
    })

}
//landscape();
(function() {
    "use strict";

    function Utils() {
    }

    Utils.isWeiXin = function(){
        return navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
    }
    Utils.isQQ = function(){
        return navigator.userAgent.ua.match(/QQ\/([\d\.]+)/);
    }
    Utils.isQZone = function(){
        return navigator.userAgent.ua.indexOf("Qzone/") !== -1;
    }

    Utils.isIos = function() {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }
    Utils.isIPhone = function() {
        return navigator.userAgent.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;
    }
    Utils.isIpad = function() {
        return navigator.userAgent.indexOf('iPad') > -1;
    }
    Utils.isAndroid = function() {
        var u = navigator.userAgent;
        return navigator.userAgent.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    };
    Utils.isMobile = function() {
        // var u = navigator.userAgent;
        return navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i) != null;
    };

    // ## 屏幕方向
    Utils.isPortrait = function() {
        if (!Utils.isMobile()) {
            return true;
        }
        // 安卓版 微信里面 只用判断 width 和 height
        if (Utils.isAndroid() && Utils.isWeiXin()) {
            if (Utils.windowW() < Utils.windowH()) {
                return true;
            } else {
                return false;
            }
        }
        var orientation = window['orientation']
        if (orientation) {
            if (orientation == 180 || orientation == 0) {
                return true;
            }
            if (orientation == 90 || orientation == -90) {
                return false;
            }
        } else {
            if (Utils.windowW() < Utils.windowH()) {
                return true;
            } else {
                return false;
            }
        }
    };
    // ## jquery 获取 window 的宽度
    Utils.windowW = function() {
        // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        return $(window).width();
    };
    // ## jquery 获取 window 的高度
    Utils.windowH = function() {
        return $(window).height();
    };
    window.Utils = Utils;
}());
$(function(){
    onResize();
});

function  onResize() {
        if(Utils.isPortrait()){
            portrait();
        } else {
            if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
                setTimeout(function(){
                    landscape();
                },100);
            }else{
                landscape();
            }

        }

}

    if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", onResize, false);
    }else{
        window.addEventListener( "resize", onResize, false);
    }





