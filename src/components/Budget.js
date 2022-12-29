import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget,dispatch,expenses, currency } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
    	return (total += item.cost);
    }, 0);

	const changeBudget = (val) => {

		if (val < totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
		}
		console.log(val);
	}

	return (
		<div className='alert alert-secondary'>
	    <span>Budget: {currency}
			<input type="number"
			        step="10"
			        value={budget}
			        min="0"
			        max="20000"
			        id='budget'
			        onChange={(event) => changeBudget(event.target.value)}>
			</input>
		</span>
		</div>
	);
};
export default Budget;

