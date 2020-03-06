import { useState } from "react";
import { notification } from "antd";
import axios from "axios";

const useForm = () => {
  const [values, setValues] = useState({});
  const [validationError, setValidationError] = useState(false);
  const [logoutError, setLogoutError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const today = new Date();

  const openNotificationWithIcon = type => {
    notification[type]({
      message: "Error",
      description: validationError || logoutError
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://argus.iliauni.edu.ge/api/v1/auth/token/create", {
        ...values,
        client_id: 1,
        grant_type: "argus"
      })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("refresh_token", response.data.refresh_token);
          localStorage.setItem(
            "token_duration",
            today.getTime() + 1 * 24 * 60 * 60 * 1000
          );
          setLoggedIn(true);
        }
      })
      .catch(err => {
        setValidationError(JSON.stringify(err.response.data.message));
      });
  };

  if (
    localStorage.getItem("token_duration") && localStorage.getItem("token_duration") < today.setDate(today.getDate() - 1)
  )  {
    axios({
      method: "post",
      url: "https://argus.iliauni.edu.ge/api/v1/auth/token/refresh",
      data: {
        client_id: 1,
        grant_type: "argus_refresh_token",
        refresh_token: localStorage.getItem("refresh_token")
      }
    }).then(response => {
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem(
        "token_duration",
        today.getTime() + 1 * 24 * 60 * 60 * 1000
      );
    });
  }

  const handleLogOut = event => {
    event.preventDefault();
    axios({
      method: "patch",
      url: "https://argus.iliauni.edu.ge/api/v1/auth/token/revoke",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then(response => {
        if (response.status === 200) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("token_duration");
          window.location.reload();
        }
      })
      .catch(err => {
        setLogoutError(JSON.stringify(err.response.data.errors[0]));
        // localStorage.removeItem("access_token");
        // localStorage.removeItem("refresh_token");
        // localStorage.removeItem("token_duration");
        // window.location.reload();
      });
  };

  if (validationError || logoutError) {
    openNotificationWithIcon("error");
  }

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    handleLogOut,
    loggedIn
  };
};

export default useForm;
