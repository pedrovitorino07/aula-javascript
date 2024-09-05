let count = 1;
document.getElement('radio1').checked = true;

setInterval(function () { passandoImage() }, 2000);

function passandoImage() {
    counter++;
    if (counter > 5) {
        counter = 1;
    }
    document.getElementById("radio" + count).checked = true;
}