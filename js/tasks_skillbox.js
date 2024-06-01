(function () {
    function createStudentsList() {
        let allStudents = [
            { name: 'Валя', age: 11 },
            { name: 'Таня', age: 24 },
            { name: 'Рома', age: 21 },
            { name: 'Надя', age: 34 },
            { name: 'Антон', age: 7 }
        ]

        studentsList.style.display = 'none';
        for (let student = 0; student < allStudents.length; student++) {
            let studentInformation = document.createElement('li');
            studentInformation.innerHTML = `<h2>${allStudents[student].name}</h2>` + `<span>Возраст: ${allStudents[student].age} лет</span>`;
            studentsList.appendChild(studentInformation);
        }

        const addStudent = document.createElement('input');
        addStudent.type = 'button';
        addStudent.className = 'addStudent';
        addStudent.value = '+';

        return {
            studentsList,
            addStudent
        };
    };

    function addStudentToList() {
        const addStudentButton = document.querySelector(".addStudent");

        addStudentButton.classList.toggle('addingStudent');
        if (addStudentButton.type === 'button') {
            addStudentButton.type = 'text';
            addStudentButton.value = '';
            addStudentButton.placeholder = 'Enter the student\'s name and age here...';
        } else {
            addStudentButton.value = '+';
            addStudentButton.type = 'button';
        };

        addStudentButton.addEventListener('keydown', (event) => {
            let messageIsShown = false;
            if (event.keyCode === 13) {
                event.preventDefault();
                if (addStudentButton.value.trim() === 0) {
                    addStudentButton.style.borderColor = 'red';
                    return;
                }
                const newStudent = addStudentButton.value.split(' ');
                let name, age;

                if (!isNaN(newStudent[0]) && isNaN(newStudent[1])) {
                    name = newStudent[1];
                    age = newStudent[0];
                } else if (isNaN(newStudent[0]) && !isNaN(newStudent[1])) {
                    name = newStudent[0];
                    age = newStudent[1];
                } else {
                    addStudentButton.style.borderColor = 'red';
                    const message = document.createElement('span');
                    message.id = "alertIncorrectInput";
                    message.textContent = "Please enter name and age of student!";
                    message.style.color = 'red';
                    document.querySelector('#containerStudentsList').appendChild(message, addStudentButton);
                    messageIsShown = true;
                    return;
                }
                const studentInformation = document.createElement('li');
                studentInformation.innerHTML = `<h2>${name}</h2>` + `<span>Возраст: ${age} лет</span>`;
                document.querySelector('#studentsList').insertBefore(studentInformation, addStudentButton);
                addStudentButton.value = "";
                addStudentButton.style.borderColor = "";

                if (messageIsShown) {
                    document.querySelector("#alertIncorrectInput").remove();
                    messageIsShown = false;
                };
            };
        });
    };

    function showStudentsInformation() {
        const studentInformationButton = document.querySelector("#ShowStudentsInfoButton");
        const studentsList = document.querySelector("#studentsList");

        if (studentsList.style.display === 'none') {
            studentsList.style.display = 'flex';
            studentInformationButton.textContent = 'Hide students';
        } else {
            studentsList.style.display = 'none';
            studentInformationButton.textContent = 'Show students';
        };
    };

    document.addEventListener('DOMContentLoaded', () => {
        const showStudentInformationButton = document.querySelector("#ShowStudentsInfoButton");
        const studentsList = document.querySelector('#studentsList');
        const containerStudentsList = document.querySelector('#containerStudentsList');

        const createList = createStudentsList();
        containerStudentsList.appendChild(createList.studentsList);
        studentsList.appendChild(createList.addStudent);

        showStudentInformationButton.addEventListener('click', (event) => {
            event.preventDefault();
            showStudentsInformation();
        });

        createList.addStudent.addEventListener('click', (event) => {
            event.preventDefault();
            addStudentToList();
        });
    });
}) ()