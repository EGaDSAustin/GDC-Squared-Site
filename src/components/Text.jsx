import styled from 'styled-components'

const Text = styled.div`
    font-family: Montserrat, serif;
    color: ${props => props.primary ? "#ffffff" : ""};
    text-align: ${props => props.center ? "center" : ""};
    padding: ${props => props.verticalPadding ? "12px 0px" : ""};
    font-size: 1rem;
`;

export default Text; 