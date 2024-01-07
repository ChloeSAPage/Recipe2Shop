const list = document.querySelector('#shoppinglist');
const input = document.querySelector('input');
const button = document.querySelector('#AddItem');

button.addEventListener('click', () => {
    const item = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(listButton);
    listButton.textContent = 'Delete';

    list.appendChild(listItem);

    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    })

    input.focus();

})

