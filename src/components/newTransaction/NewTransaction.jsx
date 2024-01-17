import { useState } from 'react'
import './newTransaction.css'

const NewTransaction = ({ onAddingData }) => {
    const [data, setData] = useState({ title: '', amount: '' })

    const handleInput = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    const handleSubmit = () => {

        if (data.title !== '' && data.amount !== '') {
            let amount;
            if (data.amount[0] === '+') {
                amount = data.amount
            } else if (data.amount[0] === '-') {
                amount = data.amount
            } else {
                amount = '+' + data.amount
            }

            let transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"))
            if (transactionHistory) {
                transactionHistory.push({ ...data, amount: amount })
                localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory))
                onAddingData(transactionHistory)
            } else {
                localStorage.setItem("transactionHistory", JSON.stringify([{ ...data, amount: amount }]))
                onAddingData([{ ...data, amount: amount }])
            }
            setData({ title: '', amount: '' })
        } else {
            alert('Please fill the fiels...')
        }
    }

    return (
        <div className='newTransaction'>
            <div>Add New Transaction</div>
            <form>
                <label htmlFor="title">Description</label>
                <input type="text" id='title' onChange={handleInput} value={data.title} />
                <label htmlFor="amount">Transaction Amount</label>
                <input type="number" id='amount' onChange={handleInput} value={data.amount} />
                <button type='button' onClick={handleSubmit}>Add Transaction</button>
            </form>
        </div>
    )
}

export default NewTransaction
