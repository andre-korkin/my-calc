import { useState } from 'react'
import Tablo from './components/tablo'
import Buttons from './components/buttons'


function App() {
    const [prevRes, setPrevRes] = useState('0')  // предыдущее число или последний результат
    const [prevOper, setPrevOper] = useState(undefined)  // предыдущая операция
    const [input, setInput] = useState('0')  // текущее число
    const [inputing, setInputing] = useState(true)  // флаг, использующийся для понимания, что происходит в калькуляторе: число/операция
    
    return (
        <div className='calculator'>
            <Tablo inp={input} />
            <Buttons btnClick={handleClick} />
        </div>
    )


    function handleClick(txt) {  // в зависимости от того, какая нажата кнопка, реализуются разные сценарии
        switch(txt) {
            case 'C':
                setInput('0')
                setPrevRes('0')
                setPrevOper(undefined)
                break
            case '◄':
                input.length > 1 ? setInput(input.slice(0, input.length - 1)) : setInput('0')
                break
            case '=':
                inputing ? getResult('=') : setPrevOper('=')
                break
            case '+':
                inputing ? getResult('+') : setPrevOper('+')
                break
            case '-':
                inputing ? getResult('-') : setPrevOper('-')
                break
            case '*':
                inputing ? getResult('*') : setPrevOper('*')
                break
            case ':':
                inputing ? getResult(':') : setPrevOper(':')
                break
            default:
                inputing ? validInput(txt) : resetInput(txt)
        }
    }

    function validInput(txt) {  // проверка на валидность ввода цифровой информации
        if(input === '0') {
            if(txt === '.') {
                setInput('0.')
            }
            else {
                txt !== '00' && setInput(txt)
            }
        }
        else {
            if(txt === '.') {
                !input.includes('.') && input.length < 7 && setInput(input + txt)
            }
            else {
                input.length < 8 && setInput(input + txt)
            }
        }
    }

    function getResult(operation) {  // получение результата
        if(prevOper === undefined) {  // если только начинаем пользоваться калькулятором, нет предыдущих операций
            setPrevOper(operation)
            setPrevRes(input)
        }
        else {
            let res = ''
            switch(prevOper) {
                case '+':
                    res = String(Number(prevRes) + Number(input))
                    break
                case '-':
                    res = String(Number(prevRes) - Number(input))
                    break
                case '*':
                    res = String(Number(prevRes) * Number(input))
                    break
                case ':':
                    res = input !== '0' ? String(Number(prevRes) / Number(input)) : '0'  // деления на 0 не происходит / res => 0
                    break
                default:
                    setInput(input)
                    setPrevOper(undefined)
                    res = input
            }
            
            if(res.length > 8) {  // отработка проблемы длинного числа
                if(res.includes('.')) {
                    res = res.slice(0, 9)
                }
                else {
                    res = (res / (10 ** (res.length - 1))).toFixed(2) + ` E${res.length - 1}`
                }
            }
            setInput(res)
            setPrevOper(operation)
        }
        setInputing(false)
    }

    function resetInput(txt) {  // подготовка к вводу нового числа после выбора операции
        setPrevRes(input)
        switch(txt) {
            case '.':
                setInput('0.')
                break
            case '00':
                setInput('0')
                break
            default:
                setInput(txt)
        }
        setInputing(true)
    }
}

export default App
