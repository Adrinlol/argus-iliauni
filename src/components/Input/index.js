import React from "react";

import * as S from "./styles";

const Input = props => (
  <S.Container>
    <S.Label>{props.label}</S.Label>
    <S.Input {...props} spellcheck="false" required />
  </S.Container>
);

export default Input;
