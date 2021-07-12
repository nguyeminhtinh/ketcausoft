import React from 'react';
import { Col, Container, Row, Alert, ProgressBar } from 'react-bootstrap';
import banner from '../../../images/baneruser.png';
import product from '../../../images/product.png';
import { progressPer } from '../../../utils/constant';
import hinh1 from '../../../images/hinh1.png';
import hinh2 from '../../../images/hinh2.png';
import hinh3 from '../../../images/hinh3.png';
import hinh4 from '../../../images/hinh4.png';
import hinh5 from '../../../images/hinh5.png';
import hinh6 from '../../../images/hinh6.png';
import hinh7 from '../../../images/hinh7.png';
import hinh8 from '../../../images/hinh8.png';
import hinh9 from '../../../images/hinh9.png';
import hinh10 from '../../../images/hinh10.png';
import hinh11 from '../../../images/hinh11.png';
import hinh12 from '../../../images/hinh12.png';
import { RadioButton } from '../../../Components/Radio';

const data = [
  {
    imgSrc: hinh1,
  },
  {
    imgSrc: hinh2,
  },
  {
    imgSrc: hinh3,
  },
  {
    imgSrc: hinh4,
  },
  {
    imgSrc: hinh5,
  },
  {
    imgSrc: hinh6,
  },
  {
    imgSrc: hinh7,
  },
  {
    imgSrc: hinh8,
  },
  {
    imgSrc: hinh9,
  },
  {
    imgSrc: hinh10,
  },
  {
    imgSrc: hinh11,
  },
  {
    imgSrc: hinh12,
  }
]

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
                      <p className="des-final mb0">Who is your current ENERGY supplier?</p>
                    </Col>
                  </Row>
                  <Row className="mb-4 custom-padding-row">
                    {data.map(item => (
                      <Col md={3}>
                        <RadioButton
                          classContainer='checkbox-text checkbox-text-v2'
                          defaultChecked=''
                          name="gender"
                          onChange={() => {}}
                        >
                          <div className="box-image-detail">
                            <img src={item.imgSrc} alt="hinhanh"/>
                          </div>
                        </RadioButton>
                      </Col>
                    ))}
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
