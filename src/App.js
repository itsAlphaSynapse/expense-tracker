import { useState } from 'react';
import './App.css';
import IncomeExpense from './components/incomeExpense/IncomeExpense';
import NewTransaction from './components/newTransaction/NewTransaction';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

function App() {

  let initialData = [];
  let transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"))
  if (transactionHistory) {
    initialData = transactionHistory
  }

  let [data, setData] = useState(initialData)

  let InitialIncome = 0;
  for (let i = 0; i < initialData.length; i++) {
    if (initialData[i].amount[0] === '+') {
      InitialIncome += +initialData[i].amount
    }
  }

  let InitialExpense = 0;
  for (let i = 0; i < initialData.length; i++) {
    if (initialData[i].amount[0] === '-') {
      InitialExpense += +initialData[i].amount
    }
  }
  InitialExpense = InitialExpense * -1

  return (
    <div className='centerDiv'>
      <p>Expense Tracker by M.Abdullah</p>
      <div>
        <p>CURRENT BALANCE</p>
        <p>Rs: {InitialIncome - InitialExpense}/-</p>
      </div>
      <IncomeExpense income={InitialIncome} expense={InitialExpense} />
      <TransactionHistory data={data} onDeletingData={setData} />
      <NewTransaction onAddingData={setData} />
    </div>
  );
}

export default App;
