import React from 'react'
import Btn from './btn'


const Buttons = ({ btnClick }) => {
    const btns = [
        [ {type: 'operators', text: '+'}, {type: 'operators', text: '–'}, {type: 'operators', text: '×'}, {type: 'operators', text: '÷'} ],
        [ {type: 'numbers', text: '7'}, {type: 'numbers', text: '8'}, {type: 'numbers', text: '9'}, {type: 'func', text: 'C'} ],
        [ {type: 'numbers', text: '4'}, {type: 'numbers', text: '5'}, {type: 'numbers', text: '6'}, {type: 'func', text: '◄'} ],
        [ {type: 'numbers', text: '1'}, {type: 'numbers', text: '2'}, {type: 'numbers', text: '3'}, {type: 'equal', text: '='} ],
        [ {type: 'numbers', text: '0'}, {type: 'numbers', text: '.'}, {type: 'numbers', text: '00'} ]
    ]

    return (
        <table className='buttons' cellPadding='0' cellSpacing='20px'>
            <tbody>
                {btns.map((btn, index) => {
                    return (
                        <tr key={index}>
                            {btn.map((obj, indx) => <Btn key={indx} btnType={obj.type} btnTxt={obj.text} btnClick={btnClick} />)}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Buttons
