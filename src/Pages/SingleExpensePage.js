import React from 'react'
import TextField from '@mui/material/TextField';
import { PageLayout } from '../page-layout/PageLayout'
import Button from '../components/Button.js'
import WidthDrawSVG from '../assets/logo-transparent.svg'
import translation from '../assets/translation.png'
import Menu from '@mui/icons-material/Menu'
//import { contacts } from '../data/contacts'
//import { groups } from '../data/groups'
import styled from 'styled-components';
import OwedAmountCard from '../components/OwedAmountCard';
import { flexbox } from '@mui/system';

const SingleExpense = styled.div`
    margin: 20px;
`
const Dividor = styled.div`
    border-top: 1px solid #c4c4c4;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000000;
  padding: 20px;
  padding-top: 30px;
  alignItems: center;
  justifyContent: center;
`

const TranslationIcon = styled.img`
  margin-right: 10px
`

const SingleExpensePage = () => {
    const largeHeaderStyle = {
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "28px",
        "lineHeight": "36px",
        "margin-bottom": "0px",
    };
    const smallHeaderStyle = {
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "24px",
        "lineHeight": "22px",
        "margin-top": "15px",
        "margin-right": "0px",
        "margin-bottom": "5px",
        "margin-left": "0px",
        "width":"100%",
        "display":"block",
    };
    const dueDateStyle = {
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "24px",
        "lineHeight": "22px",
        "margin-top": "20px",
        "margin-right": "0px",
        "margin-bottom": "5px",
        "margin-left": "0px",
        "width":"100%",
        "display":"block",
        "text-align":"center",
        "color":"#F24759",
    };
    const unpaidAmountStyle = {
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "40px",
        "lineHeight": "45px",
        "color": "#F24759",
        "width":"auto",
        "margin":"0px",
        "float":"left",
    };
    const totalAmountStyle = {
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "40px",
        "lineHeight": "45px",
        "color": "#9B9EA6",
        "width":"auto",
        "margin-left":"17px",
        "margin-bottom":"0px",
        "margin-top":"0px",
        "float":"left",
    };
    return(
        <div>
            <Header>
                <div>
                    <img
                    src={WidthDrawSVG}
                    alt=""
                    />
                </div>
                <div>
                    <TranslationIcon src={translation} alt="" />
                    <Menu style={{ color: "#000000" }} />
                </div>
            </Header>

            <Dividor/>

            <SingleExpense>
                <h2 style={largeHeaderStyle}> Anniversary </h2>
                <h2 style={smallHeaderStyle}> Total Balance </h2>
                <div style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        display: "flex",
                }}>
                    <div style={{
                        width: '85%',
                        float: 'left',
                    }}>
                        <h2 style={unpaidAmountStyle}> $1234 </h2>
                        <h2 style={totalAmountStyle}> /$2000 </h2>
                    </div>
                    <div style={{
                        width: '15%',
                        float: 'right',
                    }}>
                        <img src='../bill.png'/>
                    </div>
                </div>
                <h2 style={smallHeaderStyle}> Breakdown </h2>
                <div style={{
                        display: "flex",
                }}>
                    <OwedAmountCard name="Adam" amount="$123" paid={false} />
                    <OwedAmountCard name="Lin" amount="$0" paid={true} />
                </div>
                <div style={{
                        display: "flex",
                }}>
                    <OwedAmountCard name="Gloria" amount="$123" paid={true} />
                    <OwedAmountCard name="Shadline" amount="$45" paid={false} />
                </div>
                <h2 style={smallHeaderStyle}> Due By: </h2>
                <h2 style={dueDateStyle}> October 1st, 2021 </h2>
            </SingleExpense>
        </div>
    )
}

export default SingleExpensePage; 