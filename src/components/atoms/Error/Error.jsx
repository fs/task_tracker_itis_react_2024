import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const Error = ({ errorText }) => {
    const [show , setShow] = useState(true)

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    { errorText }
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Error;
