import React, { useState, useMemo } from 'react';
import { Col, Container, Row, Alert, Button } from 'react-bootstrap';
import banner from '../../../images/baneruser.png';
import product from '../../../images/product.png';
import Input from '../../../Components/Input';
import Radio from '../../../Components/Radio';
import Select from '../../../Components/Select';
import { valid } from '../../../utils/constant';
import onlyChar from '../../../utils/onlyChar';
import { checkName, checkEmail } from '../../../utils/validateForm';
import Feedback from '../../../Components/Feedback';
import Facebook from './Facebook';
import { useHistory } from 'react-router-dom';

const Product = () => {
  /**
  * STATE
  */
  const history = useHistory();
  const [firstname, setFirstname] = useState('');
  const [firstnameValid, setFirstnameValid] = useState(valid.NON_VALID);
  const [lastname, setLastname] = useState('');
  const [lastnameValid, setLastnameValid] = useState(valid.NON_VALID);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(valid.NON_VALID);
  const [day, setDay] = useState(false);
  const [dayValid, setDayValid] = useState(valid.NON_VALID);
  const [month, setMonth] = useState(false);
  const [monthValid, setMonthValid] = useState(valid.NON_VALID);
  const [year, setYear] = useState(false);
  const [yearValid, setYearValid] = useState(valid.NON_VALID);
  
  /**
  * validate firstname, lastname, email, day, month, year
  */
  const checkFirstnameValid = (value) => {
    const test = checkName(value);
    setFirstnameValid(Number(test));
    return test;
  };

  const checkLastnameValid = (value) => {
      const test = checkName(value);
      setLastnameValid(Number(test));
      return test;
  };

  const checkEmailValid = (value) => {
      const test = checkEmail(value);
      setEmailValid(Number(test));
      return test;
  };

  const checkDayValid = (value) => {
    const test = parseInt(value) >= 1 && parseInt(value) <= 31;
    setDayValid(Number(test));
    return test;
  };

  const checkMonthValid = (value) => {
    const test = parseInt(value) >= 1 && parseInt(value) <= 12;
    setMonthValid(Number(test));
    return test;
  };

  const checkYearValid = (value) => {
    const test = parseInt(value) >= 1900 && parseInt(value) <= 2000;
    setYearValid(Number(test));
    return test;
  };

  const onChangeDay = (value) => setDay(value);
  const onChangeMonth = (value) => setMonth(value);
  const onChangeYear = (value) => setYear(value);

  const onFocusDay = () => setDayValid(valid.NON_VALID);
  const onFocusMonth = () => setMonthValid(valid.NON_VALID);
  const onFocusYear = () => setYearValid(valid.NON_VALID);

  /**
  * Date, Month, Year
  */
  const getOptions = (start, end, increase = true) => {
    const dayTypes = [];
    for (start; increase ? start <= end : start >= end; increase ? start++ : start--) {
        dayTypes.push({
            value: start < 10 ? `0${start}` : `${start}`,
            label: start < 10 ? `0${start}` : `${start}`,
        });
    }
    return dayTypes;
  };

  /**
  * Alert
  */
  const content = `<Join now for a Chance to win a PLAYSTATION 5>`;

  /**
  * Submit
  */
  const onClickNext = () => {
    if (checkFirstnameValid(firstname) &&
        checkLastnameValid(lastname) &&
        checkEmailValid(email) &&
        checkDayValid(day) &&
        checkMonthValid(month) &&
        checkYearValid(year))
        nextStep();
  };

  /**
  * nextStep
  */
  const nextStep = () => {
    history.push({
        pathname: `/user-form-2`,
        hash: history.location.hash,
        search: history.location.search,
    });
  };

  /**
  * localStorage
  */
  useMemo(() => {
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email', email);
    localStorage.setItem('day', day);
    localStorage.setItem('month', month);
    localStorage.setItem('year', year);
  }, [firstname, lastname, email, day, month, year]);

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
                <h3 className="title-form">Please Fill In Your Details First.</h3>
                <Row>
                  <Col className="pr-2">
                    <Radio
                      name="mr"
                      classContainer="custom-check text-center"
                    >
                      Mr
                    </Radio>
                  </Col>
                  <Col className="pl-2">
                    <Radio
                      name="mrs"
                      classContainer="custom-check text-center"
                    >
                      Mrs
                    </Radio>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-2">
                    <Input
                        placeholder="Firstname"
                        defaultValue={firstname}
                        onFocus={() => setFirstnameValid(valid.NON_VALID)}
                        onKeyDown={onlyChar}
                        onChange={(e) => setFirstname(e.target.value)}
                        onBlur={(e) => checkFirstnameValid(e.target.value)}
                        invalid={firstnameValid === valid.INVALID}
                    >
                    </Input>
                    <Feedback
                        show={firstnameValid === valid.INVALID}
                        className="text-center mb-2"
                    >
                        Firstname is invalid
                    </Feedback>
                  </Col>
                  <Col className="pl-2">
                    <Input
                      defaultValue={lastname}
                      onFocus={() => setLastnameValid(valid.NON_VALID)}
                      onKeyDown={onlyChar}
                      onBlur={(e) => checkLastnameValid(e.target.value)}
                      onChange={(e) => setLastname(e.target.value)}
                      invalid={lastnameValid === valid.INVALID}
                      placeholder="Lastname"
                    >
                    </Input>
                    <Feedback
                      show={lastnameValid === valid.INVALID}
                      className="text-center mb-2"
                    >
                      Lastname is invalid
                    </Feedback>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input
                        inputMode="email"
                        defaultValue={email}
                        onFocus={() => setEmailValid(valid.NON_VALID)}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => checkEmailValid(e.target.value)}
                        invalid={emailValid === valid.INVALID}
                        placeholder="Email"
                    >
                    </Input>
                    <Feedback
                      show={emailValid === valid.INVALID}
                      className="text-center mb-2"
                    >
                      Email is invalid
                    </Feedback>
                  </Col>
                </Row>
                <Row className="custom-option">
                  <Col className="pr-3">
                    <Select
                      inputMode='numeric'
                      options={getOptions(1, 31)}
                      defaultValue={day}
                      onChange={onChangeDay}
                      onFocus={onFocusDay}
                      isSearchable={false}
                      className={dayValid === valid.INVALID && 'invalid'}
                    >
                      DD
                    </Select>
                    <Feedback
                      show={dayValid === valid.INVALID}
                      className="text-center mb-2"
                    >
                      Please select your birth day
                    </Feedback>
                  </Col>
                  <Col className="pl-3">
                    <Select
                      inputMode='numeric'
                      options={getOptions(1, 12)}
                      defaultValue={month}
                      onChange={onChangeMonth}
                      onFocus={onFocusMonth}
                      isSearchable={false}
                      className={monthValid === valid.INVALID && 'invalid'}
                    >
                      MM
                    </Select>
                    <Feedback show={monthValid === valid.INVALID} className="text-center mb-3">
                        Please select your birth month
                    </Feedback>
                  </Col>
                  <Col className="pl-3">
                    <Select
                      inputMode='numeric'
                      options={getOptions(2000, 1900, false)}
                      defaultValue={year}
                      onChange={onChangeYear}
                      onFocus={onFocusYear}
                      isSearchable={false}
                      className={yearValid === valid.INVALID && 'invalid'}
                    >
                      YYYY
                    </Select>
                    <Feedback show={yearValid === valid.INVALID} className="text-center mb-3">
                        Please select your birth year
                    </Feedback>
                  </Col>
                </Row>
                <Button className="btn btn-submit-form" onClick={onClickNext} type="submit">CONTINUE</Button>
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
        </Container>
      </div>
      <Facebook />
    </>
  )
}

export default Product;
