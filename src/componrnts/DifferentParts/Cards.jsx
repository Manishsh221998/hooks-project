import React from 'react';
import { Card, Button, Container, Row, Col} from 'react-bootstrap';
export const Cards = () => {
    return (
        <section>
            <Container >
                 <Row className='py-4'>
                    <Col xxl={3} xl={3} lg={4} md={4} sm={6} xs={12} >
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="./cardIamge/c1.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="success">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={4} md={4} sm={6} xs={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./cardIamge/c1.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={4} md={4} sm={6} xs={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./cardIamge/c1.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="info">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={3} lg={4} md={4} sm={6} xs={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./cardIamge/c1.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
