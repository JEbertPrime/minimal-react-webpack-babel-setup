import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
      <Container style={{marginBottom:'10px'}}>
      <Row>
          <Col>
              <h2 className='center'>Stay in Touch</h2>
          </Col>
      </Row>
      <Row>
      <Col md='2'></Col>

      <Col>
      <Form>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="examplePassword" placeholder="Name" />
      </FormGroup>
      
      
      
     
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Receive updates about conferences and events
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form></Col>
    <Col md='2'></Col>
</Row></Container>
    
  );
}

export default Example;