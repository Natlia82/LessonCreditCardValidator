// TODO: write your code here
import valid from './validate';
const but = document.getElementById('submitform');
but.addEventListener('click', () => {
    let text = document.getElementById('card_number').value;

    if (valid(text)) {

    } else alert("Не верный номер карты!");
});