import './transactionHistory.css'

const TransactionHistory = ({ data, onDeletingData }) => {

    const handleDelete = (index) => {
        let transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"))
        transactionHistory.splice(index, 1)
        localStorage.setItem("transactionHistory", JSON.stringify(transactionHistory))
        onDeletingData(transactionHistory)
    }

    return (
        <div className='transactionHistory'>
            <div>Transaction History</div>
            <div>{
                data.map((data, index) => {
                    let className = '';
                    if (data.amount[0] === '+') {
                        className = 'bg1'
                    } else if (data.amount[0] === '-') {
                        className = 'bg2'
                    }
                    return (
                        <div key={index} className={className}>
                            <button onClick={() => handleDelete(index)}>X</button>
                            <div>{data.title}</div>
                            <div>Rs: {data.amount}/-</div>
                        </div>
                    )
                })
            }</div>
        </div>
    )
}

export default TransactionHistory
