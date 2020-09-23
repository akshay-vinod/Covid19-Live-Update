card1 = document.querySelector(".card01");
card2 = document.querySelector(".card02");
card3 = document.querySelector(".card03");
card4 = document.querySelector(".card04");
updatedTime = document.querySelector(".updated-time");
red = document.querySelector(".confirmed");
blue = document.querySelector(".tested");
green = document.querySelector(".recovered");
grey = document.querySelector(".deceased");
card1.addEventListener('mouseover', function () {
    card1.style.background = "rgba(255, 7, 57, 0.164)";
});
card1.addEventListener('mouseout', function () {
    card1.style.background = "transparent";
});


card2.addEventListener('mouseover', function () {
    card2.style.background = "rgba(40, 167, 70, 0.164)";
});
card2.addEventListener('mouseout', function () {
    card2.style.background = "transparent";
});

card3.addEventListener('mouseover', function () {
    card3.style.background = " rgba(108, 117, 125, 0.164)";
});
card3.addEventListener('mouseout', function () {
    card3.style.background = "transparent";
});

card4.addEventListener('mouseover', function () {
    card4.style.background = " rgba(0, 123, 255, 0.164)";
});
card4.addEventListener('mouseout', function () {
    card4.style.background = "transparent";
});

window.addEventListener('load', () => {
    let year, day, month;
    let d = new Date();
    let yesterday = new Date(d);
    yesterday.setDate(yesterday.getUTCDate() - 1);
    year = d.getUTCFullYear();
    month = d.getUTCMonth() + 1;
    day = d.getUTCDate();
    /*(let api;
    if (month < 10) {
        api = `https://api.covid19india.org/v4/data-${year}-0${month}-${day}.json`;
    }
    else {
        api = `https://api.covid19india.org/v4/data-${year}-${month}-${day}.json`;
    }
    fetch(api)
        .then(respond => {
            if (respond.status == 404) {
                year = yesterday.getUTCFullYear();
                month = yesterday.getUTCMonth() + 1;
                day = yesterday.getUTCDate();
                if (month < 10) {
                    api = `https://api.covid19india.org/v4/data-${year}-0${month}-${day}.json`;
                }
                else {
                    api = `https://api.covid19india.org/v4/data-${year}-${month}-${day}.json`;
                }
            }
            fetch(api)
                .then(data => {
                    return data.json();
                })
                .then(jsondata => {
                    console.log(jsondata.KL.meta.tested);
                    const { last_updated } = jsondata.KL.meta.tested;
                    const { confirmed, deceased, recovered, tested } = jsondata.KL.delta;
                    updatedTime.textContent = last_updated;
                    red.textContent = confirmed;
                    blue.textContent = tested;
                    green.textContent = recovered;
                    grey.textContent = deceased;

                })

        });*/
    fetch("https://api.covid19india.org/states_daily.json")
        .then(dailydata => {
            return dailydata.json();
        })
        .then(dailydatajson => {
            console.log(dailydatajson);
            let index = dailydatajson.states_daily.length;
            updatedTime.textContent = dailydatajson.states_daily[index - 1].date;
            red.textContent = dailydatajson.states_daily[index - 3].kl;
            //blue.textContent = tested;
            green.textContent = dailydatajson.states_daily[index - 2].kl;
            grey.textContent = dailydatajson.states_daily[index - 1].kl;
        })

});