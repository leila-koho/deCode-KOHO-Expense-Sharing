import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch as RouteSwitch, Route, NavLink } from "react-router-dom";
import ExpensesDashboard from './Pages/ExpensesDashboard';
import CreateExpensePage from './Pages/CreateExpensePage';
import ExpenseBreakDownPage from './Pages/ExpenseBreakdownPage';
import SingleExpensePage from './Pages/SingleExpensePage';
import styled from 'styled-components';
import Button from './components/Button.js';
import Card from './components/Card.js';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Menu from '@mui/icons-material/Menu';
import PlusMenu from './components/Menu';

const Wrapper = styled.div`
  font-family: monospace;
  color: blue;
  margin: 2.5rem;
`
const  Dividor = styled.div`
  widht: 1000000000000px;
  border-top: 1px solid #c4c4c4
`

const TranslationIcon = styled.img`
  padding-right: 0.5rem;
`

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
      {/* <header className="App-header"> */}
      {/* the below code is just showcasing the componetns on the main page, we can remove this anytime */}
        {/* <Wrapper>
          <Card /> 

          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />

          <Button style="primary" onClick={() => alert('primary button clicked')}/> 
          <Button style="secondary" onClick={() => alert('secondary button clicked')}/> 
          <Button style="disabled" /> 

          <Switch defaultChecked />
          <Switch />
          <Switch disabled defaultChecked />
          <Switch disabled />


          <PlusMenu/> 
      </Wrapper> */}
      {/* </header> */}
    </Router>
  );
}

export default App;