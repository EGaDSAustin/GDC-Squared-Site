import styled from 'styled-components';

const Header = styled.h1`
padding: 2% 0% 2%;
text-align: center;
color: ${props => props.primary ? "#09d3ac" : "#ffffff"};
`;

export default Header;