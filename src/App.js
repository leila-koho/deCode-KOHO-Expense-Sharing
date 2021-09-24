import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch as RouteSwitch, Route, NavLink } from "react-router-dom";
import ExpensesDashboard from './Pages/ExpensesDashboard';
import CreateExpensePage from './Pages/CreateExpensePage';
import ExpenseBreakDownPage from './Pages/ExpenseBreakdownPage';
import SingleExpensePage from './Pages/SingleExpensePage';

function App() {
  return (
    <Router>
      <RouteSwitch>
        <Route exact path="/">
          <NavLink to="/expense-dashboard">Expense Dashboard</NavLink> 
          | <NavLink to="create-expense">Create Expense</NavLink>
          | <NavLink to="expense-breakdown">Expense Breakdown</NavLink>
          | <NavLink to="expense">Single Expense Page</NavLink>
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
        <Route path="/expense">
          <SingleExpensePage />
        </Route>
      </RouteSwitch>
    </Router>
  );
}

export default App;
