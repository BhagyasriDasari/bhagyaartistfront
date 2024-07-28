import React, { Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class AddTransaction extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      description: '',
      credit: '',
      debit: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      date: this.state.date,
      description: this.state.description,
      credit: this.state.credit ? parseFloat(this.state.credit) : null,
      debit: this.state.debit ? parseFloat(this.state.debit) : null
    };

    axios.post('http://localhost:5000/transactions', newTransaction)
      .then(response => {
        console.log(response.data);
        this.props.navigate('/');
      })
      .catch(error => {
        console.error('There was an error creating the transaction!', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Add Transaction</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Credit:
            <input
              type="number"
              name="credit"
              value={this.state.credit}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Debit:
            <input
              type="number"
              name="debit"
              value={this.state.debit}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

// Higher-order component to use hooks in class component
const AddTransactionWithNavigate = (props) => {
  const navigate = useNavigate();
  return <AddTransaction {...props} navigate={navigate} />;
};

export default AddTransactionWithNavigate;
