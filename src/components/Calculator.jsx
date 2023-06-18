import React, { useState } from 'react'

function Calculator() {
    const [result, setResult] = useState("");
    const click = (e) => {
        setResult (result.concat (e.target.name));
    }
    const clear = ()=>{
        setResult ("");
    }
    const ans = () =>{
        try{
            setResult (eval(result).toString());
        }
        catch (e){
            setResult("Error");
        }
    }
    const deleteLast = ()=>{
        setResult(result.slice(0,result.length-1));
    }
    return (
        <>
            <div className="cont">
                <div className='container'>
                    <input type="text" value={result} />
                    <div className='buttons' >
                        <div className='btn btn-up'>
                            <button onClick={clear}>AC</button>
                            <button onClick={deleteLast}>C</button>
                            <button onClick={ans} className='equalTo'>=</button>
                        </div>
                        <div className='btn'>
                            <button name="7" onClick={click}>7</button>
                            <button name="8" onClick={click}>8</button>
                            <button name="9" onClick={click}>9</button>
                            <button name="*" onClick={click} className='btn-right'>X</button>
                        </div>
                        <div className='btn'>
                            <button name="4" onClick={click}>4</button>
                            <button name="5" onClick={click}>5</button>
                            <button name="6" onClick={click}>6</button>
                            <button name="-" onClick={click} className='btn-right'>-</button>
                        </div>
                        <div className='btn'>
                            <button name="1" onClick={click}>1</button>
                            <button name="2" onClick={click}>2</button>
                            <button name="3" onClick={click}>3</button>
                            <button name="+" onClick={click} className='btn-right'>+</button>
                        </div>
                        <div className='btn btn-last'> 
                            <button name="." onClick={click}>.</button>
                            <button name="0" onClick={click} className='zero'>0</button>
                            <button name="/" onClick={click} className='btn-right'>/</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
