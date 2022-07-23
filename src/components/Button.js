// import './css/Button.css';
import styled from 'styled-components'

const StyledButton = styled.button`
padding: 5px 10px;
background: rgb(0, 87, 250);
border: 1px solid rgb(255, 255, 255);
border-radius: 5px;
color: rgb(255, 255, 255);
&:hover {
    background: rgb(58, 127, 255);
    cursor: pointer;
}
`
const ProceedButton = styled(StyledButton)`
    padding: 10px 20px;
    display: block;
    width: 100%;
    &:hover {
        color: red;
    }
`

const Button = ({ onClickHandler, value, proceed }) => {
    if (proceed) {
        return (<ProceedButton onClick={onClickHandler}>
            {value}
        </ProceedButton>)
    } else {
        return (<StyledButton onClick={onClickHandler}>
            {value}
        </StyledButton>)
    }
}

export default Button