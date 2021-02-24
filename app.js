document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
});

const handler = () => {

    let price = 500;

    const education = document.getElementById('education').value;
    const netWorth = document.getElementById('net-worth').value;

    const dombyra = document.getElementById('dombyra');
    const cooking = document.getElementById('cooking');
    const easygoing = document.getElementById('easygoing');
    const sings = document.getElementById('sings');

    const skills = [dombyra, cooking, easygoing, sings];

    const ages = document.getElementsByName('age');
    let age = '';

    for (var i = 0, length = ages.length; i < length; i++) {
        if (ages[i].checked) {
            age = ages[i].value;
            break;
        }
    }

    const attitude = document.getElementById('attitude');
    const character = document.getElementById('character');
    const person = document.getElementById('person');

    const gossips = [attitude, character, person];

    if (education == 'undergraduate') {
        price *= 1.5;
    } else if (education == 'college') {
        price *= 1.2;
    } else if (education == 'high-school') {
        price *= 1.05;
    } else {
        price *= 0.9;
    }

    if (netWorth == 'upper-class') {
        price *= 2;
    } else if (netWorth == 'middle-class') {
        price *= 1.5;
    } else {
        price *= 1.2;
    }

    for (var i = 0; i < skills.length; i++) {
        if (skills[i].value == 'dombyra' && skills[i].checked) {
            price += 100;
        } else if (skills[i].value == 'cooking' && skills[i].checked) {
            price += 200;
        } else if (skills[i].value == 'easygoing' && skills[i].checked) {
            price += 150;
        } else if (skills[i].value == 'sings' && skills[i].checked) {
            price += 100;
        }
    }

    if (age == 'lower-age') {
        price *= 1.5;
    } else if (age == 'middle-age') {
        price *= 1.2;
    } else if (age == 'upper-age') {
        price *= 0.95;
    }

    for (var i = 0; i < gossips.length; i++) {
        if (gossips[i].value == 'attitude' && gossips[i].checked) {
            price *= 0.85;;
        } else if (gossips[i].value == 'character' && gossips[i].checked) {
            price *= 0.9;
        } else if (gossips[i].value == 'person' && gossips[i].checked) {
            price -= 200;
        }
    }

    document.getElementById('price').innerHTML = 'The Bride Price is $' + price;
}
