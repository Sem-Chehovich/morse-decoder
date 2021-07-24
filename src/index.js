const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 let arrStr = expr.split('**********');
 let one = '';
 for (let i = 0; i < arrStr.length; i++) {
     let word = '';
     let numberOfletters = arrStr[i].length / 10;
     for (let j = 1; j <= numberOfletters; j++){

         let letter = j === 1 ? arrStr[i].slice(0, 10) : arrStr[i].slice((j - 1) * 10, (j - 1) * 10 + 10 );
        let index = letter.indexOf('1');
        let newLetter = letter.slice(index).replace(/10/g, '.').replace(/11/g, '-');
        word += `${MORSE_TABLE[newLetter]}`
     }

     let s = i === 0 ? '' : ' '

     one += `${s}${word}`
 }
 return one;
}

module.exports = {
    decode
}