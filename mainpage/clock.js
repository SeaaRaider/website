function counting()
{
    var date = new Date();

    var hour = date.getHours();
    if(hour<10) hour = "0" + hour;

    var minute = date.getMinutes();
    if(minute<10) minute = "0" + minute;

    var second = date.getSeconds();
    if(second<10) second = "0" + second;

    document.getElementById("clock").innerHTML=
    hour+":"+minute+":"+second;

    setTimeout("counting()",1000);
}

window.addEventListener("load", counting);