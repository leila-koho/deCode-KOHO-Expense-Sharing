import React from "react";
import styled from 'styled-components';
import { useStyletron } from "styletron-react";

const StyledOwedAmountCard = styled.div`
    border: 1px solid #d9d9d9;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    background-color: white;
    margin: 10px auto;
    width: 150px;
    height: 150px;
    float: left;
    margin-left: 10px;
}
`

const Flex = styled.div`
  display: flex;
  margin: 1rem;
  color: #000000;
`

const Details = styled.div`
    margin: 0 1rem
`
const Name = styled.div`
    font-family: "Basis Grotesque Pro", system-ui, sans-serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: ##373e4d;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: left;
`

const Amount = styled.div`
    font-family: "Basis Grotesque Pro", system-ui, sans-serif;
    font-size: 40px;
    font-weight: 500;
    line-height: 45px;
    letter-spacing: -1.5px;
    margin: 0px;
    padding: 0px;
    text-align: left;
    ${props => props.status && `
        color: #53AC8F;
    `}
    ${props => props.status === false && `
        color: #F24759;
    `}
`
const Description = styled.div`
    font-family: "Basis Grotesque Pro", system-ui, sans-serif;
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #373e4d;
    text-align: left;
`

class OwedAmountCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    
    render() {

        return (
            <div>
              <StyledOwedAmountCard>
                  <Flex>
                      <Details>
                          <Name>{this.props.name}</Name>
                          <Amount status={this.props.paid}>{this.props.amount}</Amount>
                          <Description>OWING</Description>
                      </Details>
                  </Flex>
              </StyledOwedAmountCard>
            </div>
          )
    }
}

export default OwedAmountCard;
