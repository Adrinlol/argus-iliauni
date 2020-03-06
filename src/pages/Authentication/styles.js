import styled from "styled-components";

export const Reset = styled.a`
  color: #337ab7;
  text-decoration: none;

  &:hover,
  active {
    color: #337ab7;
    text-decoration: underline;
  }
`;

export const Authorize = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

export const Form = styled.form`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

export const ButtonContainer = styled.div`
  width: 90%;
  padding-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 512px) {
    width: 100%;
    padding-right: 0;
  }
`;
