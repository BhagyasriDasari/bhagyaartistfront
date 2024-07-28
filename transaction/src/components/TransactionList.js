import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TransactionList.css';

class TransactionList extends Component {
  constructor() {
    super();
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions = () => {
    axios.get('http://localhost:5000/transactions')
      .then(response => {
        console.log('Fetched transactions:', response.data); // Debug: Check the fetched data
        this.setState({ transactions: response.data });
      })
      .catch(error => {
        console.error('There was an error fetching the transactions!', error);
      });
  };

  render() {
    const { transactions } = this.state;

    return (
      <div className="transaction-list">
        <h2>Office Transactions</h2>
        {transactions.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Credit</th>
                <th>Debit</th>
                <th><Link to="/add" className="add-transaction-link">+ Add Transaction</Link></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.credit}</td>
                  <td>{transaction.debit}</td>
                  <td>{transaction.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
      </div>
    );
  }
}

export default TransactionList;
