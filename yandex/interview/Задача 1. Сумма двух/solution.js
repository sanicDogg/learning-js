// arr[int], sorted

// X - int

// i, j i!=j arr[i] + arr[j] -> X

testArrs = [[1, 2, 3, 4, 5],
[10, 10, 20, 20, 55],
[2, 5, 12, 12, 23, 28, 45, 57, 231, 381, 23774]];
testX = [10, 64, 65];

testArrs.forEach((item, i) => {
    console.log("TEST #" + i);
    console.log(sumOfTwo(item, testX[i]));
    console.log("***");
});

function sumOfTwo(arr, X) {
    let left = 0;
    let right = arr.length - 1;

    let bLeft = left;
    let bRight = right;

    while (left < right) {
        if (Math.abs(X - (arr[left] + arr[right]))
            < Math.abs(X - (arr[bLeft] + arr[bRight]))) {
            bLeft = left;
            bRight = right;
        }

        if (arr[left] + arr[right] === X) { return {left, right} }

        if (arr[left] + arr[right] > X) {
            right--;
        } else left++;

        
    }

    return {bLeft, bRight};
}