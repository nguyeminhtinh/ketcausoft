import React from 'react';
import { Col, Container, Row, Alert, Button } from 'react-bootstrap';
import banner from '../../../images/baneruser.png';
import product from '../../../images/product.png';
import { useHistory } from 'react-router-dom';

function Product() {
  const history = useHistory();
  const onClickNext = () => {
    nextStep();
  };
  const nextStep = () => {
    history.push({
        pathname: `/send-price`
    });
};
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
              <div className="box-form box-form-small">
                <h3 className="title-form title-form-small">Please answer these questions about yourself.</h3>
                <div className="bottom-form-small">
                  <p>We appreciate your kind gesture. Please select yes to receive a call & make a donation.</p>
                  <div className="d-flex box-multiple-btn">
                    <Button className="btn btn-submit-form" onClick={onClickNext} type="submit">Yes</Button>
                    <Button className="btn btn-submit-form btn-cancle" onClick={onClickNext} type="submit">No</Button>
                  </div>
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
