import React from "react";
import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import addGroup from '../assets/addGroup.png'
import addExpense from '../assets/addExpense.png'

const Wrapper = styled.div`
  display: flex;
  margin: 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
`

const AddGroup = styled.img`
  padding: 16px;
`

const AddExpense = styled.img`
  padding: 16px;
`

const Menu = styled.div`
`

class PlusMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const toggleMenu = () => {
      this.setState(prevState => ({
        open: !prevState.open
      }));
    }

    return (
      <Wrapper>
        {this.state.open &&
            <div>
              <AddGroup onClick={() => alert('add group clicked')}  src={addGroup} alt="" />
              <AddExpense onClick={() => alert('add expense clicked')}  src={addExpense} alt="" />
            </div>
        }
        <Menu>
          <AddCircleIcon onClick={() => {toggleMenu(this.state)}} style={{ color: "#00579B", fontSize: "5rem"}} />
        </Menu>
      </Wrapper>
    ) 
  }
}

export default PlusMenu;
