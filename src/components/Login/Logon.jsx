import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Logon (){
    return ( 
            <Form className="LogonContainer">
            <Container >
              <Row>
                <Col xs={6}>
                <Form.Group controlId="formBasicEmail">         
                  <Form.Control className="inputArea" type="text" placeholder="Username" />
                </Form.Group>
                </Col>
              </Row>
              <Row>
               <Col xs={6}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control className="inputArea" type="password" placeholder="Password" />
                 </Form.Group>
                 </Col>
             </Row>
             <Row>
             <Col>
             <Button variant="outline-light" class="border border-warning" type="submit">
                Log In
             </Button>
             </Col>
             </Row>
            </Container>
            </Form>
    );
}

export default Logon;