function tempertureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("celcuisoutput").innerHTML = (valNum - 32) / 1.8;
}