import { useState } from "react";
import {WarningOutlined} from "@ant-design/icons";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  notification, message,
} from "antd";

import styles from "../../styles/Auth.module.css";
import { FormArgs, AuthService } from "../../service/AuthService";
import useAuth from "../../hook/auth";
import { useNavigate } from "react-router-dom";
import SecureLS from "secure-ls";
var ls = new SecureLS();

function Login() {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = ({ email, password }: FormArgs) => {
    setLoading(true);

    var authResult = AuthService.login({
      email,
      password,
    });

    authResult
    .then((res) => {
        console.log(res)
        setUser(res);
        ls.set('user', {data: res});
        message.success("Successfully logged in")
        setLoading(false);
        navigate('/home');
    })
    .catch((err) => {
        notification.error({
            message: "Failed to log you in",
            description: err?.error,
            icon: <WarningOutlined  style={{ color: 'red' }} />
        })
        setLoading(false);
    })
  };


  return (
    <main className={styles.container}>
      <section className={styles.container__image_section}>
        <h1 className={styles.container__image_section__heading}>
          We are writing a new test for logging in.
        </h1>
      </section>

      <section className={styles.container__auth_section}>
        <div className={styles.container__auth_section__input_section}>
          <h2>Login into your account</h2>
          <p>We make logging in easy and safe</p>
          <Form layout="vertical" onFinish={onFinish}>
            <Row gutter={[10, 0]}>
              <Col xs={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Email is required",
                    },
                  ]}
                >
                  <Input size="large" style={{ width: "100%" }} />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Password is required",
                    },
                  ]}
                >
                  <Input.Password size="large" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              
              <Col xs={24}>
              <Button
                  htmlType="submit"
                  loading={loading}
                  type="primary"
                  size="large"
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
              </Col>

            </Row>
          </Form>
          
        </div>
   
      </section>
    </main>
  );
}

export default Login;