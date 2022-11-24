import React from "react";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 3em;
  box-shadow: 0 1px  #EDEDED;
`

export const NavbarContent = styled.div`
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3em;
`

export const LogoBackBround = styled.div`
  height: 2.5em;
  width: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0055DF;
`

export const NavBar: React.FC = props => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <LogoBackBround>
          ns
        </LogoBackBround>
      </NavbarContent>
    </NavbarContainer>
  );
};