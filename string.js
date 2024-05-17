/* Вывод символа в строке */

let origStr = "Я изучаю JavaScript"

//Способ 1
console.log("Способ 1: ")
function get_the_character_way_1(char_position) {
    if (char_position > 0) {
        let char_output = origStr[char_position - 1] //индексация начинается с 0
        return char_output
    }
    //Если нужно вывести символ с конца
    else if (char_position < 0) {
        let char_output = origStr[origStr.length + char_position] //из длины строки вычитаем позицию, на которой находится символ
        return char_output
    }
    //Если ввели строку, 0 и тд
    else {
        return "Некорректный ввод данных! Попробуйте снова."
    }
}

console.log(get_the_character_way_1(3))
console.log(get_the_character_way_1(1))
console.log(get_the_character_way_1(-1))

//Способ 2

console.log("Способ 2: ")
function get_the_character_way_2(char_position) {
    if (char_position > 0) {
        let char_output = origStr.charAt(char_position - 1)
        return char_output
    }
    //Если нужно вывести символ с конца
    else if (char_position < 0) {
        let char_output = origStr.charAt(origStr.length + char_position)
        return char_output
    }
    //Если ввели строку, 0 и тд
    else {
        return "Некорректный ввод данных! Попробуйте снова."
    }
}

console.log(get_the_character_way_2(3))
console.log(get_the_character_way_2(1))
console.log(get_the_character_way_2(-1))


/* Использование методов работы с массивами */

let users = [
    { name: 'Dasha', age: 18, education: 'Higher incomplete education'},
    { name: 'Katya', age: 21, education: 'Secondary professional education.'},
    { name: 'Misha', age: 10, education: 'Early Years Education'},
    { name: 'Sonya', age: 35, education: 'Higher education'}
]

//slice
console.log("Метод slice: ")
function slice_method(start, end) {
    let result = users.slice(start, end)
    return result
}

console.log(slice_method(2, 4)) //Выводит со 3 до 4
console.log(slice_method(1)) //выводит всё, начиная со второго

//splice метод может и добавлять в массив, и удалять из него 
console.log("Метод splice: ")
function splice_method(start, end, addValue) {
    let result = users.splice(start, end, addValue)
    return users //Возвращаем измененный массив, но если здесь будет "return result", он вернет удаленный объект
}

console.log(splice_method(0, 1, { name: 'Olya', age: 15, education: 'Secondary school education.'})) //Заменит первый объект массива на новый
console.log(splice_method(2, 0, { name: 'Ilya', age: 28, education: 'No education.'})) //Добавит новый объект в массив

//map 
//Выведем только имена пользователей
console.log("Метод map: ")
const users_names = users.map(person => person.name) 
console.log(users_names)

//Цикл for
console.log("Цикл for: ")
function print_users_FOR() {
    for (let index = 0; index < users.length; index++) {
        console.log(users[index])
    }
}

print_users_FOR()

//forEach
console.log("Метод forEach: ")
let user_information = users.forEach(person => console.log(person))

//filter
//Оставим в массиве только совершеннолетних пользователей
console.log("Метод filter: ")
let adults = users.filter(person => person.age > 18)
console.log(adults)

//reduce
//Посчитаем общий возраст всех пользователей
console.log("Метод reduce: ")
let amount = users.reduce((total_age, person) => {
    return total_age + person.age
}, 0) 

console.log(amount)

//sort
//Отсортируем массив по возрастанию возраста пользователей
console.log("Метод sort: ")
let sort_age = users.sort((a, b) => a.age - b.age) 
console.log(sort_age) 

//some
//Проверим есть ли в массиве пользователь с дошкольным образованием
console.log("Метод some: ")
let check_education = users.some(person => person.education == 'Early Years Education') //Вернет true, если минимум один элемент массива удовлетворяет условию
console.log(check_education)

//every
//Проверим все ли пользователи старше 17 лет
console.log("Метод every: ")
let check_age = users.every(person => person.age > 17) //Вернет true, если все элементы массива соответствуют условию
console.log(check_age)


/* Замена символом в строке */

//Способ 1
console.log("Замена символа в строке. Способ 1: ")
function replaceCharacterWay1(replChar, newChar) {
    //Если строка содержит введенный символ replChar, то заменит его на newChar
    if (origStr.includes(replChar)) {
        let result = origStr.replace(replChar, newChar)
        return result
    } else return 'Данная строка не содержит введенный фрагмент. Попробуйте снова.'
} 

console.log(replaceCharacterWay1('ю', 'Ю'))
console.log(replaceCharacterWay1('JavaScript', 'Frontend'))

//Способ 2
console.log('Способ 2: ')
function replaceCharacterWay2(replChar, newChar) {
    if (origStr.includes(replChar)) {
        //Если ввели символ
        if (replChar.length === 1) {
            const result =  origStr.split('').map(character => character === replChar ? newChar : character).join('')
            return result
        }
        //Если ввели строку
        const result =  origStr.split(' ').map(character => character === replChar ? newChar : character).join(' ')
        return result
    }
}

