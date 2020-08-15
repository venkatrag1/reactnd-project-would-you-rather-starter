import React, {PureComponent} from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const insideQuestionCard = (CardContent) => {
  class CardWrapper extends PureComponent {

    render() {
    const {title, authorName, authorAvatarURL} = this.props;

      return (
      <Card className='container'>
        <Card.Title className='card-header'>{title}</Card.Title>
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
  return CardWrapper;
}

export default insideQuestionCard;
