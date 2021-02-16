const loaderArc = document.querySelector(".loader-arc");

/* ANIMATION */
checkBox.onchange = function () {
    if (!this.checked) {
        loaderArc.classList.remove("loader-arc--animated")
    }
    else loaderArc.classList.add("loader-arc--animated")
}
/* END */

let percentage = 37;
const radius = 80;

function drawArc () {
    checkPercentage();
    coords = getCoordinates(percentage, radius);
    let endX = coords.x;
    let endY = coords.y;
    // That flag is large-arc-flag
    // https://developer.mozilla.org/ru/docs/Web/SVG/Attribute/d
    let flag = percentage > 50 ? 1 : 0

    let arc = `M 100 100
           m 0 -${radius}
           a ${radius} ${radius} 0 ${flag} 1 ${endX}, ${endY}`;

    loaderArc.setAttribute("d", arc)
}

function onChange(v) {
    percentage = v;
    drawArc();
}

/*
Returns a coordinates of last point of arc
 */

function getCoordinates(percentage, radius) {
    // We need to take away pi/2 for right offset
    let radians = ((percentage / 100) * 2 * Math.PI) - (Math.PI / 2);
    let x = (radius * Math.cos(radians));
    // 1 + sin because center point is on the top, not on the center
    let y = (radius * ( 1 + Math.sin(radians)));

    return {
        x: x,
        y: y
    }
}

function checkPercentage() {
    /* If percentage is 100 we draw a circle that fills
        the main circle, and remove our drawn circle
        if percentage is lower than 100
    */
    if (percentage == 100) {
        let svg = document.getElementsByTagName("svg")[0];
        let circle100 = `<circle class="circle100" cx="100" cy="100" r="${radius}" stroke="red" stroke-width="9" fill="none"> </circle>`;
        svg.insertAdjacentHTML("beforeend", circle100);
    } else {
        let circle100 = document.querySelector(".circle100");
        if (circle100) circle100.remove();
    }
}
