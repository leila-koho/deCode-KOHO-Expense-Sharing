import React from "react";
import styled from 'styled-components';
import { useStyletron } from "styletron-react";

const StyledCard = styled.button`
    border: 1px solid #d9d9d9;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    background-color: white;
    margin: 10px auto;
    width: 350px;
    height: 150px;
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
    font-family: Barlow, system-ui, sans-serif;
    font-size: 25px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: -1.5px;
    margin: 0px;
    padding: 0px;
    text-align: left;
`

const Description = styled.div`
    font-family: "Basis Grotesque Pro", system-ui, sans-serif;
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #373e4d;
    text-align: left;
`


export const Card = ({
  amount,
  title,
  description1,
  description2,
  icon,
}) => {
  const [css] = useStyletron();

  return (
      <div>
        <StyledCard>
            <Flex>
                <div>
                    <img src={icon} alt="" />
                </div>
                <Details>
                    <Name>{title}</Name>
                    <Amount>{amount}</Amount>
                    <Description>{description1}</Description>
                    <Description>{description2}</Description>
                </Details>
            </Flex>
        </StyledCard>
      </div>
    );
  };

export default Card;
