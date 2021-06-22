import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const User=()=>{
    return(
        <>
    <Row>
        <Col sm="6">
        <Card body>
            <CardTitle>
WANT TO STUDY !! 
            </CardTitle>
            <CardText>
Click to start journey to educate yourselves to become a better you...
            </CardText>
            <Button>Lets get started</Button>
        </Card>
        </Col>

        <Col sm="6">
<Card body>
    <CardTitle>
        WANT TO CONTRIBUTE !!
    </CardTitle>
    <CardText>
        Click here to provide some courses under your name..
    </CardText>
    <Button> Let's get started</Button>
</Card>
        </Col>
    </Row>
    </>
    );
}
export default User;