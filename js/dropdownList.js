const parent = document.querySelector('.wrapper');
const container_list_button = parent.querySelector('.container_list_button');
const container_list = document.createElement('div');
container_list.className = 'container_list';
const list = document.createElement('select');
container_list_button.appendChild(container_list);
container_list.appendChild(list);

const input = document.createElement('input');
input.id = 'inputArea';
const saveButton = document.createElement('button');
saveButton.id = 'saveButton';
saveButton.innerHTML = 'SAVE';
container_list.appendChild(input);
container_list.appendChild(saveButton);
parent.appendChild(container_list);

function addListOption() {
    if (!input.value.trim()) {
        input.style.borderColor = 'red';
    } else {
        const option = document.createElement('option');
        option.textContent = input.value;
        list.appendChild(option);
        input.value = '';
    }
}

list.addEventListener('mouseenter', () => {
    const select = document.querySelector('select');
    const editedOption = select.value;
    input.value = editedOption;
})

function editListOption() {
    list.querySelectorAll('option').value = 'targetValue';
}

saveButton.addEventListener('click', editListOption)

input.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        addListOption();
    }
})

container_list_button.style = `
    display: flex;
    flex-flow: row-reverse wrap;
    background-color: var(--color1);
    place-content: stretch space-evenly;
    width: 100%;
    width: -moz-available;         
    width: -webkit-fill-available;  
    width: fill-available;
`;

container_list.style = `
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    background-color: var(--color1);
    align-items: center;
`;

list.style = `
    width: 25vw;
    height: 5vh;
    margin: 5px;
    border-radius: 15px;
    background-color: var(--color2);
    color: var(--color1);
`;

input.style = `
    width: 25vw;
    height: 5vh;
    margin: 5px;
    padding: 2px;
    border-radius: 15px;
    background-color: #fff;
    color: #000;
`;

saveButton.style = `
    width: 10vw;
    height: 5vh;
    margin: 5px;
    border: solid 2px;
    border-radius: 15px;
    background-color: var(--saveButton-color);
    color: var(--color1);
    font-family: 'Alegreya', serif;
    font-size: calc(5px + 10 * (100vw / 1280)); 
`;