getRandomColor();
getRandomColor2();

function getRandomColor() {
    let digits = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
    }

    console.log(color);
}

function getRandomColor2() {
    let color = "#";
    color += (Math.random().toString(16).slice(2, 8));
    console.log(color);
}
