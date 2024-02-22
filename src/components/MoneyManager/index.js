import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    listOfTransactions: [],
    balance: 0,
    income: 0,
    expenses: 0,
    titleInput: '',
    amountInput: '',
    optionId: 'INCOME',
  }

  getTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  getAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  getType = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const newTransaction = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionId,
    }

    if (optionId === 'INCOME') {
      this.setState(prevState => ({
        listOfTransactions: [...prevState.listOfTransactions, newTransaction],
        balance: prevState.balance + parseInt(amountInput),
        income: prevState.income + parseInt(amountInput),
        titleInput: '',
        amountInput: '',
        optionId: 'INCOME',
      }))
    } else {
      this.setState(prevState => ({
        listOfTransactions: [...prevState.listOfTransactions, newTransaction],
        balance: prevState.balance - parseInt(amountInput),
        expenses: prevState.expenses + parseInt(amountInput),
        titleInput: '',
        amountInput: '',
        optionId: 'INCOME',
      }))
    }
  }

  onDeleteTransaction = (id, amount, type) => {
    const {listOfTransactions} = this.state

    const filteredTransactionList = listOfTransactions.filter(
      each => each.id !== id,
    )
    if (type === 'INCOME') {
      this.setState(prevState => ({
        listOfTransactions: filteredTransactionList,
        income: prevState.income - parseInt(amount),
        balance: prevState.balance - parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        listOfTransactions: filteredTransactionList,
        expenses: prevState.expenses - parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    }
  }

  render() {
    const {
      listOfTransactions,
      balance,
      income,
      expenses,
      titleInput,
      amountInput,
      optionId,
    } = this.state

    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="welcome-note">
            Welcome back to your{' '}
            <span className="welcome-span">Money Manager</span>
          </p>
        </div>

        <div className="money-details-container">
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>

        <div className="trasaction-history-container">
          <form className="form-container" onSubmit={this.onAddTransaction}>
            <h1 className="history-heading">Add Transaction</h1>
            <label htmlFor="textInput">TITLE</label>
            <input
              id="textInput"
              type="text"
              placeholder="TITLE"
              onChange={this.getTitle}
              value={titleInput}
            />
            <label htmlFor="intInput">AMOUNT</label>
            <input
              id="intInput"
              type="text"
              placeholder="AMOUNT"
              onChange={this.getAmount}
              value={amountInput}
            />
            <label htmlFor="transactionType">TYPE</label>
            <select
              id="transactionType"
              onChange={this.getType}
              value={optionId}
            >
              <option
                value={transactionTypeOptions[0].optionId}
                key={transactionTypeOptions[0].optionId}
                selected
              >
                {transactionTypeOptions[0].displayText}
              </option>
              <option
                value={transactionTypeOptions[1].optionId}
                key={transactionTypeOptions[1].optionId}
              >
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
          <div className="history-table-container">
            <h1 className="history-heading">History</h1>
            <ul>
              <li>
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p />
              </li>
              {listOfTransactions.map(each => (
                <TransactionItem
                  eachTransaction={each}
                  key={each.id}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
