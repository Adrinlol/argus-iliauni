import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (max-width: 480px) {
    overflow: hidden;
  }
`;
