import React from 'react'
import TextField from '@mui/material/TextField';
import { PageLayout } from '../page-layout/PageLayout'
import Button from '../components/Button.js'
import WidthDrawSVG from '../assets/logo-transparent.svg'
import translation from '../assets/translation.png'
import Menu from '@mui/icons-material/Menu'
import { contacts } from '../data/contacts'
import { groups } from '../data/groups'

import styled from 'styled-components';

const CreateExpense = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');

    margin: 20px;
    color: #373E4D;
    fontFamily: 'Inter', sans-serif;
`

const Dividor = styled.div`
    margin-top: 30px;
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

const CreateExpensePage = () => {

    const largeHeaderStyle = {
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "28px",
        "lineHeight": "36px",
    };
    const smallHeaderStyle = {
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "24px",
        "lineHeight": "22px",
    };
    const largeBodyStyle = {
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": "16px",
        "lineHeight": "22px",
    };
    const smallBodyStyle = {
        "fontStyle": "normal",
        "fontWeight": "300",
        "fontSize": "12px",
        "lineHeight": "22px",
    };
    const imageStyle = {
        "width": "40px",
        "height": "40px",
        "objectFit": "cover",
        "borderRadius": "100px"
    }
    const contactStyle = {
        "display": "flex",
        "marginTop": "10px",

        "&:hover": {
            "backgroundColor": "red"
        }
    }
    const contactInfo = {
        "display": "flex",
        "flexDirection": "column",
        "marginLeft": "15px",
        "justifyContent": "center"
    }
    const circleStyle = {
        "height": "40px",
        "width": "40px",
        "backgroundColor": "#2D5BA8",
        "borderRadius": "50%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "color": "white"
    }
    const toggleStyle = {
        "display": "flex",
        "marginTop": "10px"
    }
    const toggleInfo = {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center"
    }
    const toggleCircle = {
        "height": "40px",
        "width": "40px",
        "backgroundColor": "#2D5BA8",
        "borderRadius": "50%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "color": "white",
        "marginLeft": "auto"
    }
    
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

            <Dividor style={{"marginTop": "0px"}} />

            <CreateExpense>

                <h2 style={largeHeaderStyle}>Create an Expense</h2>
                <TextField fullWidth id="outlined-basic" label="Expense name" variant="outlined" />

                <Dividor />

                <h2 style={largeHeaderStyle}>Add People</h2>
                <TextField fullWidth id="outlined-basic" label="Start typing to search" variant="outlined" />

                <h3 style={smallHeaderStyle}>Contacts</h3>
                <div>
                    {contacts.map((contact, i) => {
                        return(
                            <div style={contactStyle}>
                                <img src={contact.image} style={imageStyle}></img>
                                <div style={contactInfo}>
                                    <div style={largeBodyStyle}>{contact.name}</div>
                                    <div style={smallBodyStyle}>{contact.email}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div style={contactStyle}>
                    <span style={circleStyle}></span>
                    <div style={contactInfo}>
                        <div style={largeBodyStyle} style={{"fontWeight": "500"}}>Create a Contact</div>
                    </div>
                </div>

                <h3 style={smallHeaderStyle}>Groups</h3>
                <div>
                    {groups.map((group, i) => {
                        return(
                            <div style={contactStyle}>
                                <span style={circleStyle}>{group.name[0]}</span>
                                <div style={contactInfo}>
                                    <div style={largeBodyStyle}>{group.name}</div>
                                    <div style={smallBodyStyle}>{group.numMembers} Members</div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Dividor style={{"marginBottom": "30px"}} />

                <div style={toggleStyle}>
                    <div style={toggleInfo}>
                        <div style={largeBodyStyle, {"fontWeight": "500"}}>One-Time</div>
                        <div style={smallBodyStyle}>This group is just for a single use. No transaction history.</div>
                    </div>
                    <span style={toggleCircle}>T</span>
                </div>

                <div style={toggleStyle}>
                    <div style={toggleInfo}>
                        <div style={largeBodyStyle, {"fontWeight": "500"}}>Recurring</div>
                        <div style={smallBodyStyle}>This group is recurring. Transaction history is saved.</div>
                    </div>
                    <span style={toggleCircle}>T</span>
                </div>

                <Dividor />

                <Button style="primary" text={"Next"} onClick={() => alert('primary button clicked')}/> 
                <Button style="secondary" text={"Cancel"} onClick={() => alert('secondary button clicked')}/> 

            </CreateExpense>

        </div>
    )
}

export default CreateExpensePage; 