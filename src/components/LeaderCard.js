import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';


class LeaderCard extends Component {
    render() {
        const {userName, userAvatarURL, numAnsweredQuestions, numCreatedQuestions, score} = this.props;
        return (
            <Card className='container'>
                <Row>
                <Col md={3}>
                    <Image src={userAvatarURL} className='card-img center align-middle' roundedCircle/>
                </Col>
                <Col md={6}>
                    <Card.Title>{userName}</Card.Title>
                    <Card.Body>
                    <Row>
                        Answered Questions: {numAnsweredQuestions}
                    </Row>
                    <Row>
                        Created Questions: {numCreatedQuestions}
                    </Row>
                    </Card.Body>
                </Col>
                <Col md={3}>
                    <Card className='container'>
                        <Card.Title className='card-header'>Score</Card.Title>
                        <Badge variant="info">{score}</Badge>
                    </Card>
                </Col>
                </Row>
            </Card>
        );
    }
}


export default LeaderCard;
