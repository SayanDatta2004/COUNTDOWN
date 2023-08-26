(function () {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "08/27/",
    birthday = dayMonth + yyyy;
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
    birthday = dayMonth + nextYear;
    }
    //end
    const countDown = new Date(birthday).getTime(),
    x = setInterval(function() {
    const now = new Date().getTime(),
    distance = countDown - now;
    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    //do something later when date is reached
    if (distance < 0) {
    document.getElementById("headline").innerText = "Hey Doraemon of my life❤,I wanted to share this special moment with you but couldn't since we are far away from each other.I am very bad at writing love letters so bare with me.I wanted to telll you I love you so so much.Although we couldn't spend much time together this month because of this long distancing but we managed to see it through.I love you the way you are and this willl never change.You know whats the best quality that made me fall for you?.You make me feel at home❤.";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("systum").style.backgroundColor="lightblue";
    clearInterval(x);
    }
    //seconds
    }, 0)
    }());
