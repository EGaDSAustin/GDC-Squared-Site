import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';

const Sponsors = (props) => {

    return (
        <div>
            <h6>OUR SPONSORS</h6>
            <Container>
                <Row>
                    <Col>
                        <Media>
                            <img alt="sponsor img1"/>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img alt="sponsor img1"/>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img alt="sponsor img2"/>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img alt="sponsor img3"/>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img alt="sponsor img4"/>
                        </Media>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Media>
                            <img alt="iso logo"/>
                        </Media>
                    </Col>
                    <Col>
                        Join EGaDS!
                    </Col>
                    <Col>
                        <Media>
                            <img alt="twitter"/>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img alt="instagram"/>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img alt="facebook"/>
                        </Media>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sponsors;