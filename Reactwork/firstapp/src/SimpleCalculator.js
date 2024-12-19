import './App.css';
import React from 'react';

function Calculator(){
    //function for handling the calculation

function calculate(){
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const operator = document.getElementById('operator').value;
    let result=0;

    switch (operator){
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1*n2;
            break;
        case '/':
            result = n2 !== 0 ? n1/n2 : 'Cannot divide by zero'; //its asking whether the number is zero or not, if 0 then it won't allow to divide.
            break;
            default:
            result = 'invalid operation';
    }
    document.getElementById('result').innerText = `Result: ${result}`;

}
return (
    <div style={{padding: '20px', border: '8px solid #ccc', width:'300px', background: 'lightgreen'}} classname="App">
     <h2>Simple Calculator</h2>
     <input type="number" id="n1" placeholder="First Number" style={{width: '100%', marginBottom: '10px'}}/>
        <select id="operator" style={{width:'100%', marginBottom: '10px'}} >
        <option value="+">Add</option>
        <option value="-">Subtract</option>
        <option value="*">Multiply</option>
        <option value="/">Divide</option>
        </select>
        <input type="number" id="n2" placeholder="Second Number" style={{width:'100%', marginBottom:'10px'}}/>
        <button onClick={calculate} style={{width: '100%', padding: '10px', marginBottom: '10px'}}>
            Calculate
        </button>
        <p id="result" style={{fontweight: 'bold', fontSize: '16px'}}>Result:</p>
    
    </div>
);
}
export default Calculator;