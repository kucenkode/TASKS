/* Вывод символа в строке */
let origStr = "Я изучаю JavaScript"

//Способ 1
function get_the_character_var_1(char_position) {
    if (char_position > 0) {
        let char_output = origStr[char_position - 1] //так как здесь строка представлена массивом, индексация начинается с 0
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

console.log(get_the_character_var_1(3))
console.log(get_the_character_var_1(1))
console.log(get_the_character_var_1(-1))



