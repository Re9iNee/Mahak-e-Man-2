console.group("TIMER COUNTER")
fetch('/getDateTime').then(resp => resp.json()).then(({
    presentTime,
    presentDate,
    replica,
    wantedDate,
    wantedTime
}) => {
    //init: 
    let hoursDif = Math.abs(presentTime[0] - wantedTime[0]);
    let minutesDif = Math.abs(presentTime[1] - wantedTime[1]);
    let dayDif = daysBetween(presentDate, wantedDate[replica])



    document.getElementById("days").textContent = dayDif;
    document.getElementById("minutes").textContent = minutesDif;
    document.getElementById("hours").textContent = hoursDif;
    checkDateToggleAnimation(dayDif);
    let intervalHandler = setInterval(() => {
        if (minutesDif > 0) {
            minutesDif--;
        } else if (hoursDif > 0) {
            hoursDif--;
            minutesDif = 59;
        } else if (dayDif > 0) {
            dayDif--;
            hoursDif = 23;
        }
        if (!dayDif && !hoursDif && !minutesDif) {
            replica++;
            hoursDif = Math.abs(presentTime[0] - wantedTime[0]);
            minutesDif = Math.abs(presentTime[1] - wantedTime[1]);
            dayDif = daysBetween(presentDate, wantedDate[replica])
            if (wantedDate.length < replica)
                clearInterval(intervalHandler)
            console.log("the Prizes Over Go Home", replica)
        }
        checkDateToggleAnimation(dayDif);
        document.getElementById("days").innerHTML = dayDif;
        document.getElementById("minutes").innerHTML = minutesDif;
        document.getElementById("hours").innerHTML = hoursDif;
    }, 60000)
}).catch(err => console.error("Error on TimeCounter: ", err))

function checkDateToggleAnimation(dayDif) {
    if (dayDif < 3) {
        //if less than 3 days left show background Animation
        $("#days").addClass("animateBackground")
        $("#hours").addClass("animateBackground")
        $("#minutes").addClass("animateBackground")
    } else {
        $("#days").removeClass("animateBackground")
        $("#hours").removeClass("animateBackground")
        $("#minutes").removeClass("animateBackground")
    }
}

function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}
console.groupEnd()