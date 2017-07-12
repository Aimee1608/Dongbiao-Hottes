

//调用分享按钮
function share(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.indexOf('android') > -1){
        window.hotbody.showMoreActionPopWindow();
    }else if(ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1){
        window.location.href="hotbody://iosShare";
    }
    return true;
}

//页面分享内容
function shareInfo(){

    var myObject = {
        "shareswitch": true,
        "weibo":{
            "image": app.challenge.banner,
            "text":'我在 @火辣健身 发现了一个挑战行动，'+app.challenge.title,
            "url": location.href
        },
        "wechatfriend":{
            "icon": "https://www.hotbody.cn/api/Images/share_down_logo.png",
            "title": '挑战行动：'+ app.challenge.title,
            "subtitle": "火辣健身",
            "url": location.href
        },
        "wechatmoment":{
            "icon": "https://www.hotbody.cn/api/Images/share_down_logo.png",
            "title": '挑战行动：'+ app.challenge.title,
            "url": location.href
        },
        "qqzone":{
            "icon": "https://www.hotbody.cn/api/Images/share_down_logo.png",
            "title": '挑战行动：'+ app.challenge.title,
            "subtitle": "火辣健身",
            "url": location.href
        }
    };
    var formattedStr = JSON.stringify(myObject);
    if ( typeof( window.hotbody ) == 'undefined' ){
        return formattedStr;
    }else{
        window.hotbody.shareInfo (formattedStr);
    }
}
