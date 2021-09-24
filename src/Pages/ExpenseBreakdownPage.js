import React from 'react'
import { PageLayout } from '../page-layout/PageLayout'
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


const CreateExpense = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');

    margin: 20px;
    color: #373E4D;
    fontFamily: 'Inter', sans-serif;
`
const largeHeaderStyle = {
    "fontStyle": "normal",
    "fontWeight": "500",
    "fontSize": "28px",
    "lineHeight": "36px",
};

const Dividor = styled.div`
    margin-top: 30px;
    border-top: 1px solid #c4c4c4;
`

const ExpenseBreakDownPage = () => {
    const [value, setValue] = React.useState(new Date());

    return(
        <PageLayout title="Create an Expense">
             <CreateExpense>
                <h2 style={largeHeaderStyle}>Total</h2>
                <TextField fullWidth id="outlined-basic" label="Expense name" variant="outlined" style={{marginBottom: "15px"}} />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Due Date"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        fullWidth
                    />

                </LocalizationProvider>
                <Dividor />

                <h2 style={largeHeaderStyle}>Breakdown</h2>
                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" style={{marginBottom: "15px"}}/>
                <TextField fullWidth id="outlined-basic" label="Amount" variant="outlined" />
            </CreateExpense>
        </PageLayout> 
    )
}           

export default ExpenseBreakDownPage; 