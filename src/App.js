import './App.css'


function App() {
    return (
        // <div className='calculator'>
        //     <div className='input'>0</div>
        //     <div className='buttons'>
        //         <div className='operators'>
        //             <div>+</div>
        //             <div>-</div>
        //             <div>*</div>
        //             <div>/</div>
        //         </div>
        //         <div className='leftPanel'>
        //             <div className='numbers'>
        //                 <div>7</div>
        //                 <div>8</div>
        //                 <div>9</div>
        //             </div>
        //             <div className='numbers'>
        //                 <div>4</div>
        //                 <div>5</div>
        //                 <div>6</div>
        //             </div>
        //             <div className='numbers'>
        //                 <div>1</div>
        //                 <div>2</div>
        //                 <div>3</div>
        //             </div>
        //             <div className='numbers'>
        //                 <div>0</div>
        //                 <div>.</div>
        //                 <div>AC</div>
        //             </div>
        //         </div>
        //         <div className='equal'>=</div>
        //     </div>
        // </div>
        <div className='calculator'>
            <table cellPadding='0' cellSpacing='20px'>
                <tr>
                    <td className='input' colSpan='4'>
                        <div>0</div>
                    </td>
                </tr>
            </table>
            <table className='buttons' cellPadding='0' cellSpacing='20px'>
                <tr>
                    <td className='operators'>
                        <div>+</div>
                    </td>
                    <td className='operators'>
                        <div>&ndash;</div>
                    </td>
                    <td className='operators'>
                        <div>&times;</div>
                    </td>
                    <td className='operators'>
                        <div>&divide;</div>
                    </td>
                </tr>
                <tr>
                    <td className='numbers'>
                        <div>7</div>
                    </td>
                    <td className='numbers'>
                        <div>8</div>
                    </td>
                    <td className='numbers'>
                        <div>9</div>
                    </td>
                    <td className='func'>
                        <div>C</div>
                    </td>
                </tr>
                <tr>
                    <td className='numbers'>
                        <div>4</div>
                    </td>
                    <td className='numbers'>
                        <div>5</div>
                    </td>
                    <td className='numbers'>
                        <div>6</div>
                    </td>
                    <td className='func'>
                        <div>&#9668;</div>
                    </td>
                </tr>
                <tr>
                    <td className='numbers'>
                        <div>1</div>
                    </td>
                    <td className='numbers'>
                        <div>2</div>
                    </td>
                    <td className='numbers'>
                        <div>3</div>
                    </td>
                    <td rowSpan='2' className='equal'>
                        <div>=</div>
                    </td>
                </tr>
                <tr>
                    <td className='numbers'>
                        <div>0</div>
                    </td>
                    <td className='numbers'>
                        <div>.</div>
                    </td>
                    <td className='numbers'>
                        <div>00</div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default App
