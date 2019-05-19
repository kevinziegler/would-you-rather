import React from 'react';
import { Card, Spinner } from 'react-bootstrap';

const LoginLoader = () => (
    <Card body>
        <Card.Title>
        Would you Rather? <span className="text-muted">is loading</span>
        </Card.Title>
        <Card.Text style={{textAlign: 'center'}}>
            <Spinner animation="border" />
        </Card.Text>
    </Card>
);

export default LoginLoader;
