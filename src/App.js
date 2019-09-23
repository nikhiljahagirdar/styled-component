import React, { useState, useEffect } from 'react';
import {GlobalVariables} from './GlobalVariables';
import { ThemeProvider} from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import {fontsizes} from './fontsize';
import MainContaint from './mainContaint'



const THEME_SMALL="themesmall";
const THEME_MEDIUM="thememedium";
const THEME_LARGE="themelarge";
const THEME_EXTRA_LARGE="themexlarge";

const themesmall = {
  HEADER_COLOR:GlobalVariables.headerfontcolor,
  HEADER_BACKGROUND: GlobalVariables.headerbackgroundcolor,
  MAIN_COLOR:GlobalVariables.headerbackgroundcolor,
  MAIN_BACKGROUND: GlobalVariables.headerbackgroundcolor,
  FONT_SIZE: GlobalVariables.fontsize,
  HEADER_HEIGHT: '75px',
};

const thememedium = {
  HEADER_COLOR:GlobalVariables.headerfontcolor,
  HEADER_BACKGROUND: GlobalVariables.headerbackgroundcolor,
  MAIN_COLOR:GlobalVariables.headerbackgroundcolor,
  MAIN_BACKGROUND: GlobalVariables.headerbackgroundcolor,
  FONT_SIZE: (parseFloat(GlobalVariables.fontsize) * parseFloat(GlobalVariables.m)) ,
  HEADER_HEIGHT: '150px',
};

const themelarge = {
  HEADER_COLOR:GlobalVariables.headerfontcolor,
  HEADER_BACKGROUND: GlobalVariables.headerbackgroundcolor,
  MAIN_COLOR:GlobalVariables.headerbackgroundcolor,
  MAIN_BACKGROUND: GlobalVariables.headerbackgroundcolor,
  FONT_SIZE: ( parseFloat(GlobalVariables.fontsize) * parseFloat(GlobalVariables.l)),
  HEADER_HEIGHT: '150px',
};

const themexlarge = {
  HEADER_COLOR:GlobalVariables.headerfontcolor,
  HEADER_BACKGROUND: GlobalVariables.headerbackgroundcolor,
  MAIN_COLOR:GlobalVariables.headerbackgroundcolor,
  MAIN_BACKGROUND: GlobalVariables.headerbackgroundcolor,
  FONT_SIZE: ( parseFloat(GlobalVariables.fontsize) * parseFloat(GlobalVariables.xl)),
  HEADER_HEIGHT: '150px',
};

const TextXL=styled.span`
font-size:${fontsizes.xlargetext}px;
color:${GlobalVariables.fontcolor };
margin:10px;
 `;
 
 const TextL=styled.span`
 font-size:${fontsizes.largetext}px;
 color:${GlobalVariables.fontcolor };
 margin:10px;
  `;
  
  const TextM=styled.span`
  font-size:${fontsizes.mediumtext}px;
  color:${GlobalVariables.fontcolor }; 
  margin:10px;`;
   
  const TextS=styled.span`
   font-size:${fontsizes.smalltext}px;
   color:${GlobalVariables.fontcolor};
   margin:10px; `;

function App() {

    const [theme, setTheme] = useState(themesmall);
  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const handleChangeTheme = (ctheme) => {
      switch (ctheme) {
      case THEME_SMALL: return setTheme(themesmall);
      case THEME_MEDIUM: return setTheme(thememedium);
      case THEME_LARGE: return setTheme(themelarge);
      case THEME_EXTRA_LARGE: return setTheme(themexlarge);
      default:
          return setTheme(themesmall);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      
    <React.Fragment>
       
        <Header theme={theme}></Header >
        <Main theme={theme} >
        <div  >
        <TextS id="themesmall"  onClick={()=>{handleChangeTheme(THEME_SMALL)}}>A</TextS>
        <TextM id="thememedium"  onClick={()=>{handleChangeTheme(THEME_MEDIUM)}}>A</TextM>
        <TextL id="themelarge"  onClick={()=>{handleChangeTheme(THEME_LARGE)}}>A</TextL>
        <TextXL id="themexlarge" onClick={()=>{handleChangeTheme(THEME_EXTRA_LARGE)}}>A</TextXL>
        </div>
        <MainContaint theme={theme} ></MainContaint>
        </Main>
        
    </React.Fragment>
     
   </ThemeProvider>
  );
}

export default App;