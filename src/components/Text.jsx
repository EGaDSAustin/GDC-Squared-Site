import styled from 'styled-components'

const Text = styled.div`
    font-family: futura-lt-w01-book, sans-serif;
    color: ${props => props.primary ? "#ffffff" : ""};
    text-align: ${props => props.center ? "center" : ""};
    padding: ${props => props.verticalPadding ? "12px 0px" : ""};
`;

export default Text; 