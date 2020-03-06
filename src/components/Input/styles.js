import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 5px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #dce1ff;
  width: 100%;
  max-width: 400px;
  border-radius: 0.625rem;
  outline: none;
  transition: border-color 0.3s ease-in;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);

  &:focus,
  &:active {
    color: #495057;
    background-color: #fff;
    border-color: #8bb8df;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 0.2rem rgba(51, 122, 183, 0.25);
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  width: 100%;
  max-width: 150px;
  color: #212529;
  text-align: center;
`;
