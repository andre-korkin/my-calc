import React from 'react'


const Btn = ({ btnType, btnTxt, btnClick }) => {
    let txt = ''
    switch(btnTxt) {
        case '–':
            txt = '-'
            break
        case '×':
            txt = '*'
            break
        case '÷':
            txt = ':'
            break
        default:
            txt = btnTxt
    }

    return (
        <td className={btnType} rowSpan={btnType === 'equal' ? '2' : '1'} onClick={() => btnClick(txt)}>
            <div>{btnTxt}</div>
        </td>
    )
}

export default Btn
