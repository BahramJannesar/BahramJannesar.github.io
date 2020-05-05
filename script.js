var i = 0;
var txt = "In God we trust. All others must bring data.";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("code").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
