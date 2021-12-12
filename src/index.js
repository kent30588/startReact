import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const text = 'Hello World!'
const elem = (
	<div>
		<h2 className ='red'>Текс из переменной {text}</h2>
		{/*<h2>{ 2 * 2}</h2>*/}
		<input type='text' />
		<button tabIndex='0'>click</button>
	</div>
)

ReactDOM.render(
	elem,
  document.getElementById('root')
);
