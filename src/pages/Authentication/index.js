import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { Redirect } from "react-router-dom";

import useForm from "./useForm";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Container from "../../components/Container";

import * as S from "./styles";

const Authenticaiton = () => {
  const { values, handleChange, handleSubmit } = useForm();

  if (localStorage.getItem("access_token")) {
    return <Redirect to="/profile" />;
  }

  return (
    <Fragment>
      <Container>
        <Row type="flex" justify="center" align="middle">
          <Col lg={12} md={12} sm={24} xs={24}>
            <S.Authorize>
              <S.Title>ავტორიზაცია</S.Title>
              <S.Form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="login"
                  label="პირადი ნომერი"
                  value={values.login || ""}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="password"
                  label="პაროლი"
                  value={values.password || ""}
                  onChange={handleChange}
                />
                <S.ButtonContainer>
                  <div></div>
                  <Button name="submit" type="submit">
                    შესვლა
                  </Button>
                  <S.Reset href="https://argus.iliauni.edu.ge/ka/password/reset">
                    პაროლის აღდგენა
                  </S.Reset>
                </S.ButtonContainer>
              </S.Form>
            </S.Authorize>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Authenticaiton;
