import { useState } from 'react'
import Tablo from './components/tablo'
import Buttons from './components/buttons'


function App() {
    const [prevRes, setPrevRes] = useState('0')
    const [prevOper, setPrevOper] = useState(undefined)
    const [input, setInput] = useState('0')
    const [inputing, setInputing] = useState(true)
    
    return (
        <div className='calculator'>
            <Tablo inp={input} />
            <Buttons btnClick={handleClick} />
        </div>
    )


    function handleClick(txt) {
        switch(txt) {
            case 'C':
                setInput('0')
                break
            case '◄':
                input.length > 1 ? setInput(input.slice(0, input.length - 1)) : setInput('0')
                break
            case '=':
                getResult('=')
                break
            case '+':
                getResult('+')
                break
            case '-':
                getResult('-')
                break
            case '*':
                getResult('*')
                break
            case ':':
                getResult(':')
                break
            default:
                inputing ? validInput(txt) : resetInput(txt)
        }
    }

    function validInput(txt) {
        if(input === '0') {
            txt !== '0' && txt !== '.' && txt !== '00' && setInput(txt)
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

    function getResult(operation) {
        if(prevOper === undefined) {
            setPrevOper(operation)
            setPrevRes(input)
        }
        else {
            switch(prevOper) {
                case '+':
                    setInput(Number(prevRes) + Number(input))
                    break
                case '-':
                    setInput(Number(prevRes) - Number(input))
                    break
                case '*':
                    setInput(Number(prevRes) * Number(input))
                    break
                case ':':
                    input !== '0' && setInput(Number(prevRes) / Number(input))
                    break
                default:
                    setInput(input)
            }
            setPrevOper(operation)
        }
        setInputing(false)
    }

    function resetInput(txt) {
        setPrevRes(input)
        setInput(txt)
        setInputing(true)
    }
}

export default App
