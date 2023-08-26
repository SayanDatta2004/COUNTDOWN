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
    document.getElementById("headline").innerText = "Hey Doraemon of my life❤,First of all thank you for being there for me when I needed you the most and sharing some precious memories with me.Cant belive its been 6 mmonths damnn....time went by too fast from sending a long sentence for approval to pandu to actually proposing you and being completely dummp about what to do next.Can you belive we have spent 180 days, 11 hours, 49 minutes and 20 seconds together and now we'r signing off our 5th chapter together♥.I just to want say thank you for accepting my micro second wala proposal lets stick together and jump every obstacle together ♥ in our way.I love you muaaahahhhhhhh........♥♥♥♥♥♥♥♥♥";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("systum").style.backgroundColor="lightblue";
    clearInterval(x);
    }
    //seconds
    }, 0)
    }());
