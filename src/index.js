module.exports = function toReadable (number) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let digit = number % 10;

    if (number < 20) {
        return ones[number];
    }
    if(number < 100) {
        return tens[Math.floor(number / 10) - 2] + (digit ? ' ' + ones[digit]: '');
    }
    if (number < 1000) {
        return ones[Math.floor(number / 100)] + " hundred" + (number % 100 === 0 ? "" : " " + toReadable(number % 100));
    }
}
