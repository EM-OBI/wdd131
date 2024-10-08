let currentYear = document.querySelector("#currentYear");
let dateLastModif = document.querySelector("#lastModified");
const currentDate = new Date();
let oLastModif = new Date(document.lastModified);
const getLastModYear = oLastModif.getFullYear();
const getLastModMonth = oLastModif.getMonth();
const getLastModDate = oLastModif.getDate();
const getLastModHour = oLastModif.getHours();
const getLastModMinute = oLastModif.getMinutes();
const getLastModSecond = oLastModif.getSeconds();

currentYear.innerHTML = `<span>${currentDate.getFullYear()}</span>`;
dateLastModif.innerHTML = `<span>Last Modified: ${getLastModDate}/${getLastModMonth}/${getLastModYear} ${getLastModHour}:${getLastModMinute}:${getLastModSecond}</span>`


const getTemp = () => {
    tempStr = (document.querySelector("#temperature").textContent);
    tempFloat = tempStr.trim().split("℉");
    return parseFloat(tempFloat[0]);
}
const getWind = () => {
    windStr = (document.querySelector("#wind").textContent);
    windFloat = windStr.trim().split(" ");
    return parseFloat(windFloat[0]);
} 

let tempVal = getTemp();
let windVal = getWind();

const windChill = (temp, wind) => {
    return 35.74 + 0.621 * temp - 35.75 * (wind ** 0.16) + 0.4275 * temp * (wind ** 0.16);
}

const windChillRound = windChill(tempVal, windVal).toFixed(2);

if (tempVal <= 50 && windVal > 3) {
    document.querySelector("#wind-chill").textContent = `${windChillRound}℉`;
} else {
    document.querySelector("#wind-chill").textContent = `N/A`;
}





// python
// def wind_chill_calculator(temp, velocity):
//     wind_chill = 35.74 + 0.621 * temp - 35.75 * (velocity ** 0.16) + 0.4275 * temp * (velocity ** 0.16)
//     return wind_chill