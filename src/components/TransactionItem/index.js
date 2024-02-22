// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDeleteTransaction} = props
  const {id, titleInput, amountInput, optionId} = eachTransaction

  const onClickDelete = () => {
    onDeleteTransaction(id, amountInput, optionId)
  }

  return (
    <li className="list-item">
      <p>{titleInput}</p>
      <p>Rs {amountInput}</p>
      <p>{optionId}</p>
      <button type="button" data-testid="delete" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
