card1 = document.querySelector(".card01");
card2 = document.querySelector(".card02");
card3 = document.querySelector(".card03");
card4 = document.querySelector(".card04");
totalcount = document.querySelector(".total_count");
totalData = document.querySelector(".total_data");
totalTitle = document.querySelector(".total_title");
updatedTime = document.querySelector(".updated-time");
red = document.querySelector(".confirmed");
blue = document.querySelector(".active");
green = document.querySelector(".recovered");
grey = document.querySelector(".deceased");

let redCount;
let blueCount;
let greenCount;

card1.addEventListener('mouseover', function () {
    card1.style.background = "rgba(255, 7, 57, 0.164)";
});

card2.addEventListener('mouseover', function () {
    card2.style.background = "rgba(40, 167, 70, 0.164)";
});

card3.addEventListener('mouseover', function () {
    card3.style.background = " rgba(108, 117, 125, 0.164)";
});

card4.addEventListener('mouseover', function () {
    card4.style.background = " rgba(0, 123, 255, 0.164)";
});


card1.addEventListener('mouseout', function () {
    card1.style.background = "transparent";
});

card2.addEventListener('mouseout', function () {
    card2.style.background = "transparent";
});
card3.addEventListener('mouseout', function () {
    card3.style.background = "transparent";
});

card4.addEventListener('mouseout', function () {
    card4.style.background = "transparent";
});

window.addEventListener('load', () => {
    let randomnumber = Math.floor(Math.random() * 3);
    let year, day, month;
    let d = new Date();
    let yesterday = new Date(d);
    yesterday.setDate(yesterday.getUTCDate() - 1);
    year = d.getUTCFullYear();
    month = d.getUTCMonth() + 1;
    day = d.getUTCDate();
    /*let api;
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
    fetch("https://api.covid19india.org/data.json")
        .then(response => {
            //converting into json format
            return response.json();
        })
        .then(data => {
            let i = 0;
            //finding the index of kerala covid case data in json
            while (data.statewise[i].statecode != "KL") {
                i++;
            }
            //updating data on website
            const { confirmed, deaths, recovered, active, deltaconfirmed, deltadeaths, deltarecovered } = data.statewise[i];
            blue.textContent = active;
            red.textContent = deltaconfirmed;
            green.textContent = deltarecovered;
            grey.textContent = deltadeaths;
            //updating total kerala counts
            totalData.textContent = confirmed;
            if (randomnumber == 1)
                totalData.textContent = active;
            else if (randomnumber == 2)
                totalData.textContent = recovered;
            let str = data.statewise[i].lastupdatedtime;
            let monthlist = ["Jan", "Feb", "March", "April", "May", "June", "Jully", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let position = parseInt(str.substr(3, 5));
            mm = monthlist[position - 1];
            let dd = str.substr(0, 2);
            let event = "AM";
            let hh = parseInt(str.substr(11, 13));
            let min = str.charAt(13);
            if (hh > 12) {
                event = "PM";
                hh = hh - 12;

            }
            updatedTime.textContent = dd + " " + mm + "," + hh + ":" + str.charAt(14) + str.charAt(15) + " " + event + " IST";

        })
    /*fetch("https://api.covid19india.org/states_daily.json")
        .then(dailydata => {
            return dailydata.json();
        })
        .then(dailydatajson => {
            let index = dailydatajson.states_daily.length;
            red.textContent = dailydatajson.states_daily[index - 3].kl;
            redCount = dailydatajson.states_daily[index - 3].kl;
            green.textContent = dailydatajson.states_daily[index - 2].kl;
            greenCount = dailydatajson.states_daily[index - 2].kl;
            grey.textContent = dailydatajson.states_daily[index - 1].kl;
        })
    */
    if (randomnumber == 0) {
        card1.style.background = "rgba(255, 7, 57, 0.164)";
        totalcount.style.color = "rgb(255, 7, 58)";
        totalTitle.textContent = "Total Confirmed";
        card1.addEventListener('mouseout', function () {
            card1.style.background = "rgba(255, 7, 57, 0.164)";
        });

    }
    else if (randomnumber == 1) {
        card4.style.background = " rgba(0, 123, 255, 0.164)";
        totalcount.style.color = "rgb(0, 123, 255)";
        totalTitle.textContent = "Active";
        card4.addEventListener('mouseout', function () {
            card4.style.background = "rgba(0, 123, 255, 0.164)";
        });

    }
    else if (randomnumber == 2) {
        card2.style.background = " rgba(40, 167, 70, 0.164)";
        totalcount.style.color = " rgb(40, 167, 69)";
        totalTitle.textContent = "Total Recovered";
        card2.addEventListener('mouseout', function () {
            card2.style.background = "rgba(40, 167, 70, 0.164)";
        });

    }

});