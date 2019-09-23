import {GlobalVariables} from './GlobalVariables';
export const Devices = {
  verysmall: `only screen and (max-width: ${GlobalVariables.desktop-1}px)`,
  small: `only screen and (min-width :${GlobalVariables.desktop}px) and (max-width:${GlobalVariables.desktop * GlobalVariables.m -1 }px)`,
  medium:  `only screen and (min-width :${GlobalVariables.desktop* GlobalVariables.m}px) and (max-width:${GlobalVariables.desktop * GlobalVariables.l -1}px)`,
  large:  `only screen and (min-width:${GlobalVariables.desktop * GlobalVariables.l}px and (max-width:${GlobalVariables.desktop * GlobalVariables.xl -1}px)`,
  xlarge:  `only screen and (min-width ${GlobalVariables.desktop * GlobalVariables.xl}px)`,
 };


