//1
let date = new Date(2012, 1, 20, 3, 12);
alert(date);

//2
function getWeekDate(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDate()];
}

//3
function getLocalDay(date) {
    let day = date.getDate();
    if (day == 0){
        day = 7;
    }
    return day;
}

//4
function getDateAgo(date, days){
    let copy = new Date(date);
    copy.setDate(date.getDate() - days);
    return copy.getDate();
}

//5
function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

//6
function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

//7
function getSecondsToTomorrow() {
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
    let diff = tomorrow - today;
    return Math.round(diff/1000);
}