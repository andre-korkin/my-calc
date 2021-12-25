import { useState } from 'react'
import Tablo from './components/tablo'
import Buttons from './components/buttons'


function App() {
    const [input, setInput] = useState('0')

    return (
        <div className='calculator'>
            <Tablo inp={input} />
            <Buttons btnClick={handleClick} />
        </div>
    )


    function handleClick(txt) {
        setInput(txt)
    }
}

export default App
