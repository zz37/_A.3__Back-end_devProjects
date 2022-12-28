const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.Clear()
    }

    Clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    Delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    AppendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) { return }
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    ChooseOperation(operation) {
        if (this.currentOperand === '') { return }
        if (this.previousOperand !== '') {
            this.Compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    Compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) { return } 
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    GetDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    UpdateDisplay() {
        this.currentOperandTextElement.innerText =
            this.GetDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.GetDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}
// calling the new class constructor
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.AppendNumber(button.innerText)
        calculator.UpdateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.ChooseOperation(button.innerText)
        calculator.UpdateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.Compute()
    calculator.UpdateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.Clear()
    calculator.UpdateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.Delete()
    calculator.UpdateDisplay()
})