import React,{useState} from 'react';
import styled from 'styled-components';
import {Devices} from './Devices';

const HeaderContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
font-size: ${props => props.theme.FONT_SIZE};
background: ${props => props.theme.HEADER_BACKGROUND};
 `;

const ListItem = styled.li`
list-style: none;
padding : 5px;
color:${props => props.theme.HEADER_COLOR};
font-size:${props=>props.theme.FONT_SIZE}px;
 
  @media ${Devices.verysmall}{
    list-style: none;
    color:${props => props.theme.HEADER_COLOR};
    font-size:${props=>props.theme.FONT_SIZE}px;
  }

  @media ${Devices.xlarge}{
    list-style: none;
    color:${props => props.theme.HEADER_COLOR};
    font-size:${props=>props.theme.FONT_SIZE}px;
  }
`;


const List = styled.ul.attrs(props => ({
  display: props.block && 'none',
    
}))`

list-style: none;
margin: auto;
display:flex;
flex-direction:row;

@media ${Devices.verysmall}{
  list-style: none;
  display:${props => props.block};
  flex-direction:column;
}

@media ${Devices.xlarge}{
  list-style: none;
  display:${props => props.block};
  flex-direction:column;
}
`;


const Hamburger = styled.span`

padding: 5px 5px 5px 5px;
color:${props => props.theme.HEADER_COLOR};
font-size:${props=>props.theme.FONT_SIZE}px;
display:none;

@media ${Devices.verysmall}{
  display:flex;
  padding: 5px 5px 5px 5px;
  color:${props => props.theme.HEADER_COLOR};
  font-size:${props=>props.theme.FONT_SIZE}px;
  align-items: flex-start  ;
  position:inline;
}

@media ${Devices.xlarge}{
  display:flex;
  padding: 5px 5px 5px 5px;
  color:${props => props.theme.HEADER_COLOR};
  font-size:${props=>props.theme.FONT_SIZE}px;
  align-items: flex-start  ;
  position:inline;
}
  
`;



function Header(props){

  const [toggle, setToggle] = useState('none');

  let menuItems=[
    'ONE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIGHT',
    'NINE',
  ]
  
 

 
 const handleClick=() =>{
  
 if(toggle==='none'){
   setToggle('flex')
 }
 else{
  setToggle('none')
 }
     
      
   };

  return(
<React.Fragment>
<HeaderContainer >
<Hamburger id="ham" onClick={()=>{handleClick()}} >
<i className="fa fa-bars" aria-hidden="true" ></i>
</Hamburger>
<List block={toggle} >
  {menuItems.map(
       (item,index)=>{
         return(<ListItem key={index}>{item}</ListItem>) 
       }
     )
      } 
</List>
</HeaderContainer>
</React.Fragment> 
  )

}









export default Header;