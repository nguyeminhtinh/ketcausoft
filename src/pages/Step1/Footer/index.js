import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs md="10">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a
                                    className="nav-link color-private text-uppercase"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://0.0.0.0:3000"
                                >
                                    Terms and Conditions.
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link color-private text-uppercase"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://0.0.0.0:3000"
                                >
                                    Privacy Policy.
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs md="12">
                        <p className="text-justify info color-private">
                            The information that you supply on this website is handled by giftcardgiveaway.com.au on behalf of AGC Promotions Pty Ltd - (ABN 96 617 236 898) and EMBR Group Pty Ltd - (ABN 274 178 375 87) in a manner conforming with the Privacy Act 1988. By completing your details above to enter our prize draw you consent to giftcardgiveaway.com.au on behalf of AGC Promotions Pty Ltd and EMBR Group Pty Ltd and its advertisers and sponsors (who may be outside of Australia, Including, but not limited to, USA, EU, NZ, India and the Philippines) using your email address to deliver you information and promotional material concerning third party offers. You also consent for us to supply your contact information and survey responses to our prize sponsors so that they may use them to contact you via email, telephone or post. By submitting your details above and selecting an offer from our survey, you expressly consent for that entity to contact you on the details provided. giftcardgiveaway.com.au on behalf of AGC Promotions Pty Ltd and EMBR Group Pty Ltd collects, holds, uses and/or disclose your personal information for the purposes of carrying on our business and we may also disclose your personal information to our partners, who may then use or disclose your personal information to third parties for their general business purposes. These ‘general business purposes’ include, but are not necessarily limited to, purposes such as data matching, verification, marketing, account management, collections and analytics. You agree that giftcardgiveaway.com.au on behalf of AGC Promotions Pty Ltd and EMBR Group Pty Ltd can use your details for an indefinite period or until you notify us or opt out from receiving other offers. Trademarks, logos, brands and images that appear on this website are not property of AussieGiftCard.com, AGC Promotions Pty Ltd or EMBR Group Pty Ltd and are property of their respective owners. AussieGiftCard.com, AGC Promotions Pty Ltd and EMBR Group Pty Ltd does receive marketing fees from all advertisers including any financial institutions. You should always read the terms and conditions and/or product disclosure statement of these advertisers on their respected websites. By completing your details for the draw you release AussieGiftCard.com, AGC Promotions Pty Ltd and EMBR Group Pty Ltd from any consequences or outcomes relating to the sharing of your data and then subsequent interactions or transactions between you and any of our advertisers, sponsors or 3rd party who may have contacted you.
                        </p>
                        <p className="sign text-center color-private">POWERED By EMBR.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
