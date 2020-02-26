import styled from 'styled-components';

const Header = styled.h1`
padding: 2% 0% 2%;
text-align: center;
color: ${props => props.primary ? "#110a0a" : "#ffffff"};
font-size: ${props => props.big ? "16vw" : "3vw"};
text-shadow: ${props => props.shadow ? "2px 2px 4px #000000, -2px -2px 4px #000000" : ""};
line-height: ${props => props.lineHeight ? "1.25em" : "0.75em"};
`;

export default Header;