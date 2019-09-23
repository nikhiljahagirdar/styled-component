import React from "react";
import styled from "styled-components";
import { device } from "./device";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Image = styled.img``;

const Content = styled.div`padding: 10px;`;

const Card = ({ withPictureOf }) => (
  <CardWrapper>
    <Image src={`https://placem.at/things/?w=500&random=${withPictureOf}`} />
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget neque
      imperdiet, molestie turpis ac, gravida urna. Mauris quis condimentum
      augue. Vestibulum scelerisque, ligula vel lacinia rutrum, risus magna
      viverra orci, eget dictum mi mi sed felis. Mauris ac nisi eu neque aliquet
      hendrerit vel sit amet justo. Curabitur dignissim magna ligula, sit amet
      pellentesque lacus condimentum a. Nullam erat mauris, tristique id odio
      et, auctor blandit mauris. Quisque luctus nisi at urna sagittis blandit ac
      efficitur massa. Curabitur ac tincidunt justo.
    </Content>
  </CardWrapper>
);

export default Card;
