(function () {
    const studentsList = document.querySelector('#studentsList');

    function createStudentsList() {
        let allStudents = [
            { name: 'Valya', age: 11 },
            { name: 'Tanya', age: 24 },
            { name: 'Roma', age: 21 },
            { name: 'Nadya', age: 34 },
            { name: 'Anton', age: 7 }
        ];

        studentsList.style.display = 'none';
        allStudents.forEach(student => {
            let studentInformation = document.createElement('li');
            studentInformation.innerHTML = `<span class="deleteStudent">&#10006;</span>` +
                                    `<h2>${student.name}</h2>` +
                                    `<span>Age: ${student.age} years</span>`;
            studentsList.appendChild(studentInformation);
        });

        const addStudentButton = document.createElement('input');
        addStudentButton.type = 'button';
        addStudentButton.className = 'addStudent';
        addStudentButton.value = '+';
        studentsList.appendChild(addStudentButton);
    }

    function alertIncorrectInput() {
        if (!document.querySelector('.alertIncorrectInput')) {
            const message = document.createElement('span');
            message.className = "alertIncorrectInput";
            message.textContent = "Please enter the student's name and age!";
            message.style.color = 'red';
            message.style.position = 'relative'; 
            message.style.margin = '20px';
            document.querySelector('#containerStudentsList').appendChild(message);
        }
    }

    function addStudentToList(name, age) {
        const studentInformation = document.createElement('li');
        studentInformation.innerHTML = `<span class="deleteStudent">&#10006;</span>` +
                                `<h2>${name}</h2>` +
                                `<span>Age: ${age} years</span>`;
        studentsList.insertBefore(studentInformation, document.querySelector('.addStudent'));
    }

    function toggleClasses(button) {
        button.classList.toggle('addingStudent');
        if (button.type === 'button') {
            button.type = 'text';
            button.value = '';
            button.placeholder = 'Enter the student\'s name and age...';
        } else {
            button.value = '+';
            button.type = 'button';
        }
    }

    function showStudentsInformation() {
        studentsList.style.display = studentsList.style.display === 'none' ? 'flex' : 'none';
        document.querySelector("#ShowStudentsInfoButton").textContent =
            studentsList.style.display === 'flex' ? 'Hide Students' : 'Show Students';
    }

    function deleteStudent(event) {
        if (event.target.className === 'deleteStudent') {
            event.target.closest('li').remove();
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        createStudentsList();
        studentsList.addEventListener('click', deleteStudent);

        document.querySelector("#ShowStudentsInfoButton").addEventListener('click', (event) => {
            event.preventDefault();
            showStudentsInformation();
        });

        document.querySelector('.addStudent').addEventListener('click', (event) => {
            event.preventDefault();
            toggleClasses(event.target);
            const errorMessage = document.querySelector('.alertIncorrectInput');
            if (errorMessage) {
                errorMessage.remove();
            };
        });

        document.querySelector('.addStudent').addEventListener('keydown', (event) => {
            if (event.keyCode === 13 && event.target.type === 'text') {
                const input = event.target.value.trim().split('');
                if (input.length === 2 && !isNaN(input[1])) {
                    addStudentToList(input[0], input[1]);
                    event.target.value = '';
                    const errorMessage = document.querySelector('.alertIncorrectInput');
                    if (errorMessage) {
                        errorMessage.remove();
                    }
                } else {
                    alertIncorrectInput();
                };
            };
        });
    });
})();
