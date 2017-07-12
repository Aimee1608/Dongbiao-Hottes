/**
 * Created by jiangqian on 2017/3/20.
 */
/**
 * Created by jiangqian on 2017/1/12.
 */
var musicStar = document.getElementById('musicStar');
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        //alert('����״̬��');
        if(musicStar.played){
            musicStar.pause();
        }
    }
    if (window.orientation === 90 || window.orientation === -90 ){
        //alert('横屏状态！');
        var w = window.innerWidth;
        var h = window.innerHeight;
        $(function(){
            init();
        });
        $("#portrait").css("display","none");
        $("body").css({"width":w,"height":h});
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
        /**
         * Created by jiangqian on 2017/3/18.
         */
        var SaveInfo = {
            username:null,
            phone:null,
            province:null,
            city:null,
            agency:null,
            cartype:null,
            init:function(){
                this.updateView();
            },
            updateView:function(){
                SaveInfo.inputReg();
                SaveInfo.submit();
            },
            inputReg:function(){
                $('input[name="username"]').blur(function(){
                    if(this.validity.valid){
                        $('input[name="username"]').parent().removeClass('red');
                    }else{
                        $('input[name="username"]').parent().addClass('red');
                    }
                });
                $('input[name="username"]').focus(function(){
                    if(this.validity.valid) {
                        $('input[name="username"]').parent().removeClass('red');
                    }else{
                        $('input[name="username"]').parent().addClass('red');
                    }
                });
                $('input[name="phone"]').blur(function(){
                    var reg = /^1[34578]\d{9}$/;
                    var val = $(this).val();
                    if(reg.test(val)){
                        $(this).parent().removeClass('red');
                    }else{
                        $(this).parent().addClass('red');
                    }
                });
                $('input[name="phone"]').focus(function(){
                    $(this).keyup(function(){
                        if(this.validity.valid){
                            $(this).parent().removeClass('red');
                        }else{
                            $(this).parent().addClass('red');
                        }
                    })
                });
            },
            clickReg:function(){
                var usernameReg = false,phoneReg = false,provinceReg = false,cityReg = false,agencyReg = false,cartypeReg = false;
                var inputUsername = document.getElementById('username');
                if(inputUsername.validity.valid){
                    usernameReg = true;
                }else{
                    usernameReg = false;
                }
                var reg = /^1[34578]\d{9}$/;
                if(reg.test($('input[name="phone"]').val())){
                    phoneReg = true;
                }else{
                    phoneReg = false;
                }
                function selectReg(selectName){
                    var val = $('select[name='+selectName+'] option:selected').val();
                    var reg;
                    if(val&&val!=-1){
                        reg = true;
                    }else{
                        reg = false;
                    }
                    return reg;
                }
                provinceReg = selectReg('ddlProvince');
                cityReg = selectReg('ddlCity');
                agencyReg = selectReg('agency');
                cartypeReg = selectReg('cartype');
                var total = usernameReg&&phoneReg&&provinceReg&&cityReg&&agencyReg&&cartypeReg;
                console.log(usernameReg,phoneReg,provinceReg,cityReg,agencyReg,cartypeReg);
                return total;
            },
            submit:function(){
                $('#btn-userInfo').click(function(e){
                    e.preventDefault();
                    if(SaveInfo.clickReg()){
                        SaveInfo.username = $('input[name="username"]').val();
                        SaveInfo.phone = $('input[name="phone"]').val();
                        SaveInfo.province = $('select[name="ddlProvince"] option:selected').val();
                        SaveInfo.city = $('select[name="ddlCity"] option:selected').val();
                        SaveInfo.agency = $('select[name="agency"] option:selected').val();
                        SaveInfo.cartype = $('select[name="cartype"] option:selected').val();
                        var key = $("input[name='key']").val();
                        var data = {
                            username:SaveInfo.username,
                            numberphone:SaveInfo.phone,
                            dealer:SaveInfo.province+','+SaveInfo.city+','+SaveInfo.agency,
                            model:SaveInfo.cartype,
                            key:key
                        };
                        console.log(data);
                        $.ajax({
                            url:'http://fld.xingyuanauto.com/public/index.php/port/Userdblotter/UserLotter',
                            type:'post',
                            data:data,
                            success:function(obj){
                                console.log(obj);
                                obj = JSON.parse(obj);
                                if(obj.start==2004){
                                    console.log(777);
                                    $('#userInfo-box').hide();
                                    $('#prizeResult').show();
                                    if(obj.msg==1){
                                        $('#prizeResult h1').removeClass('notGet').addClass('get');
                                        $('#prizeResult h1 i').html('恭喜您，中了一等奖');
                                        $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
                                    }else if(obj.msg==2){
                                        $('#prizeResult h1').removeClass('notGet').addClass('get');
                                        $('#prizeResult h1 i').html('恭喜您，中了二等奖');
                                        $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
                                    }else if(obj.msg==3){
                                        $('#prizeResult h1').removeClass('notGet').addClass('get');
                                        $('#prizeResult h1 i').html('恭喜您，中了三等奖');
                                        $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
                                    }else{
                                        $('#prizeResult h1').addClass('notGet').removeClass('get');
                                        $('#prizeResult h1 i').html('很抱歉，您没有中奖');
                                        $('#prizeResult p').html('谢谢您的参与');
                                    }
                                    $('#close-prize').click(function(){
                                        $('#userInfo').hide();
                                        $('#prizeResult').hide();
                                    });
                                }
                            }
                        })

                    }else{
                        alert('请完善您的报名信息');
                    }
                })
            }
        };
        $(function(){
            ProvinceData.init('ddlProvince', 'ddlCity','agency');
            SaveInfo.init();

            $('#close-userInfo').click(function(){
                $('#userInfo').hide();
            });
            $('#gotoInfo').click(function(e){
                e.preventDefault();
                var w = window.innerWidth;
                var h = window.innerHeight;
                $('#userInfo').css({'width':w,'height':h}).show();
                $('#userInfo-box').show();
                $('#rule-icon').click(function(){
                    $('#userInfo-box').hide();
                    $('#actionRules').show();
                });
                $('#close-rules').click(function(){
                    $('#userInfo-box').show();
                    $('#actionRules').hide();
                });

            });
        });
        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
        function init() {
            var w = window.innerWidth;
            var h = window.innerHeight;
            canvas = document.getElementById("canvas");
            canvas.width = w;
            canvas.height = h;
            anim_container = document.getElementById("animation_container");
            $('#anim_container').css({'width':w,'height':h,'position':'absolute','left':'-100%','right':'-100%','top':'-100%','bottom':'-100%'});
            $('#dom_overlay_container').css({'width':w,'height':h});
            dom_overlay_container = document.getElementById("dom_overlay_container");
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

}, false);
//var w = window.innerWidth;
//var h = window.innerHeight;
//$(function(){
//    init();
//});
//
//$("#portrait").css("display","none");
//$("body").css({"width":w,"height":h});
//document.addEventListener("WeixinJSBridgeReady", function () {
//    audioAutoPlay('musicStar');
//}, false);
//var firstTouch = true;
//$('body').bind("touchstart",function(e){
//    if ( firstTouch ) {
//        firstTouch = false;
//        musicStar.play();
//    }else{
//        return;
//    }
//});
////动画开始播放音乐
//musicStar.load();
//musicStar.src="video/Echo.mp3";
//musicStar.play();
//$(".open").click(function(){
//    musicStar.pause();
//    $(this).css("display","none");
//    $(".clock").css("display","block");
//    $('.btn-music').removeClass('open-music');
//});
//$(".clock").click(function(){
//    musicStar.play();
//    $(this).css("display","none");
//    $(".open").css("display","block");
//    $('.btn-music').addClass('open-music');
//});
///**
// * Created by jiangqian on 2017/3/18.
// */
//var SaveInfo = {
//    username:null,
//    phone:null,
//    province:null,
//    city:null,
//    agency:null,
//    cartype:null,
//    init:function(){
//        this.updateView();
//    },
//    updateView:function(){
//        SaveInfo.inputReg();
//        SaveInfo.submit();
//    },
//    inputReg:function(){
//        $('input[name="username"]').blur(function(){
//            if(this.validity.valid){
//                $('input[name="username"]').parent().removeClass('red');
//            }else{
//                $('input[name="username"]').parent().addClass('red');
//            }
//        });
//        $('input[name="username"]').focus(function(){
//            if(this.validity.valid) {
//                $('input[name="username"]').parent().removeClass('red');
//            }else{
//                $('input[name="username"]').parent().addClass('red');
//            }
//        });
//        $('input[name="phone"]').blur(function(){
//            var reg = /^1[34578]\d{9}$/;
//            var val = $(this).val();
//            if(reg.test(val)){
//                $(this).parent().removeClass('red');
//            }else{
//                $(this).parent().addClass('red');
//            }
//        });
//        $('input[name="phone"]').focus(function(){
//            $(this).keyup(function(){
//                if(this.validity.valid){
//                    $(this).parent().removeClass('red');
//                }else{
//                    $(this).parent().addClass('red');
//                }
//            })
//        });
//    },
//    clickReg:function(){
//        var usernameReg = false,phoneReg = false,provinceReg = false,cityReg = false,agencyReg = false,cartypeReg = false;
//        var inputUsername = document.getElementById('username');
//        if(inputUsername.validity.valid){
//            usernameReg = true;
//        }else{
//            usernameReg = false;
//        }
//        var reg = /^1[34578]\d{9}$/;
//        if(reg.test($('input[name="phone"]').val())){
//            phoneReg = true;
//        }else{
//            phoneReg = false;
//        }
//        function selectReg(selectName){
//            var val = $('select[name='+selectName+'] option:selected').val();
//            var reg;
//            if(val&&val!=-1){
//                reg = true;
//            }else{
//                reg = false;
//            }
//            return reg;
//        }
//        provinceReg = selectReg('ddlProvince');
//        cityReg = selectReg('ddlCity');
//        agencyReg = selectReg('agency');
//        cartypeReg = selectReg('cartype');
//        var total = usernameReg&&phoneReg&&provinceReg&&cityReg&&agencyReg&&cartypeReg;
//        console.log(usernameReg,phoneReg,provinceReg,cityReg,agencyReg,cartypeReg);
//        return total;
//    },
//    submit:function(){
//        $('#btn-userInfo').click(function(e){
//            e.preventDefault();
//            if(SaveInfo.clickReg()){
//                SaveInfo.username = $('input[name="username"]').val();
//                SaveInfo.phone = $('input[name="phone"]').val();
//                SaveInfo.province = $('select[name="ddlProvince"] option:selected').val();
//                SaveInfo.city = $('select[name="ddlCity"] option:selected').val();
//                SaveInfo.agency = $('select[name="agency"] option:selected').val();
//                SaveInfo.cartype = $('select[name="cartype"] option:selected').val();
//                var key = $("input[name='key']").val();
//                var data = {
//                    username:SaveInfo.username,
//                    numberphone:SaveInfo.phone,
//                    dealer:SaveInfo.province+','+SaveInfo.city+','+SaveInfo.agency,
//                    model:SaveInfo.cartype,
//                    key:key
//                };
//                console.log(data);
//                $.ajax({
//                    url:'http://fld.xingyuanauto.com/public/index.php/port/Userdblotter/UserLotter',
//                    type:'post',
//                    data:data,
//                    success:function(obj){
//                        console.log(obj);
//                        obj = JSON.parse(obj);
//                        if(obj.start==2004){
//                            console.log(777);
//                            $('#userInfo-box').hide();
//                            $('#prizeResult').show();
//                            if(obj.msg==1){
//                                $('#prizeResult h1').removeClass('notGet').addClass('get');
//                                $('#prizeResult h1 i').html('恭喜您，中了一等奖');
//                                $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
//                            }else if(obj.msg==2){
//                                $('#prizeResult h1').removeClass('notGet').addClass('get');
//                                $('#prizeResult h1 i').html('恭喜您，中了二等奖');
//                                $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
//                            }else if(obj.msg==3){
//                                $('#prizeResult h1').removeClass('notGet').addClass('get');
//                                $('#prizeResult h1 i').html('恭喜您，中了三等奖');
//                                $('#prizeResult p').html('2个月以内我们会与您电话沟通，请保持电话通畅；奖品会在随后发放');
//                            }else{
//                                $('#prizeResult h1').addClass('notGet').removeClass('get');
//                                $('#prizeResult h1 i').html('很抱歉，您没有中奖');
//                                $('#prizeResult p').html('谢谢您的参与');
//                            }
//                            $('#close-prize').click(function(){
//                                $('#userInfo').hide();
//                                $('#prizeResult').hide();
//                            });
//                        }
//                    }
//                })
//
//            }else{
//                alert('请完善您的报名信息');
//            }
//        })
//    }
//};
//$(function(){
//    ProvinceData.init('ddlProvince', 'ddlCity','agency');
//    SaveInfo.init();
//
//    $('#close-userInfo').click(function(){
//        $('#userInfo').hide();
//    });
//    $('#gotoInfo').click(function(e){
//        e.preventDefault();
//        var w = window.innerWidth;
//        var h = window.innerHeight;
//        $('#userInfo').css({'width':w,'height':h}).show();
//        $('#userInfo-box').show();
//        $('#rule-icon').click(function(){
//            $('#userInfo-box').hide();
//            $('#actionRules').show();
//        });
//        $('#close-rules').click(function(){
//            $('#userInfo-box').show();
//            $('#actionRules').hide();
//        });
//
//    });
//});
//var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
//function init() {
//    var w = window.innerWidth;
//    var h = window.innerHeight;
//    canvas = document.getElementById("canvas");
//    canvas.width = w;
//    canvas.height = h;
//    anim_container = document.getElementById("animation_container");
//    $('#anim_container').css({'width':w,'height':h,'position':'absolute','left':'-100%','right':'-100%','top':'-100%','bottom':'-100%'});
//    $('#dom_overlay_container').css({'width':w,'height':h});
//    dom_overlay_container = document.getElementById("dom_overlay_container");
//    images = images||{};
//    var loader = new createjs.LoadQueue(false);
//    loader.addEventListener("fileload", handleFileLoad);
//    loader.addEventListener("complete", handleComplete);
//    loader.loadManifest(lib.properties.manifest);
//}
//function handleFileLoad(evt) {
//    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
//}
//function handleComplete(evt) {
//    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
//    var queue = evt.target;
//    var ssMetadata = lib.ssMetadata;
//    for (i = 0; i < ssMetadata.length; i++) {
//        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
//            "images": [queue.getResult(ssMetadata[i].name)],
//            "frames": ssMetadata[i].frames
//        })
//    }
//    exportRoot = new lib.PEUGEOT();
//    stage = new createjs.Stage(canvas);
//    stage.addChild(exportRoot);
//    stage.enableMouseOver();
//    //Registers the "tick" event listener.
//    fnStartAnimation = function () {
//        createjs.Ticker.setFPS(lib.properties.fps);
//        createjs.Ticker.addEventListener("tick", handleTick)
//        function handleTick(event) {
//            var cameraInstance = exportRoot.___camera___instance;
//            if (cameraInstance) {
//                if (cameraInstance._off != null && cameraInstance._off == true)
//                    exportRoot.transformMatrix = new createjs.Matrix2D();
//                else {
//                    var mat = cameraInstance.getMatrix();
//                    var stageCenter = {'x': lib.properties.width / 2, 'y': lib.properties.height / 2};
//                    mat.tx -= stageCenter.x;
//                    mat.ty -= stageCenter.y;
//                    var inverseMat = mat.invert();
//                    inverseMat.prependTransform(stageCenter.x, stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
//                    inverseMat.appendTransform(-stageCenter.x, -stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
//                    exportRoot.transformMatrix = inverseMat;
//                }
//            }
//            stage.update();
//        }
//    };
//    //Code to support hidpi screens and responsive scaling.
//    function makeResponsive(isResp, respDim, isScale, scaleType) {
//        var lastW, lastH, lastS = 1;
//        window.addEventListener('resize', resizeCanvas);
//        resizeCanvas();
//        function resizeCanvas() {
//            var w = lib.properties.width, h = lib.properties.height;
//            var iw = window.innerWidth, ih = window.innerHeight;
//            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
//            if (isResp) {
//                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
//                    sRatio = lastS;
//                }
//                else if (!isScale) {
//                    if (iw < w || ih < h)
//                        sRatio = Math.min(xRatio, yRatio);
//                }
//                else if (scaleType == 1) {
//                    sRatio = Math.min(xRatio, yRatio);
//                }
//                else if (scaleType == 2) {
//                    sRatio = Math.max(xRatio, yRatio);
//                }
//            }
//            canvas.width = w * pRatio * sRatio;
//            canvas.height = h * pRatio * sRatio;
//            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
//            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
//            stage.scaleX = pRatio * sRatio;
//            stage.scaleY = pRatio * sRatio;
//            lastW = iw;
//            lastH = ih;
//            lastS = sRatio;
//        }
//    }
//
//    makeResponsive(true, 'width', true, 2);
//    fnStartAnimation();
//}
