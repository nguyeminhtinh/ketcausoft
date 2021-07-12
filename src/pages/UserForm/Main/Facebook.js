import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import like from '../../../images/like.png';
import hinh1 from '../../../images/hinh111.png';
import hinh2 from '../../../images/hinh112.png';
import hinh3 from '../../../images/hinh13.png';
import hinh4 from '../../../images/hinh14.png';
import hinh5 from '../../../images/hinh15.png';
import hinh6 from '../../../images/hinh16.png';
import './style.scss';

const data = [
    {
      avatar: hinh1,
      name: 'Peter Yang',
      comment: 'Didn’t you hold a similar thing last year from what i remember?',
      time: '1 Hour ago'
    },
    {
      avatar: hinh2,
      name: 'Martin Staten',
      comment: 'Hey Amelia, you already played?',
      time: '49 minutes ago'
    },
    {
      avatar: hinh3,
      name: 'Lana Farber',
      comment: 'Cool, hope i win',
      time: '41 minutes ago'
    },
    {
      avatar: hinh4,
      name: 'James Carson',
      comment: 'I tried to play again but they rejected me because I already won! haha. Oh well.. worth a try:D',
      time: '35 minutes ago'
    },
    {
      avatar: hinh5,
      name: 'Carol Harrison',
      comment: 'Aaaaaah, wanna win toooooooo',
      time: '22 minutes ago'
    },
    {
      avatar: hinh6,
      name: 'Abd Latif',
      comment: 'A friend of mine won an iPhone last time, sent me this pic...',
      time: '19 minutes ago'
    }
];

const Facebook = () => {
    return (
        <div className="box-facebook">
            <Container>
                <Row className="box-action-fb">
                    <Col md={12} className="">
                    <ul className="list-action">
                        <li><span className="like-btn">Like</span></li>
                        <li><span className="like-btn">Comment</span></li>
                        <li><span className="like-btn">Share</span></li>
                        <li><span className="like-btn">Delete</span></li>
                    </ul>
                    </Col>
                </Row>
                <Row className="">
                    <Col md={12}>
                    <div className="space-between">
                        <p><img src={like} alt="" /><Alert.Link href="#">David D</Alert.Link>, <Alert.Link href="#">Cindy Jones</Alert.Link>, 
                        <Alert.Link href="#"> Jeff Daniels</Alert.Link> and 3587 others like this.</p>
                        <span>50 of 56563</span>
                    </div>
                    </Col>
                </Row>
                <Row className="box-comment">
                    <Col md={12} className="list-comment">
                    <ul className="list-comment">
                        {data.map((item, index) => (
                        <li className="item-comment" key={index}>
                            <div className="box-avatar">
                            <img src={item.avatar} alt=""/>
                            </div>
                            <div className="box-content-comment">
                            <h5>{item.name}</h5>
                            <p>{item.comment}</p>
                            <div>
                                <span className="like-btn">Like</span>
                                <span>{item.time}</span>
                            </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Facebook;
