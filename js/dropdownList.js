const parent = document.querySelector('.wrapper');

(function () {
    const dropdownList = document.querySelector("#dropdownListOptions");
    const input = document.querySelector("#editOptionInput");

    (function switchTheme() {
        let root = document.querySelector(":root");
        let themeButton = document.querySelector("#themeSelector");
        themeButton.addEventListener('click', (event) => {
            event.preventDefault();
            root.classList.toggle('dark');
        })
    })();

    (function printValueOfTheOptionInTheInputArea() {
        const selectedOption = dropdownList.options[dropdownList.selectedIndex];
        input.value = selectedOption.value;

        dropdownList.addEventListener('change', () => {
            const selectedOption = dropdownList.options[dropdownList.selectedIndex];
            input.value = selectedOption.value;
        });
    })()

    function editDropdownListOption() {
        const selectedOption = dropdownList.options[dropdownList.selectedIndex];
 
        if (input.value.trim().length !== 0) {
            selectedOption.textContent = input.value;
            selectedOption.value = input.value;
            input.style.borderColor = '';
            const errorMessageNoTextEntered = document.querySelector('#alertNoTextEntered');
            if(errorMessageNoTextEntered) errorMessageNoTextEntered.remove();
            const errorMessageNoChange = document.querySelector('#alertNoChanges');
            if(errorMessageNoChange) errorMessageNoChange.remove();
        } else {
            input.style.borderColor = 'red';
        };
    };

    function alertIfOptionWasntChanged() {
        input.style.borderColor = '#F36223';
        
        const message = document.createElement('span');
        message.id = "alertNoChanges";
        message.textContent = "nothing has been changed";
        message.style.color = '#F36223';

        input.parentNode.appendChild(message);
    };

    function alertIfNothingWasEntered() {
        if (!document.querySelector('#alertNoTextEntered')) {
            input.style.borderColor = 'red';
        
            const message = document.createElement('span');
            message.id = "alertNoTextEntered";
            message.textContent = "empty!";
            message.style.color = 'red';

            input.parentNode.appendChild(message);
        };
    };

    document.addEventListener('DOMContentLoaded', () => {
        let messageIsShown = false;
        document.querySelector("#editOption").addEventListener("submit", (event) => {
            event.preventDefault();

            const selectedOption = dropdownList.options[dropdownList.selectedIndex];
            if (selectedOption.value === input.value) {
                if (!messageIsShown) {
                    const errorMessageNoTextEntered = document.querySelector('#alertNoTextEntered');
                    if(errorMessageNoTextEntered) errorMessageNoTextEntered.remove();
                    alertIfOptionWasntChanged();
                    messageIsShown = true;
                }
            } else if (input.value.trim().length === 0) {
                const errorMessageNoChange = document.querySelector('#alertNoChanges');
                if(errorMessageNoChange) errorMessageNoChange.remove();
                alertIfNothingWasEntered();
            }
            else {
                editDropdownListOption(); 
                if (messageIsShown) {
                    document.querySelector("#alertNoChanges").remove();
                    messageIsShown = false;
                };
            };
        });
    });
})();