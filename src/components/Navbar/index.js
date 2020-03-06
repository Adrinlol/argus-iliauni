import React from "react";
import { Row, Col } from "antd";

import Container from "../../components/Container";
import Icon from "../../components/Icon";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Navbar>
      <Container>
        <Row type="flex" justify="space-between" align="middle">
          <Col>
            <S.ContentWrapper href="https://argus.iliauni.edu.ge/ka">
              <Icon src="logo-rounded-white.svg" />
              <S.Title>არგუსი</S.Title>
            </S.ContentWrapper>
          </Col>
        </Row>
      </Container>
    </S.Navbar>
  );
};

export default Navbar;
