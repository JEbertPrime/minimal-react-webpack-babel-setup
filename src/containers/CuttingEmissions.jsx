import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
const Link = styled.a`
  color: #fc801e;
  &:hover {
    color: #fc801e;
  }
`;
export default function CuttingEmissions() {
  return (
    <Container fluid style={{ backgroundColor: '#FFFDED' }}>
    <a id='emissions' style=
        {{position:'relative',
        top: '-200px'}}
    />
      <Row style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <Col md={6}>
          <h2>
            Georgia can be a leader in the zero emissions economy of
            the future.
          </h2>
          <p>
            Georgia emits roughly 125 million tons of carbon pollution
            every year.
          </p>
          <p>
            Drawdown Georgia has identified 20 solutions that can
            shrink this footprint significantly by 2030.
          </p>
          <p>
            Doing so can grow Georgia’s economy, advance equity,
            improve public health, and protect the environment.
          </p>
        </Col>
        <Col></Col>
        <Col md="5">
          <img
            src="/wp-content/uploads/2021/06/drawdown_chart.png"
            width="400px"
          />
        </Col>
      </Row>
    </Container>
  );
}
