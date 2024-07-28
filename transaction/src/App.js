import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTransactionWithNavigate from './components/AddTransaction';
import TransactionList from './components/TransactionList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<TransactionList />} />
            <Route path="/add" element={<AddTransactionWithNavigate />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
