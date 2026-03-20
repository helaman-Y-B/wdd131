const weatherData = [
    { label: "Temperature", value: 5 },
    { label: "Wind Speed", value: 10 },
    { label: "Conditions", value: "Cloudy" }
]

const data = [
    { label: "Area", value: "1.652,57 km²" },
    { label: "Population", value: "581,382" },
    { label: "Language", value: "Portuguese" },
    { label: "Currency", value: "Brazilian Reais" },
    { label: "Time Zone", value: "GMT-3" },
    { label: "Calling Code", value: "+43" },
    { label: "Internet TLD", value: ".londrina.br" }
]

const dataDiv = document.querySelector("#data ul");
const weatherDiv = document.querySelector("#weather ul");

data.forEach(d => {
    const p = document.createElement("p");
    p.textContent = `${d.label}: ${d.value}`;
    dataDiv.appendChild(p);
});

weatherData.forEach(wd => {
    const p = document.createElement("p");
    p.textContent = `${wd.label}: ${wd.value}`;
    weatherDiv.appendChild(p);
});

const widnChill = calculateWindChill(weatherData[0].value, weatherData[1].value);
const p = document.createElement("p");
p.textContent = `Wind Chill: ${widnChill}`;
weatherDiv.appendChild(p);

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        const chill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
        return chill.toFixed(1) + "°C";
    } else {
        return "N/A";
    };
}

