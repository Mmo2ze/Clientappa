function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    if(totalSeconds > 60*60*24-1 || totalSeconds< 0)
    return "invalid number "
    var P = "AM"
    var hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if(hours > 12 ){
        hours -=12;
        P = "PM"
    }
    return { H: hours, M: minutes, P: P };
  }
  

function TimeToSecond(H, M, P ) {
    P = P.toLowerCase();
    if (P === "am")
        P = 0;
    else if(P === "pm") {P = 1;}
    else return ("invalid")
    var seconds = H * 60 * 60 + M * 60 + P * 60 * 60 * 12;
    return seconds;
}

export default {toHoursAndMinutes,TimeToSecond}