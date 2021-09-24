import React from "react";
import Typography from "@mui/material/Typography";
import { useStyletron } from "styletron-react";
import styled from 'styled-components';
import WidthDrawSVG from '../assets/logo-transparent.svg';
import translation from '../assets/translation.png'
import Menu from '@mui/icons-material/Menu';

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

export const PageLayout = ({
  children,
  title,
  subtitle,
}) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw"
      })}
    >
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
        <div className={css({ flex: 1, textAlign: "center" })}>
            <Typography 
            margin={`2rem 0 0 2rem`}
            variant="h4"
            >
            {title || "No Title Provided"}
            </Typography >
            <Typography 
              margin={`0 0 0 2rem`}
              variant="subtitle1"
              >
              {subtitle || ""}
            </Typography >
        </div>

      <div className={css({ flex: 1, overflow: "scroll", padding: "16px" })}>
        {children}
      </div>
    </div>
  );
};
