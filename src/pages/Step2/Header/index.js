import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgLogo from '../../../images/logo.png';
import './style.scss';

export const HeaderTop = () => (
    <div className="header-top">
        <Container>
            <Row className="d-flex box">
                <Col xs={3} sm={3} className="align-self-center logo">
                    <img src={imgLogo} alt="makescents" />
                </Col>
            </Row>
        </Container>
    </div>
);

const Header = () => {
    return (
        <header className="header">
            <HeaderTop />
        </header>
    );
};

export default Header;
