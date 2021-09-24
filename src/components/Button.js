import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 16px;
    margin: 1rem;
    text-align: center;
    border: 0px;
    border-radius: 5px;
    font-family: "Basis Grotesque Pro", system-ui, sans-serif;
    font-weight: 600;
    font-size: 16px;
    width: 100%;  
    transition: 0.33s;
    ${props => props.Style === "primary" &&  ` 
      color: white;  
      background-color: #00579B; 
      &:hover {
        background-color: #003A67;
      }
    `}
    ${props => props.Style === "secondary" &&  ` 
      color: #003A67;  
      border: 1px solid #00579B;
      background-color: #fff; 
      &:hover {
        color: white;  
        background-color: #00579B;
      }
    `}
    ${props => props.Style === "disabled" &&  `
      color: white;  
      background-color: #B2CCE1; 
    `}
    };
}
`
class Button extends React.Component {
  render() {
    return (
      <div>
        <StyledButton Style={this.props.style} onClick={this.props.onClick} >
            {this.props.style} button
        </StyledButton>
      </div>
    );
  }
}

export default Button;
