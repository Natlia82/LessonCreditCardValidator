// TODO: write your code here
import valid from './validate';
import Karts from './karts';

const but = document.getElementById('submitform');
but.addEventListener('click', () => {
    ClearClass();
    let text = document.getElementById('card_number').value;
    // console.log(text);
    //console.log(valid(text));
    if (valid(text)) {
        // console.log(Karts(text));
        const kart = document.querySelector(Karts(text));
        kart.classList.add('map');
        //console.log(kart);
    } else alert("Не верный номер карты!");
});

function ClearClass() {
    const classCard = Array.from(document.getElementsByClassName('card'));
    classCard.forEach(element => {
        //console.log(element)
        if (element.classList.contains('map')) {
            element.classList.remove('map');
        }

    });

}