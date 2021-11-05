import React from 'react';
import { Col, Card } from "antd";

export default function Home() {

    return(
        <>
            <Col lg={12} md={24} style={{ margin: '15% auto' }}>
                <Card>
                    <h2>Hello! 😃</h2>
                    <h4>You have successfully signed in.</h4>
                </Card>
            </Col>
        </>
    )
}