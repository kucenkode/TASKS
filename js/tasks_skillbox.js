(function () {
    function createStudentsList() {
        let allStudents = [
            {name: 'Валя', age: 11},
            {name: 'Таня', age: 24},
            {name: 'Рома', age: 21},
            {name: 'Надя', age: 34},
            {name: 'Антон', age: 7}
        ]

        let containerStudentsList = document.createElement('div');
        containerStudentsList.id = 'containerStudentsList';

        containerStudentsList.style = `
            display: flex;
            text-align: justify;
            line-height: 0.9;
        `;

        let studentsList = document.createElement('ul');
        studentsList.style.listStyleType = 'none';
        for (let student = 0; student < allStudents.length; student++) {
            let studentInformation = document.createElement('li');
            studentInformation.innerHTML = `<h2>${allStudents[student].name}</h2>` + `<span>Возраст: ${allStudents[student].age} лет</span>`;
            studentsList.appendChild(studentInformation);
        }
        containerStudentsList.appendChild(studentsList);

        return containerStudentsList;
    }

    function createShowStudentsInfoButton() {
        let buttonsGroup = document.querySelector('#saveAndShowStudentsInfoButtons');
        let ShowStudentsInfoButton = document.createElement('button');
        ShowStudentsInfoButton.id = 'ShowStudentsInfoButton';
        ShowStudentsInfoButton.textContent = 'Show students';

        ShowStudentsInfoButton.style = `
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

        buttonsGroup.appendChild(ShowStudentsInfoButton);
        return ShowStudentsInfoButton;
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        event.preventDefault();

        const studentInformationList = createStudentsList();
        const studentInformationButton = createShowStudentsInfoButton();

        let container_list = document.querySelector('.container_list');
        container_list.appendChild(studentInformationList);
        
        studentInformationList.style.display = 'none';
        studentInformationButton.addEventListener('click', (event) => {
            event.preventDefault();

            if (studentInformationList.style.display === 'none') {
                studentInformationList.style.display = 'block';
                studentInformationButton.textContent = 'Hide students';
            } else {
                studentInformationList.style.display = 'none';
                studentInformationButton.textContent = 'Show students';
            }
        });
    });
}) ()
