import { useState } from "react";
import Icon from "@ant-design/icons";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Divider,
  notification,
  message,
} from "antd";
import styles from "../../styles/Auth.module.css";
import authErrorHandler from "../../util/authErrorHandler";
import { FormArgs, AuthService } from "../../service/AuthService";

function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = async ({ email, password }: FormArgs) => {
    setLoading(true);
    const { error } = await AuthService.login({
      email,
      password,
    });
    setLoading(false);

    if (error) {
        console.log("erroooor", error)
      return notification.error({
        message: authErrorHandler(error.error || ""),
        duration: 5,
      });
    }

    message.success("success 👏🏾");
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