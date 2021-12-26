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
                setPrevRes('0')
                setPrevOper(undefined)
                break
            case '◄':
                input.length > 1 ? setInput(input.slice(0, input.length - 1)) : setInput('0')
                break
            case '=':
                getResult('=')
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
                    res = input !== '0' && String(Number(prevRes) / Number(input))
                    break
                default:
                    setInput(input)
            }
            
            if(res.length > 8) {
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

    function resetInput(txt) {
        setPrevRes(input)
        setInput(txt)
        setInputing(true)
    }
}

export default App
