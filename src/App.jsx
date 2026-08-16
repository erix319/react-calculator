import { useState } from 'react';
import './index.css';

function Calculator() {
	const [input, setInput] = useState('0');
	const displayValue = String(input)
		.replace(/\*\*/g, '^')
		.replace(/\*/g, '×')
		.replace(/\//g, '÷')
		.replace(/(^|[+\-*/])(\.)/g, '$10.'); // .5 → 0.5, 2+.5 → 2+0.5

	function addOne() {
		const currentInput = eval(input);
		setInput(String(currentInput + 1));
	}

	function subtractOne() {
		const currentInput = eval(input);
		setInput(String(currentInput - 1));
	}

	function handleCLick(value) {
		if (value === 'C') {
			setInput('0');
		} else if (value === '=') {
			const result = eval(String(input));
			setInput(String(result));
		} else if (value === '100') {
			const currentValue = eval(String(input));
			setInput(String(currentValue + 100));
		} else if (value === '1000') {
			const currentValue = eval(String(input));
			setInput(String(currentValue + 1000));
		} else {
			setInput((prev) => (prev === '0' ? value : prev + value));
		}
	}
	return (
		<div className='calculator-container'>
			<h1 className='calculator-title'>UseState Calculator</h1>
			<div className='calculator'>
				<div className='display'>{displayValue}</div>
				<div className='increment-buttons'>
					<button
						onClick={addOne}
						className='increment'
					>
						+1
					</button>
					<button
						onClick={subtractOne}
						className='decrement'
					>
						-1
					</button>
				</div>

				{/* prettier-ignore */}
				<div className='buttons'>
					<button onClick={() => handleCLick("1")}>1</button>
					<button onClick={() => handleCLick("2")}>2</button>
					<button onClick={() => handleCLick("3")}>3</button>
					<button onClick={() => handleCLick("+")} className='operator'>+</button>
					<button onClick={() => handleCLick("4")}>4</button>
					<button onClick={() => handleCLick("5")}>5</button>
					<button onClick={() => handleCLick("6")}>6</button>
					<button onClick={() => handleCLick("-")} className='operator'>-</button>
					<button onClick={() => handleCLick("7")}>7</button>
					<button onClick={() => handleCLick("8")}>8</button>
					<button onClick={() => handleCLick("9")}>9</button>
					<button onClick={() => handleCLick("*")} className='operator'>×</button>
					<button onClick={() => handleCLick("0")}>0</button>
					<button onClick={() => handleCLick("100")}>100</button>
                    <button onClick={() => handleCLick("1000")}>1000</button>
					<button onClick={() => handleCLick("/")} className='operator'>÷</button>
					<button onClick={() => handleCLick(".")}>,</button>
					<button onClick={() => handleCLick("=")} className='equals'>=</button>
					<button onClick={() => handleCLick("C")} className='clear'>C</button>
					<button onClick={() => handleCLick("**")} className='operator'>x^ʸ</button>
				</div>
			</div>

			<div className='technologies-used'>
				<p>
					<strong>Technologies used:</strong> React, JSX, CSS Modules, JavaScript (useState, events handling)
				</p>
			</div>
		</div>
	);
}

export default Calculator;
