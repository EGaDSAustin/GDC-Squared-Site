import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const SubpageHeader = styled.h1`
padding: 2% 0% 2%;
text-align: center;
color: #09d3ac;
`;

const subpageUnstyled = (props) => { 
    return (
        <Container fluid='true'> 
            <SubpageHeader>{props.header}</SubpageHeader>
        </Container>
    );
}

const Subpage = styled(subpageUnstyled)`
margin: 0% 5% 0%;
padding: 0% 0% 3%;
`;

export default Subpage;