window.onload = function () {
    //当页面DOM对象加载完毕，web浏览器能够运行JS时，此方法即被触发。
    let second = 0o0;
    let tens = 0o0;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Interval;
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        second = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = second;
    }
    function startTimer () {
        tens++;
        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            second++;
            appendSeconds.innerHTML = "0" + second;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (second > 9){
            appendSeconds.innerHTML = second;
        }
    }
}