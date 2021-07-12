import React from 'react';
import { Col, Container, Row, Alert, ProgressBar, Button } from 'react-bootstrap';
import banner from '../../../images/baneruser.png';
import product from '../../../images/product.png';
import { progressPer } from '../../../utils/constant';
import Radio from '../../../Components/Radio'

function Product() {
  const content = `<Join now for a Chance to win a PLAYSTATION 5>`;
  return (
    <>
      <div className="join-now text-center">
        <Alert.Link className="color-white" href="#">{content}</Alert.Link>
      </div>
      <div className="bg-cover" style={{ "backgroundImage": `url(${banner})` }}>
        <Container className="banner banner-userform">
          <Row>
            <Col md={12}>
              <h2 className="title text-center title-banner-user">WHO IS THE NEXT WINNER OF OUR <br />
                PLAYSTATION 5 COMPETITION?!</h2>
            </Col>
            <Col md={12} className="custom-box-banner">
              <div className="box-product-banner">
                <img src={product} alt="banner" />
              </div>
              <div className="box-form box-form-small full-border">
                <h3 className="title-form title-form-small pb0">Please answer these questions about yourself.</h3>
                <div className="bottom-form-small">
                  <Row className="mb-4">
                    <Col>
                      <ProgressBar
                          variant="info"
                          animated
                          now={progressPer.BANKRUPT_ANSWER}
                          label={
                            <span className="progress-label">
                              50%
                            </span>
                          }
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <p className="des-final font-medium mb0">What is your housing situation?</p>
                    </Col>
                  </Row>
                  <Row className="mb-4 box-radio-default">
                    <Col md={12}>
                      <Radio>I’m a home owner</Radio>
                    </Col>
                    <Col md={12}>
                      <Radio>I’m renting my home</Radio>
                    </Col>
                    <Col md={12}>
                      <Radio>I’m living with my parents</Radio>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <Button className="btn btn-submit-form" type="submit">SUBMIT</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="box-middle-user">
        <Container>
          <Row className="list-tabs-user">
            <Col md={4} className="text-center">
              <p><span className="box-number">01</span>LEAVE YOUR DETAILS</p>
            </Col>
            <Col md={4} className="text-center">
              <p className="active-curent"><span className="box-number">02</span>ANSWER THE QUESTIONS</p>
            </Col>
            <Col md={4} className="text-center">
              <p><span className="box-number">03</span>AND YOU'RE DONE!</p>
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Product;
