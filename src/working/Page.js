import React from "react";
import styled from "styled-components";
import { device } from "./device";

const Page = styled.div`
 

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export default Page;