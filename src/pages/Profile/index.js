import React, { Fragment, useEffect, useState } from "react";
import { Row, Col } from "antd";

import useForm from "../Authentication/useForm";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Container from "../../components/Container";

import axios from "axios";

import * as S from "./styles";

const Profile = () => {
  const { handleLogOut } = useForm();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://argus.iliauni.edu.ge/api/v1/auth/user",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then(response => {
      setUserInfo(response.data.data);
    });
  }, []);

  return (
    <Fragment>
      <Container>
        <Row type="flex" justify="center" align="middle">
          <Col lg={12} md={12} sm={24} xs={24}>
            <S.Profile>
              <S.Title>პროფილი</S.Title>
              <S.Container>
                <Input
                  type="text"
                  placeholder={userInfo.email}
                  label="ელ. ფოსტა"
                  disabled
                />
                <Input
                  type="text"
                  placeholder={userInfo.firstName}
                  label="სახელი"
                  disabled
                />
                <Input
                  type="text"
                  placeholder={userInfo.lastName}
                  label="გვარი"
                  disabled
                />
                <Input
                  type="text"
                  placeholder={userInfo.persNum}
                  label="პირადი ნომერი"
                  disabled
                />
                <S.ButtonContainer>
                  <Button name="submit" type="submit" onClick={handleLogOut}>
                    გამოსვლა
                  </Button>
                </S.ButtonContainer>
              </S.Container>
            </S.Profile>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Profile;
