const parent = document.querySelector('.wrapper');

const container_button = parent.querySelector('.container_button'); 
const container_list = document.createElement('div');
container_list.className = 'container_list';
parent.appendChild(container_list);

const container_dropdown_list = document.createElement('div');
container_dropdown_list.className = 'container_dropdown_list';
const list = document.createElement('select');
container_dropdown_list.appendChild(list);
container_list.appendChild(container_dropdown_list);

const input = document.createElement('input');
input.id = 'inputArea';
const saveButton = document.createElement('button');
saveButton.id = 'saveButton';
saveButton.textContent = 'Save';
container_dropdown_list.appendChild(input);
container_dropdown_list.appendChild(saveButton);
container_list.appendChild(container_dropdown_list);

(function addListOption() {
    if (!input.value.trim()) {
        input.style.borderColor = 'red';
    } else {
        const option = document.createElement('option');
        option.textContent = input.value;
        list.appendChild(option);
        input.value = '';
    }
}) ()

list.addEventListener('mouseenter', () => {
    const select = document.querySelector('select');
    const editedOption = select.value;
    input.value = editedOption;
})

function editListOption() {
    list.querySelectorAll('option').value = input.value;
}

saveButton.addEventListener('click', editListOption)

container_list.style = `
    display: flex;
    justify-content: row;
`

container_button.style = `
    display: flex;
    flex-flow: row-reverse wrap;
    background-color: var(--color1);
    place-content: stretch space-evenly;
    width: 100%;
    width: -moz-available;         
    width: -webkit-fill-available;  
    width: fill-available;
`;

container_dropdown_list.style = `
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
    font-size: calc(8px + 0.78125vw);
`;