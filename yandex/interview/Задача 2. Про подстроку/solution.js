testArrs = ["aabcabcbbddee", "", "a"]; // 3, 0, 1

testArrs.forEach((item, i) => {
    console.log("TEST #" + i);
    console.log(longestSubstring(item));
    console.log("***");
});

function longestSubstring(string) {
    let letters = new Map();
    let maxLen = 0;
    let currentLen = 0;

    for (let i = 0; i < string.length; i++) {
        if (!letters.has(string[i]))
            currentLen++;

        else if (letters.get(string[i]) < i - currentLen)
            currentLen++;

        else currentLen = i - letters.get(string[i]);

        if (currentLen > maxLen) maxLen = currentLen;

        letters.set(string[i], i);
    }
    return maxLen;
}