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

