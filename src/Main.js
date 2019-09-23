import React from 'react';
import styled from 'styled-components';

const MainContainer=styled.div`
display:inline;
width:100%;
align-items: center;
 
 `;

function Main(props) {
    return(
    <MainContainer>
    {props.children}
    </MainContainer>
  )
}

export default Main;
