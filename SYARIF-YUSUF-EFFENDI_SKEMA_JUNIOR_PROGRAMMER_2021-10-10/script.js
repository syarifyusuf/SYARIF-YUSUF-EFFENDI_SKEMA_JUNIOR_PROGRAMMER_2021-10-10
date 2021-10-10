const numbers= document.querySelectorAll(".number") // mendefinisikan numbers

// mendefinisikan function untuk memperbarui layar tampilan pada calculator-screen dengan updateScreen
const calculatorScreen = document.querySelector('.calculator-screen') // mendefinisikan calculatorScreen
const updateScreen = (number) => {
    calculatorScreen.value = number
}
// menyimpan angka dan operasi hitung untuk melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => { // mendefinisikan function inputNumber dan menjalankannya saat diklik
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number  // untuk mengaktifkan input nilai lebih dari 2 angka       
    }
}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => { // untuk menambahkan click event ke setiap tombol operator
        inputNumber(event.target.value)
        updateScreen(currentNumber) // merubah argument updateScreen menjadi currentNumber
    })
})

const operators = document.querySelectorAll(".operator") // mendefinisikan operators

const inputOperator = (operator) => { // mendefinisikan input operator
    if (calculationOperator === '') {
    prevNumber = currentNumber // memberikan nilai yang tersimpan di currentNumber pada prevNumber
    }
    calculationOperator = operator // memberikan operator ke calculationOperator sebagai argumen
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => { // menjalankan inputOperator saat operator diklik
        inputOperator(event.target.value)
    })
})

// mengaktifkan function kalkulasi pada aplikasi kalkulator
const equalSign = document.querySelector('.equal-sign') // mendefinisikan equal-sign

const calculate = () => { // mendefinisikan function calculate
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber) // menggunakan parseFloat agar dapat menggunakan angka desimal
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return

    }
    currentNumber = result
    calculationOperator = ''
}
equalSign.addEventListener('click', () => { // menjalankan equalSign saat diklik
    calculate ()
    updateScreen(currentNumber) // memperbarui layar saat tombol equal diklik
})

// membuat tombol AC agar dapat bekerja dengan baik
const clearBtn = document.querySelector('.all-clear') // mendefiniskan clearBtn

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
    
})
const clearAll = () => { // mendedifinikasin function clearAll
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'  // menetapkan angka 0 pada currentNumber
}

// membuat aplikasi agar dapat mengkalkulasikan desimal
const decimal = document.querySelector('.decimal') // mendefinisikan decimal

decimal.addEventListener('click', (event) => { // untuk menjalankan function saat tombol titik desimal diklik
    inputDecimal(event.target.value)
    updateScreen(currentNumber) // untuk memperbarui layar ketika tombol desimal diklik
})

inputDecimal = (dot) => {  // untuk mencegah peng-input-an desimal secara berulang kali
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot // menambahkan titik desimal ke currentNumber
}