import './incomeExpense.css'

const IncomeExpense = ({ income, expense }) => {
    return (
        <>
            <div className='incomeExpenseContainer'>
                <div>
                    <p>INCOME</p>
                    <p>{income}</p>
                </div>
                <div>
                    <p>EXPENSE</p>
                    <p>{expense}</p>
                </div>
            </div>
        </>
    )
}

export default IncomeExpense
