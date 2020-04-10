var i = 0;
var txt = "In_God['not that great god'] = pd.read_csv('we trust, all others must bring data.csv', index_col='Human')";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("code").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
