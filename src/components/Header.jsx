import styled from 'styled-components';

const Header = styled.h1`
padding: 2% 0% 2%;
text-align: center;
color: ${props => props.primary ? "#8e2e6a" : "#ffffff"};
`;

export default Header;