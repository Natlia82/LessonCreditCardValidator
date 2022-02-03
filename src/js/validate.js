export default function valid(value) {
    if (/[^0-9-\s]+/.test(value)) return false;
    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;
    const val = value.replace(/\D/g, '');
    for (let n = val.length - 1; n >= 0; n -= 1) {
        const cDigit = val.charAt(n);
        nDigit = parseInt(cDigit, 10);
        if (bEven) {
            if ((nDigit = nDigit * 2) > 9) nDigit -= 9;
        }
        nCheck += nDigit;
        bEven = !bEven;
    }
    return (nCheck % 10) === 0;
}