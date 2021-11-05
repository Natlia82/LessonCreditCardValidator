// TODO: write your code here
import valid from './validate';
import Karts from './karts';
const but = document.getElementById('submitform');
but.addEventListener('click', () => {
    let text = document.getElementById('card_number').value;
    console.log(text);
    console.log(valid(text));
    if (valid(text)) {
        console.log(Karts(text));

    } else alert("Не верный номер карты!");
});