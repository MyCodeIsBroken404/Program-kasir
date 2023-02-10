function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function GFG_Fun() {
    $('#GFG_DOWN').html('Number = ' + convert(n));
}

const apple = document.getElementById("apple")
const orange = document.getElementById("orange")
const watermelon = document.getElementById("watermelon")
const grape = document.getElementById("grape")
const banana = document.getElementById("banana")
const strawberry = document.getElementById("strawberry")
const melon = document.getElementById("melon")
const cherry = document.getElementById("cherry")
const pinapple = document.getElementById("pinapple")
const btn = document.getElementById("btn");
const evalNUM = document.getElementById("evalnum");

const price = {
    apple: 1,
    orange: 1.2,
    watermelon: 3,
    grape: 0.7,
    banana: 1.5,
    melon: 2.5,
    strawberry: 0.4,
    pinapple: 3.5,
    cherry: 0.3
}

function total() {
    let cost = 0;
    cost += apple.value * price.apple;
    cost += orange.value * price.orange;
    cost += watermelon.value * price.watermelon;
    cost += grape.value * price.grape;
    cost += banana.value * price.banana;
    cost += melon.value * price.melon;
    cost += strawberry.value * price.strawberry;
    cost += pinapple.value * price.pinapple;
    cost += cherry.value * price.cherry;
    console.log(cost);
    evalNUM.innerHTML = "$"+numberWithCommas(cost);
}

btn.addEventListener("click",total);