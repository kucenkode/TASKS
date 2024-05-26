/*(function () {
    let container_list = document.querySelector('container_list');
    let container_skillbox_list = document.createElement('div');
    container_skillbox_list.id = 'container_skillbox_list';
    container_list.appendChild(container_skillbox_list);

    /*
    //Задание 1
    (function (name, age) {
        let task1_skillbox = document.createElement('div');
        task1_skillbox.innerHTML = `<h2>${name}</h2>` + `<span>Возраст: ${age} лет</span>`;
        container_skillbox_list.appendChild(task1_skillbox);
    }) ('Dasha', 18)

    //Задание 2
    let studentObj = {
        name: 'Katya',
        age: 25
    }

    function createStudentsCard(student) {
        let task2_skillbox = document.createElement('div');
        task2_skillbox.innerHTML = `<h2>${student.name}</h2>` + `<span>Возраст: ${student.age} лет</span>`;
        container_skillbox_list.appendChild(task2_skillbox);
    }

    createStudentsCard(studentObj) 
    

    //Задание 3
    let allStudents = [
        {name: 'Валя', age: 11},
        {name: 'Таня', age: 24},
        {name: 'Рома', age: 21},
        {name: 'Надя', age: 34},
        {name: 'Антон', age: 7}
    ]

    let task3_skillbox = document.createElement('ul');

    function createStudentsList(listArr) {
        if (task3_skillbox.children.length === 0) {
            task3_skillbox = document.createElement('ul');
            for (let one_student = 0; one_student < listArr.length; one_student++) {
                let studentInformation = document.createElement('li');
                studentInformation.innerHTML = `<h2>${listArr[one_student].name}</h2>` + `<span>Возраст: ${listArr[one_student].age} лет</span>`;
                task3_skillbox.appendChild(studentInformation);
            }
            container_skillbox_list.appendChild(task3_skillbox);
        }
    }

    //Задание 4
    let button_container = document.createElement('div');
    let task4_skillbox_button = document.createElement('button');

    task4_skillbox_button.textContent = 'Show students';
    button_container.appendChild(saveButton);
    button_container.appendChild(task4_skillbox_button);
    container_dropdown_list.appendChild(button_container)

    task4_skillbox_button.addEventListener('click', (event) => {
        event.preventDefault();
        if (task3_skillbox.style.display === 'none') {
            createStudentsList(allStudents);
            task3_skillbox.style.display = 'block';
            task4_skillbox_button.textContent = 'Hide students';
        } else {
            task3_skillbox.style.display = 'none';
            task4_skillbox_button.textContent = 'Show students';
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        let 
    })

    //Стили
    container_skillbox_list.style = `
        display: flex;
        align-items: baseline;
        text-align: justify;
    `;

    task3_skillbox.style = `
        width: inherit;
        height: inherit;
    `
    task4_skillbox_button.style = `
        width: 10vw;
        height: 5vh;
        margin: 5px;
        border: solid 2px;
        border-radius: 15px;
        background-color: var(--saveButton-color);
        color: var(--color1);
        font-family: 'Alegreya', serif;
        font-size: calc(8px + 0.78125vw);
    `
}) ()
    */

