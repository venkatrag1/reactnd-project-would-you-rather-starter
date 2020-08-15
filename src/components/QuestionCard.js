import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const withQuestionCard = (CardContent) => {
    class CardWrapper extends PureComponent {
        render() {
            const {authorName, authorAvatarURL} = this.props;
            return (
                <Card className='container'>
                    <Card.Title className='card-header'>{authorName} asks:</Card.Title>
                    <Row>
                    <Col md={4}>
                        <Image src={authorAvatarURL} className='card-img center align-middle' roundedCircle/>
                    </Col>
                    <Col md={8}>
                        <CardContent {...this.props} />
                    </Col>
                    </Row>
                </Card>
            );
        }
    }

    function mapStateToProps({ users, questions }, {qid}) {
        const question = questions[qid];
        const author = users[question.author];

        return {
            authorName: author.name,
            authorAvatarURL: author.avatarURL,
        };
    }

    return connect(mapStateToProps)(CardWrapper);
}

export default withQuestionCard;
