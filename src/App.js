import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import ExpensesDashboard from './Pages/ExpensesDashboard';
import CreateExpensePage from './Pages/CreateExpensePage';
import ExpenseBreakDownPage from './Pages/ExpenseBreakdownPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavLink to="/expense-dashboard">Expense Dashboard</NavLink> 
          | <NavLink to="create-expense">Create Expense</NavLink>
          | <NavLink to="expense-breakdown">Expense Breakdown</NavLink>
        </Route>
        <Route path="/expense-dashboard">
          <ExpensesDashboard />
        </Route>
        <Route path="/create-expense">
          <CreateExpensePage />
        </Route>
        <Route path="/expense-breakdown">
          <ExpenseBreakDownPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
