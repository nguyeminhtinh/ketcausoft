import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../../images/banner.png';
import gif from '../../../images/gif.png';
import images1 from '../../../images/images1.png';
import images2 from '../../../images/images2.png';
import images3 from '../../../images/images3.png';
import images4 from '../../../images/images4.png';

const data = [
    {
        imgSrc: images1,
        title: `Playstation 5`,
    },
    {
        imgSrc: images2,
        title: `XBOX Series X`,
    },
    {
        imgSrc: images3,
        title: `iPhone 12 Pro Max`,
    },
    {
        imgSrc: images4,
        title: `Macbook Air 2020`,
    }
];

const Product = () => {
  return (
    <>
      <div className="bg-cover top-over" style={{ "backgroundImage": `url(${banner})` }}>
        <Container className="banner">
          <Row>
            <Col md={12}>
              <p className="title text-uppercase">Thank you! <br />
                <span className="sub-title text-uppercase">for your Participation</span>
              </p>
            </Col>
            <Col md={12}>
              <img className="image-banner" src={gif} alt="gif" />
            </Col>
            <Col md={12}>
              <p className="sub-title">WINNERS will be announced soon. STAY TUNED!</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="box-middle-thanks">
        <Container className="content-thanks">
          <Row>
            <Col md={12}>
              <h2 className="title-has-line text-center"><span>You might also be interested in these offers</span></h2>
            </Col>
          </Row>
          <Row>
            {data.map(item => (
              <Col md={3} xs={6}>
                <div className="box-image bg-cover" style={{ "backgroundImage": `url(${item.imgSrc})` }}>
                  <img className="image-banner" src={item.imgSrc} alt={item.title} />
                </div>
                <h3 className="title-post text-center">{item.title}</h3>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Product;
