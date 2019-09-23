import React from 'react';
import {GlobalVariables} from './GlobalVariables';
import {fontsizes} from './fontsize'
import styled from 'styled-components';

const Holder=styled.div`
display:flex;
flex-direction:column;
margin-top:100px;
 `;

const TextXL=styled.div`
font-size:${fontsizes.xlargetext}px;
color:${GlobalVariables.fontcolor };
margin:10px;
 `;

 const TextL=styled.div`
font-size:${fontsizes.largetext}px;
color:${GlobalVariables.fontcolor };
margin:10px;
 `;

 const TextM=styled.div`
 font-size:${fontsizes.mediumtext}px;
 color:${GlobalVariables.fontcolor };
 margin:10px;
  `;
 
  const TextS=styled.div`
 font-size:${fontsizes.smalltext}px;
 color:${GlobalVariables.fontcolor };
 margin:10px;
  `;

  function MainContaint(){
      return(
          <Holder>
              <TextXL>default Size {fontsizes.xlargetext}</TextXL>
              <TextL>default Size {fontsizes.largetext}</TextL>
              <TextM>default Size {fontsizes.mediumtext}</TextM>
              <TextS>default Size {fontsizes.smalltext}</TextS>
          </Holder>
      )
  }

  export default MainContaint;