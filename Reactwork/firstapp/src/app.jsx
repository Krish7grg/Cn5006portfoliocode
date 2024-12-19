import React, { useState} from 'react';
import './App.css';

function Apps() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [Headingtext, setHeading] = useState('');

    //separate userinput for number 1 and 2
    function Number1(event){
        setNum1(event.target.value);
    }

    function Number2(event){
        setNum2(event.target.value);
    }

    //function for addition
    function AddClick(event){
        const sum = parseFloat(num1) + parseFloat(num2);
        setHeading(`Sum: ${sum}`);
        event.preventDefault();
    }

    return(
        <div>
            <form id='app1'>
                <label htmlFor="num1">Number1</label>
                <input type="number" onChange={Number1} id="num1" value={num1} />

                <label htmlFor="num2">Number2</label>
                <input type="number" onChange={Number2} id="num2" value={num2}/>

                <button onClick={AddClick} type="submit">Add</button>

                 <h1>Result: {Headingtext}</h1>

            </form>
        </div>
    );
}
export default Apps;
