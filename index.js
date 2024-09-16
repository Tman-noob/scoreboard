let leftEl = document.getElementById("left-btn");
let rightEl = document.getElementById("right-btn");
let leftRmvEl = document.getElementById("left-btn-rmv");
let rightRmvEl = document.getElementById("right-btn-rmv");
let resetEl = document.getElementById("reset-btn");
let leftCount = 0;
let rightCount = 0;

function left() {
    leftCount += 1;
    leftEl.textContent = leftCount;
}

function leftRmv() {
    if (leftCount > 0) {
        leftCount -= 1;
        leftEl.textContent = leftCount;
    }
}

function right() {
    rightCount += 1;
    rightEl.textContent = rightCount;
}

function rightRmv() {
    if (rightCount > 0) {
        rightCount -= 1;
        rightEl.textContent = rightCount;
    }
}

function reset() {
    leftCount *= 0;
    rightCount *= 0;
    rightEl.textContent = 0;
    leftEl.textContent = 0;
}