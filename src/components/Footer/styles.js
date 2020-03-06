import styled from "styled-components";

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
`;

export const ContentWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: start;
`;

export const Title = styled.h1`
  font-size: 1rem;
`;

export const Link = styled.a`
  color: #337ab7;
  text-decoration: none;
`;

export const Version = styled.div`
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  color: #212529;

  @media only screen and (max-width: 512px) {
    text-align: center;
  }
`;
