// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="detail-container">
      <div className="money-details-item green-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-img"
        />
        <div>
          <p className="balance-para">Your Balance</p>
          <p className="balance-counter" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="money-details-item blue-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-img"
        />
        <div>
          <p className="balance-para">Your Income</p>
          <p className="balance-counter" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="money-details-item violet-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="money-details-img"
        />
        <div>
          <p className="balance-para">Your Expenses</p>
          <p className="balance-counter" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
