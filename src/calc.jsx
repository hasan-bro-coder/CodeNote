import { useEffect, useState } from "react";
import "./css/calc.scss";

function Calc() {

    const [calcs, setCalcs] = useState(JSON.parse(localStorage.getItem("calc")) || [{ input: "", sol: 0 }]);
    useEffect(()=>{
        localStorage.setItem("calc",JSON.stringify(calcs))
    }, [calcs]);

    const handleInputChange = (index, event) => {
        const newCalcs = calcs.map((calc, i) => 
            i === index ? { ...calc, input: event.target.value, sol: calculate(event.target.value) } : calc
        );
        setCalcs(newCalcs);
    };

    const calculate = (input) => {
        let result = 0;
        try {
            result = eval(input);
        } catch (e) {
            result = 0;
        }
        return result;
    };

    const addNewCalc = () => {
        setCalcs([...calcs, { input: "", sol: 0 }]);
    };

    const deleteCalc = (index) => {
        const newCalcs = calcs.filter((_, i) => i !== index);
        setCalcs(newCalcs);
    };

    return (
        <div id="calc-con">
            <button onClick={addNewCalc}>New</button>
            <div className="calcs">
                {calcs.map((calc, index) => (
                    <div className="calc" key={index}>
                        <textarea
                            value={calc.input}
                            onChange={(e) => handleInputChange(index, e)}
                        ></textarea>
                        =<div className="sol">{calc.sol}</div>
                        <button onClick={() => deleteCalc(index)} className="delte">D</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calc;
