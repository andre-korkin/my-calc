import React from 'react'


const Tablo = ({ inp }) => {
    return (
        <table cellPadding='0' cellSpacing='20px'>
            <tbody>
                <tr>
                    <td className='input' colSpan='4'>
                        <div>{inp}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tablo
