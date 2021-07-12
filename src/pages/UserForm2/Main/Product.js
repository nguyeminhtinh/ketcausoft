import React, { useState } from 'react';
import { Col, Container, Row, Alert, Button, Form } from 'react-bootstrap';
import banner from '../../../images/baneruser.png';
import product from '../../../images/product.png';
import Input from '../../../Components/Input';
import Select from '../../../Components/Select';
import { valid } from '../../../utils/constant';
import onlyChar from '../../../utils/onlyChar';
import { checkName } from '../../../utils/validateForm';
import Feedback from '../../../Components/Feedback';
import { useHistory } from 'react-router-dom';
import Facebook from '../../UserForm/Main/Facebook';

const hill = [
  {
    value: 'day1',
    label: 'Suburb'
  },
  {
    value: 'day2',
    label: 'Spring hill1'
  },
  {
    value: 'day3',
    label: 'Spring hill2'
  },
  {
    value: 'day4',
    label: 'Spring hill3'
  },
  {
    value: 'day5',
    label: 'Spring hill4'
  },
  {
    value: 'day6',
    label: 'Spring hill5'
  },
]

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
  const [mobile, setMobile] = useState('');
  const [mobileValid, setMobileValid] = useState(valid.NON_VALID);
  const checkMobileValid = (value) => {
    const test = checkName(value);
    setMobileValid(Number(test));
    return test;
  };

  const [code, setCode] = useState('');
  const [codeValid, setCodeValid] = useState(valid.NON_VALID);
  const checkCodeValid = (value) => {
    const test = checkName(value);
    setCodeValid(Number(test));
    return test;
  };

  const [address, setAddress] = useState('');
  const checkAddressValid = (value) => {
    const test = checkName(value);
    setAddressValid(Number(test));
    return test;
  };
  const [addressValid, setAddressValid] = useState(valid.NON_VALID);

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
              <div className="box-form">
                <h3 className="title-form">Where can we send your prize?</h3>
                <Row>
                  <Col className="pr-2">
                    <Input
                        defaultValue={code}
                        onFocus={() => setCodeValid(valid.NON_VALID)}
                        onKeyDown={onlyChar}
                        onChange={(e) => setCode(e.target.value)}
                        onBlur={(e) => checkCodeValid(e.target.value)}
                        invalid={codeValid === valid.INVALID}
                        placeholder="Post code"
                    >
                    </Input>
                    <Feedback
                        show={codeValid === valid.INVALID}
                        className="text-center mb-2"
                    >
                        Post code is invalid
                    </Feedback>
                  </Col>
                  <Col className="pl-2">
                    <Select
                      inputMode='numeric'
                      options={hill}
                      defaultValue=''
                      onChange={() => {}}
                    >
                      Spring hill
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input
                        inputMode="address"
                        defaultValue={address}
                        onFocus={() => setAddressValid(valid.NON_VALID)}
                        onChange={(e) => setAddress(e.target.value)}
                        onBlur={(e) => checkAddressValid(e.target.value)}
                        invalid={addressValid === valid.INVALID}
                        placeholder="Street Address"
                    >
                    </Input>
                    <Feedback
                      show={addressValid === valid.INVALID}
                      className="text-center mb-2"
                    >
                      Street Address is invalid
                    </Feedback>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input
                        inputMode="mobile"
                        defaultValue={mobile}
                        onFocus={() => setMobileValid(valid.NON_VALID)}
                        onChange={(e) => setMobile(e.target.value)}
                        onBlur={(e) => checkMobileValid(e.target.value)}
                        invalid={mobileValid === valid.INVALID}
                        placeholder="Mobile No."
                    >
                    </Input>
                    <Feedback
                      show={mobileValid === valid.INVALID}
                      className="text-center mb-2"
                    >
                      Mobile No. is invalid
                    </Feedback>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Check
                        required
                        label="Love big discounts? Join makescents.com Ltd now to receive exclusive deals on electronics, appliances, homewares, fashion & more!"
                        className="check-agree"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button className="btn btn-submit-form" onClick={onClickNext} type="submit">SUBMIT</Button>
                <p className="note-form text-center">I agree that the competition's host and it's <a className="link-text" href="https://0.0.0.0:3000">sponsors</a> may contact me by email, phone, text or post with more interesting offers. Please check our <a className="link-text" href="https://0.0.0.0:3000">privacy policy</a> to see which data we are gathering and sharing. Participation is free of charge!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="box-middle-user">
        <Container>
          <Row className="list-tabs-user">
            <Col md={4} className="text-center">
              <p className="active-curent"><span className="box-number">01</span>LEAVE YOUR DETAILS</p>
            </Col>
            <Col md={4} className="text-center">
              <p><span className="box-number">02</span>ANSWER THE QUESTIONS</p>
            </Col>
            <Col md={4} className="text-center">
              <p><span className="box-number">03</span>AND YOU'RE DONE!</p>
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
      </div>
      <Facebook />
    </>
  )
}

export default Product;
