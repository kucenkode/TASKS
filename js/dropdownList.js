const parent = document.querySelector('.wrapper');

(function () {
    //контейнер для списка
    const container_button = parent.querySelector('.container_button'); 
    const container_list = document.createElement('div');
    container_list.className = 'container_list';
    parent.appendChild(container_list);

    function switchTheme() {
        let root = document.querySelector(":root");
        let themeButton = document.querySelector("#themeSelector")
        themeButton.addEventListener('click', (event) => {
            event.preventDefault();
            root.classList.toggle('dark');
        })

        return themeButton;
    }

    function createDropdownList() {
        // список (тег select)
        const list = document.createElement('select');
        list.id = 'dropdown_list_options';
        container_list.appendChild(list);
    
        list.style = `
            width: 25vw;
            height: 5vh;
            margin: 5px;
            border-radius: 15px;
            background-color: var(--color2);
            color: var(--color1);
        `;

        return list;
    }

    function createListItem(input, list) {
        const option = document.createElement('option');
        option.textContent = input.value;
        list.appendChild(option);
    }

    function todoForm() {
        const form = document.createElement('form');
        form.id = "dropdown_list_input";
        const input = document.createElement('input');
        input.placeholder = "What do you have to do?";
        
        //Кнопка сохранения
        const buttonsGroup = document.createElement('div');
        buttonsGroup.id = 'saveAndShowStudentsInfoButtons';
        const saveButton = document.createElement('button');
        saveButton.id = 'saveButton';
        saveButton.textContent = 'Save';
        buttonsGroup.appendChild(saveButton);

        //Добавляем на страницу
        form.appendChild(input);
        form.appendChild(buttonsGroup);
        container_list.appendChild(form);

        form.style = `
            display: flex;
            flex-direction: column;
            align-items: center;
        `

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

        return {
            form,
            input,
            saveButton
        }
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        event.preventDefault();
        
        const dropdownList = createDropdownList();
        const formList = todoForm();
        const theme = switchTheme();
  
        //Добавляем на страницу
        container_list.appendChild(dropdownList);
        container_list.appendChild(formList.form);
        container_button.appendChild(theme);

        formList.form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!formList.input.value) {
                formList.input.style.borderColor = 'red';
                return;
            }
            formList.input.style.borderColor = '';
            createListItem(formList.input, dropdownList);
            formList.input.value = '';
        });

        dropdownList.addEventListener('change', (event) => {
            event.preventDefault();
            const selectedOption = dropdownList.options[dropdownList.selectedIndex];
            formList.input.value = selectedOption.textContent;
            
            formList.saveButton.addEventListener('click', (event) => {
                event.preventDefault();
                if (formList.input.value) {
                    dropdownList.options[dropdownList.selectedIndex].textContent = formList.input.value;
                    formList.input.value = '';
                }
            });
        });
        
        container_list.style = `
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: auto;
            background-color: var(--color1);
            align-items: center;
        `;

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
    });
}) ()