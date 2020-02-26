import styled from 'styled-components';

const sButton = styled.button`
    background-color: #60666C;
    color: #ffffff;
    border-radius: 4px;
    margin-bottom: 8px;
    margin-top: 8px;
    padding: 9% 2% 11% 2%;
    border: 0px;
    text-align: center;
    width: 300px;
    height: 75px;

    :hover {
        background-color: #4e5358
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    :active {
        border: 1px solid white
    }
`;

export default sButton;