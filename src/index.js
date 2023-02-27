module.exports = function toReadable (number) {
    let answer = []
    isBiggerThan(number, 99) ? answer.push(get_0_19(Math.floor(number / 100)) + " hundred"): "";
    number = number % 100
    isBiggerThan(number, 19) ?  answer.push(get_20_99(number)): (number !== 0 || answer.length === 0)? answer.push(get_0_19(number)): "";
    return answer.join(" ")
}

const numbers_0_19 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

const numbersZeroEnd = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

function get_0_19(number){
    return numbers_0_19[number] || ""
}

function isBiggerThan(a,b){
    return a > b
}

function get_20_99(number){
    return numbersZeroEnd[Math.floor(number/10) - 2] + (number%10 === 0 ? "" :  (" "+ numbers_0_19[number%10]))
}
