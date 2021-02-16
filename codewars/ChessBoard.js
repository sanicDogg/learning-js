// Use ChessBoardGrid.png to make thinking easier.

// You are given coordinates of two queens on a chess board.
// Find out, whether they hit each other or not.

// INPUT
// Four integer numbers x_1, y_1, x_2, y_2x are being typed.
//
// OUTPUT
// Type "YES" (uppercase) if they hit each other or "NO" if the don't.

let coordinates = [
    "1 1 3 3",  // YES
    "1 1 4 3",  // NO
    "2 2 5 2",  // YES
    "1 2 3 4",  // YES
    "4 1 3 4",  // NO
    "1 2 4 2"   // YES
]

coordinates.forEach((item, i, array) => {
    let x1 = Number(item[0]);
    let y1 = Number(item[2]);
    let x2 = Number(item[4]);
    let y2 = Number(item[6]);

    if ((x1 === x2) || (y1 === y2)) {
        console.log("YES");
    } else

    if (Math.abs(x1 - y1) === Math.abs(x2 - y2)) {
        console.log("YES");
    } else

        console.log("NO");
})
