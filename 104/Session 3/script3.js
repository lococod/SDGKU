(function () {
    var updateHour = function() {

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
        pHour.textContent=hour;
        pMin.textContent=minute;
        pSec.textContent=seconds;
    }
    updateHour();
    var inter = setInterval(updateHour, 1000);
})();