console.log(replaceCharacterWay2('ю', 'Ю'))
console.log(replaceCharacterWay2('JavaScript', 'Frontend'))

/* Поиск индекса элемента в массиве */

//Способ 1
console.log("Поиск индекса элемента в массиве. Способ 1: ")
let animals = ['cat', 'dog', 'parrot','horse']
function getAnimalPositionWay1(target) {
    if (animals.includes(target)) {
        //если значение элемента массива совпадает с введенным, выводим его индекс
        let index = animals.indexOf(target)
        return index;
    } else return 'Такого элемента нет!'
}

console.log(getAnimalPositionWay1('parrot'))
console.log(getAnimalPositionWay2('crocodile'))

//Способ 2
//Метод findIndex
console.log('Способ 2: ')
function getAnimalPositionWay2(target) {
    if (animals.includes(target)) {
        let index = animals.findIndex(animal => animal == target)
        return index
    } else return 'Такого элемента нет!'
}

console.log(getAnimalPositionWay2('parrot'))
console.log(getAnimalPositionWay2('tiger'))

/* Удаление элементов из массива */
//Так как у меня уже есть подобный массив, просто добавим недостающие значения
animals.push('fish', 'chicken', 'lion')

//Способ 1
//Метод splice меняет исходный массив
console.log('Удаление элементов из массива. Способ 1: ')
function removeAnimalWay1(start, amountToDelete) {
        let deletedAnimal = animals.splice(start, amountToDelete)
        return animals
}

console.log(removeAnimalWay1(4, 1))
console.log(removeAnimalWay1(0, 1))
console.log(removeAnimalWay1(3, 2))

//Способ 2
//Верну, что удалила, чтобы продолжить работу именно с этим массивом
animals.push('cat', 'fish', 'chicken', 'lion') 
console.log('Способ 2: ')
function removeAnimalWay2(animalToDelete) {
    if (animals.includes(animalToDelete)) {
        //В измененном массиве оставляем все, кроме введенного значения animalToDelete
        let modifiedArray = animals.filter(animal => animal !== animalToDelete)
        return modifiedArray
    } else return 'Элемент не найден.'
}

console.log(removeAnimalWay2('chicken'))
console.log(removeAnimalWay2('cat'))

//Способ 3
console.log('Способ 3: ')
function removeAnimalWay3() {
    //Можно использовать методы, удаляющие первый/последний элемент. Они тоже меняют исходный массив
    let deleteFirstAnimal = animals.shift() //удаляет первый элемент
    let deleteLastAnimal = animals.pop() //удаляет последний элемент
    return animals
}

console.log(removeAnimalWay3())

//Способ 4
//Можно использовать метод, похожий на splice, но при этом не меняющий исходный массив - slice
console.log('Способ 4: ')
function removeAnimalWay4(start, end) {
    let deletedAnimal = animals.slice(start, end)
    return deletedAnimal
}

console.log(removeAnimalWay4(0, -1))
console.log(removeAnimalWay4(1)) 

/* Фильтрация массива */

const unfilteredArray = [31, 10, 'chicken', 9, 'fish', 10]

//Сделаем, чтобы можно было отфильтровать массив как по определенному типу данных, так и по значению
console.log('Фильтрация массива:')
function filterArrayByType(target) {
    if (unfilteredArray.some(element => typeof(element) === target)) {
        //Если хоть один элемент удовлетворяет условию, то фильтруем массив по этому типу данных
        let filteredArray = unfilteredArray.filter(element => typeof(element) === target)
        return filteredArray
    }
    else if (unfilteredArray.some(element => element === target)) {
        //Если хоть один элемент удовлетворяет условию, то фильтруем массив по этому значению (например, 10)
        let filteredArray = unfilteredArray.filter(element => element === target)
        return filteredArray
    } else return 'Не нашлось ни одного элемента, удовлетворяющего условию.'
}

console.log(filterArrayByType('string'))
console.log(filterArrayByType('number'))
console.log(filterArrayByType('object'))
console.log(filterArrayByType(10))

/* Числа фибоначчи */
//initValue - начальное значение для вычисления чисел фибоначчи. 
function fibonacci(initValue, positionOfNumberToGet) {
    let fibonacciResult = [0, 1]
    for (let number = 2; number < initValue; number++) {
        fibonacciResult[number] = fibonacciResult[number - 2] + fibonacciResult[number - 1] //предыдущее значение + результат вычисления
    }
    return `Числа фибоначчи: ${fibonacciResult} \nЧисло на позиции ${positionOfNumberToGet}: ${fibonacciResult[positionOfNumberToGet - 1]}`
}

console.log(fibonacci(10, 4))
