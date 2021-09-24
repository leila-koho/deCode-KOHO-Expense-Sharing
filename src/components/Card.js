import React from "react";
import styled from 'styled-components';
import cash from '../assets/cash.png'

const StyledCard = styled.button`
    margin: 1rem 0;
    border: 1px solid #d9d9d9;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    background-color: white;
}
`

const Flex = styled.div`
  display: flex;
  margin: 2rem;
  color: #000000;
`

const Details = styled.div`
    margin: 0 1rem
`
const Name = styled.div`
    font-family: "Basis Grotesque Pro", system-ui, sans-serif;
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: ##373e4d;
    margin-top: 0px;
    margin-bottom: 0px;
`

const Amount = styled.div`
    font-family: Barlow, system-ui, sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: -1.5px;
    margin: 0px;
    padding: 0px;
`


const Description = styled.div`
    font-family: "Basis Grotesque Pro", system-ui, sans-serif;
    font-size: 12px;
    font-weight: 900;
    line-height: 36px;
    letter-spacing: -0.2px;
    color: #373e4d;
    margin-bottom: 16px;
    margin: 1rem
`


class Card extends React.Component {
  render() {
    return (
      <div>
        <StyledCard Style={this.props.style} onClick={this.props.onClick} >
            <Flex>
                <div>
                    <img src={cash} alt="" />
                </div>
                <Details>
                    <Name>Aniversary</Name>
                    <Amount>-$125</Amount>
                    <Description>Description here</Description>
                </Details>
            </Flex>
        </StyledCard>
      </div>
    );
  }
}

export default Card;
