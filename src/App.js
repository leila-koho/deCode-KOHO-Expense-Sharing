import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import ExpensesDashboard from './Pages/ExpensesDashboard';
import CreateExpensePage from './Pages/CreateExpensePage';
import ExpenseBreakDownPage from './Pages/ExpenseBreakdownPage';
import SingleExpensePage from './Pages/SingleExpensePage';
import styled from 'styled-components';
import WidthDrawSVG from './assets/logo-transparent.svg';
import Button from './components/Button.js';

const Wrapper = styled.div`
  font-family: monospace;
  color: blue;
  margin: 2.5rem;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000000;
`

function App() {
  return (
    <Router>
      <Switch>
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
      </Switch>
      <header className="App-header">
        <Wrapper>
          <Header>
            <div>
              <img
              src={WidthDrawSVG}
              alt=""
            />
            </div>
            <div>FR</div>
          </Header>

          <Button style="primary" onClick={() => alert('primary button clicked')}/> 
          <Button style="secondary" onClick={() => alert('secondary button clicked')}/> 
          <Button style="disabled" /> 
        </Wrapper>
      </header>
    </Router>
  );
}

export default App;
