var box = document.getElementById("box");
box.onmousedown = function (e) {
    var event = e || window.event;
    //鼠标距离盒子左边的位置
    var disL = event.clientX - this.offsetLeft;
    //鼠标距离盒子上边的位置
    var disT = event.clientY - this.offsetTop;
    document.onmousemove = function (e) {
        var event = e || window.event;
        //盒子距离左边的位置
        var L = event.clientX - disL;
        //盒子距离上边的位置
        var T = event.clientY - disT;
        var maxL = document.documentElement.clientWidth - box.clientWidth;
        var maxT = document.documentElement.clientHeight - box.clientHeight;
        if (L < 0) {
            L = 0;
        } else if (L > maxL) {
            L = maxL;
        };
        if (T < 0) {
            T = 0;
        } else if (T > maxT) {
            T = maxT;
        }

        box.style.left = L + "px";
        box.style.top = T + "px";


    }
    document.onmouseup = function () {
        this.onmousedown = null;
        this.onmousemove = null;
    }
}

//移动端
/*box.addEventListener('touchmove', function (event) {
    event.preventDefault(); //阻止其他事件
    // 如果这个元素的位置内只有一个手指的话
    if (event.targetTouches.length == 1) {
        var touch = event.targetTouches[0]; // 把元素放在手指所在的位置
        box.style.left = (touch.pageX) + 'px';
        box.style.top = (touch.pageY) + 'px';
    }
}, false);*/