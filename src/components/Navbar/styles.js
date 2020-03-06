import styled from "styled-components";

export const Navbar = styled.header`
  background-color: #343a40;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  vertical-align: middle;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 0.16rem 0;
  display: flex;
  flex-flow: row wrap;
`;

export const ContentWrapper = styled.a`
  display: flex;
  padding-left: 2.5rem;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #9d9d9d;
  padding-left: 0.5rem;
`;
