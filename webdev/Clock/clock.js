const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");

const a = document.getElementById("hrs");
const b = document.getElementById("mins");

function clock(){
    let time = new Date();
    
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let hr_turn = 30*hr + (1/2) *min;
    let min_turn = 6*min;
    let sec_turn = 6*sec;

    h.style.transform = `rotate(${hr_turn}deg)`;
    m.style.transform = `rotate(${min_turn}deg)`;
    s.style.transform = `rotate(${sec_turn}deg)`;

    a.innerHTML = `${hr}`;
    b.innerHTML = `${min}`;


}

setInterval(clock,1000)





