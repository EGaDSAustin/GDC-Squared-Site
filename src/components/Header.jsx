import styled from 'styled-components';

const Header = styled.h1`
font-family: futura-lt-w01-book, sans-serif;
padding: 2% 0% 2%;
text-align: center;
color: ${props => props.primary ? "#8e2e6a" : "#ffffff"};
font-size: ${props => props.big ? "16em" : "2.6em"};
text-shadow: ${props => props.shadow ? "2px 2px 4px #000000, -2px -2px 4px #000000" : ""};
line-height: 0.75em
`;

export default Header;