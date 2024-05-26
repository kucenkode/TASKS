/*const container_list = document.querySelector('.container_list');

(function () {
    //Задание 3
    function createStudentsList() {
        let allStudents = [
            {name: 'Валя', age: 11},
            {name: 'Таня', age: 24},
            {name: 'Рома', age: 21},
            {name: 'Надя', age: 34},
            {name: 'Антон', age: 7}
        ];
    
        let studentsList = document.createElement('ul');
        for (let i = 0; i < allStudents.length; i++) {
            let studentInformation = document.createElement('li');
            studentInformation.innerHTML = `<h2>${allStudents[i].name}</h2>` + `<span>Возраст: ${allStudents[i].age} лет</span>`;
            studentsList.appendChild(studentInformation);
    
        }
        return studentsList;
    }
    
    //Задание 4
    function createShowStudentsButton() {
        let button_container = document.createElement('div');
        let showStudentsButton = document.createElement('button');
        let saveButton = document.querySelector('#saveButton');
 
        showStudentsButton.textContent = 'Show students';
    
        //Группируем кнопку сохранения и кнопку для вывода информации о студентах
        button_container.appendChild(saveButton);
        button_container.appendChild(showStudentsButton);
        container_list.appendChild(button_container);
        
        showStudentsButton.style = `
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
            showStudentsButton,
            saveButton
        }
    }
    

    document.addEventListener('DOMContentLoaded', () => {
        const createStudList = createStudentsList();
        const createButton = createShowStudentsButton();

        parent.appendChild(createStudList);
        parent.appendChild(createButton.showStudentsButton);


        createButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (createStudList.studentsList.style.display === 'none') {
                createStudList.studentsList.style.display = 'block';
                showStudentsInfo.textContent = 'Hide students';
            } else {
                createStudList.studentsList.style.display = 'none';
                showStudentsInfo.textContent = 'Show students';
            }
        })
    })
}) */

