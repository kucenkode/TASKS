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
        const containerStudentsList = document.querySelector('#containerStudentsList');
        if (!document.querySelector('.alertIncorrectInput')) {
            const message = document.createElement('span');
            message.className = "alertIncorrectInput";
            message.textContent = "Please enter the student's name and age!";
            message.style.color = 'red';
            message.style.margin = '20px';

            containerStudentsList.style.gridTemplateRows = '30% 60% 25%';
            containerStudentsList.style.justifyContent = 'initial';
            containerStudentsList.style.alignItems = 'center';
            
            document.querySelector('#containerStudentsList').appendChild(message);
        }
    }

    function alertIfStudentExists() {
        const containerStudentsList = document.querySelector('#containerStudentsList');
        if (!document.querySelector('#alertStudentExists')) {
            const addStudentButton = document.querySelector('.addStudent');
            addStudentButton.borderColor = '#F36223';
            
            const message = document.createElement('span');
            message.id = "alertStudentExists";
            message.textContent = "the student is on the list!";
            message.style.color = '#F36223';

            containerStudentsList.style.gridTemplateRows = '30% 60% 25%';
            containerStudentsList.style.justifyContent = 'initial';
            containerStudentsList.style.alignItems = 'center';
            
            document.querySelector('#containerStudentsList').appendChild(message);
        };
    };

    function alertsRemove() {
        const errorMessageIncorrectInput = document.querySelector('.alertIncorrectInput');
        const errorMessageStudentExists = document.querySelector('#alertStudentExists');
        if (errorMessageIncorrectInput) errorMessageIncorrectInput.remove();
        else if(errorMessageStudentExists) errorMessageStudentExists.remove();
    };

    function addStudentToList() {
        const addStudentButton = document.querySelector('.addStudent');
        const studentInfo = addStudentButton.value;
        let name = '';
        let age = '';
    
        for (let i = 0; i < studentInfo.length; i++) {
            const charCode = studentInfo.charCodeAt(i);
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))  {
                name += String.fromCharCode(charCode);
            } else if (charCode >= 48 && charCode <= 57) {
                age += String.fromCharCode(charCode);
            };
        };
        
        if (name.length && age.length !== 0) {
            const studentsList = document.querySelector('#studentsList');
            const studentInformation = studentsList.querySelectorAll('li');
            const editedName_firstCharUpperCase = name.charAt(0).toUpperCase() + name.slice(1);

            let studentExists = Array.from(studentInformation).some(student => {
                const studentName = student.querySelector('h2').textContent;
                const studentAge = student.querySelector('span:not(.deleteStudent)').textContent.split(' ')[1];
                return studentName === editedName_firstCharUpperCase && studentAge === age;
            });
    
            if (!studentExists) {
                const studentInformation = document.createElement('li');
                studentInformation.innerHTML = `<span class="deleteStudent">&#10006;</span>` +
                                               `<h2>${editedName_firstCharUpperCase}</h2>` +
                                               `<span>Age: ${age} years</span>`;
                studentsList.insertBefore(studentInformation, addStudentButton);
                addStudentButton.value = '';
                alertsRemove();
        } else {
            alertIfStudentExists();
            const errorMessageIncorrectInput = document.querySelector('.alertIncorrectInput');
            if (errorMessageIncorrectInput) errorMessageIncorrectInput.remove();
        }
        } else {
            alertIncorrectInput();
            const errorMessageStudentExists = document.querySelector('#alertStudentExists');
            if(errorMessageStudentExists) errorMessageStudentExists.remove();
        } 
    };

    function toggleClasses(button) {
        if (!button.clickCount) {
            button.clickCount = 0;
        }
        if (button.type === 'text') {
            button.clickCount++;
            if (button.clickCount === 2) {
                button.classList.toggle('addingStudent');
                button.type = 'button';
                button.value = '+';
            }
        } else {
            button.classList.toggle('addingStudent');
            button.type = 'text';
            button.value = '';
            button.placeholder = 'Enter the student\'s name and age...';
            button.clickCount = 0;
        };
    };
    
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
            alertsRemove();
        });

        document.querySelector('.addStudent').addEventListener('click', (event) => {
            event.preventDefault();
            toggleClasses(event.target);
            alertsRemove();
        });

        document.querySelector('.addStudent').addEventListener('keydown', (event) => {
            if (event.keyCode === 13 && event.target.type === 'text') {
                if (event.target.value.trim().length !== 0) {
                    addStudentToList();
                    event.target.value = '';
                } else {
                    alertIncorrectInput();
                    return;
                }
            };
        });
    });
})();
