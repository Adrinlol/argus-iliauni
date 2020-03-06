import React from "react";
import { Row, Col } from "antd";

import Container from "../../components/Container";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <Row type="flex">
          <Col lg={12} md={12} sm={24} xs={24}>
            <S.ContentWrapper>
              <S.Title>
                © არგუსი -{" "}
                <S.Link href="https://argus.iliauni.edu.ge/ka">
                  ილიას სახელმწიფო უნივერსიტეტი
                </S.Link>
              </S.Title>
            </S.ContentWrapper>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <S.Version>v4.0.2ed04479</S.Version>
          </Col>
        </Row>
      </Container>
    </S.Footer>
  );
};

export default Footer;
