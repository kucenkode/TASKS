(function () {
    (function createStudentsList() {
        let allStudents = [
            {name: 'Валя', age: 11},
            {name: 'Таня', age: 24},
            {name: 'Рома', age: 21},
            {name: 'Надя', age: 34},
            {name: 'Антон', age: 7}
        ]

        studentsList.style.display = 'none';
        for (let student = 0; student < allStudents.length; student++) {
            let studentInformation = document.createElement('li');
            studentInformation.innerHTML = `<h2>${allStudents[student].name}</h2>` + `<span>Возраст: ${allStudents[student].age} лет</span>`;
            studentsList.appendChild(studentInformation);
        }
    }) ();

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
        const studentInformationButton = document.querySelector("#ShowStudentsInfoButton");

        studentInformationButton.addEventListener('click', (event) => {
            event.preventDefault();
            showStudentsInformation();
        });
    });
}) ()
