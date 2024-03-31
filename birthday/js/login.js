$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    //修改密码请改此处
    if (userName === 'dandan' && pwd === '0222') {
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        requestFullScreen();
        setTimeout(function () {
            location.href = "birthdayCake.html";
        }, 2000);
    } else {
        alert("温馨提示：你的名字？今天日期？");
    }
});

function requestFullScreen() {
    let element = document.documentElement;
    let requestMethod = element.requestFullScreen || //W3C
        element.webkitRequestFullScreen || //Chrome等
        element.mozRequestFullScreen || //FireFox
        element.msRequestFullScreen; //IE11
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}
