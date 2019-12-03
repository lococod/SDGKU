(function () {
    var updateHour = function () {

        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm;
        var dayW = date.getDay();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();

        const pHour = document.getElementById('hour');
        const pMin = document.getElementById('minute');
        const pSec = document.getElementById('seconds');
        const AMPM = document.getElementById('ampm');

        const pDayW = document.getElementById('dayWeek');
        const pDay = document.getElementById('day');
        const pMonth = document.getElementById('month');
        const pYear = document.getElementById('year');

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        pDayW.textContent = dayW[days];
        pMonth.textContent = months[month];
        pDay.textContent = day;
        pYear.textContent = year;



        if (minute < 10) {
            minute = "0" + minute;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        pMin.textContent = minute;
        pSec.textContent = seconds;
        if (hour >= 12) {
            hour = hour - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }
        if (hour == 0) {
            hour = 12;
        }
        pHour.textContent = hour;
        AMPM.textContent = ampm;
    }
    updateHour();
    var inter = setInterval(updateHour, 1000);
})();