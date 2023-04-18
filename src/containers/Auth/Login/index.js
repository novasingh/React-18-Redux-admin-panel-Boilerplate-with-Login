import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Card, Row, Col, Button, Form, Spinner } from "react-bootstrap";

import Page from "../../../components/Page";
import Input from "../../../components/Form/Input";

import { resetState } from "../../../redux/actions/authActions";
import { performLogin } from "../../../redux/actionCreators/authCreators";

import { loginRules } from "../../../services/validations";

const Login = ({ isAuthenticated, submitting, handleLogin, reset }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: loginRules,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await handleLogin(data);

    if (!result?.data?.user) console.log("Run Error...");
    else navigate(`/dashboard`);
  };

  useEffect(() => {
    reset();
  }, [reset]);

  if (isAuthenticated) {
    return navigate("/dashboard");
  }

  return (
    <Page
      id="page--login"
      title="Login"
      containerFluid={true}
      padding={false}
      className="h-100"
    >
      <div className="d-grid w-100 h-100 page--wrapper  justify-content-center ">
        <div className="d-flex flex-column align-items-start justify-content-center py-5 px-4 login_form">
          <Card
            border="light"
            className="w-100 mx-auto px-4 pt-3 pb-4 my-5"
            style={{ maxWidth: 500 }}
          >
            <Card.Header>Sign in</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col xs={12}>
                    <Input
                      id="email"
                      name="email"
                      label="Email address"
                      {...register("email")}
                      error={errors.email?.message}
                    />
                  </Col>

                  <Col xs={12}>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      label="Password"
                      {...register("password")}
                      error={errors.password?.message}
                    />
                  </Col>

                  <Col xs={12} className="pt-4 position-relative">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className={`w-100`}
                      disabled={submitting}
                    >
                      {!submitting && <span>Sign In</span>}
                      {submitting && <Spinner animation="border" />}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Page>
  );
};

const mapStateToProps = (state) => ({
  submitting: state.auth.submitting,
  loginOtpSent: state.auth.loginOtpSent,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetState()),
  handleLogin: (payload) => dispatch(performLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
