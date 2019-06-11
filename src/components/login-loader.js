import React from 'react';
import { Card, Spinner } from 'react-bootstrap';

const LoginLoader = () => (
    <Card body style={{textAlign: 'center'}}>
        <Card.Title>
        Would you Rather? <span className="text-muted">is loading</span>
        </Card.Title>
        <Spinner animation="border" />
    </Card>
);

export default LoginLoader;
