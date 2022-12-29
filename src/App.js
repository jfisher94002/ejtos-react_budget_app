import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                 <h1 className='mt-3'>Jonathan's Budget Allocation</h1>
                 <div className='row mt-3'>
                     <div className='col-sm'>
                         <Budget />
                     </div>
                     <div className='col-sm'>
                         <Remaining />
                     </div>
                     <div className='col-sm'>
                         <ExpenseTotal />
                     </div>
                   <div className='col-sm'>
                        <Currency />
                    </div>
                 </div>
                 <h3 className='mt-3'>Allocation</h3>
                 <div className='row '>
                     <div className='col-sm'>
                         <ExpenseList />
                     </div>
                 </div>
                 <h3 className='mt-3'>Change allocation</h3>
                 <div className='row mt-3'>
                     <div className='col-sm'>
                         <AllocationForm/>
                     </div>
                 </div>
             </div>
        </AppProvider>
    );
};
export default App;
