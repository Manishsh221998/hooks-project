import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
export const CardHeading = () => {
  return (
    <section>
<Container fluid>
    <Row>
        <Col className='text-center p-2 text-dark border rounded-bottom-5 shadow'>
        <h2>Heading for card section</h2>
        <p className='text-danger'>Sub heading for card section</p>
        </Col>
    </Row>
</Container>
    </section>
  )
}
