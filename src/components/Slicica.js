import React, { Component } from 'react'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg,
    Button , Modal, ModalHeader, ModalBody, ModalFooter, Jumbotron,
    Container, Row, Col
} from 'reactstrap';
var o = '';
export default class Slicica extends Component {
    constructor(props){
super(props);
this.state = {
    modal: false
}
this.toggle = this.toggle.bind(this);

}
toggle() {
this.setState({
  modal: !this.state.modal
});
}

    render() {
        if (this.props.category !== 'lingerie') {
            o = 'uploads/' + this.props.imageSrc;
        } else {
            o = '../uploads/' + this.props.imageSrc;
        }

        console.log(this.props.description);
        return (
            <div>

                <Card  onClick={this.toggle} >
                    <CardSubtitle>
                    <CardImg top height="100%"
                        src={o} alt={this.props.name} />
                        </CardSubtitle>
                    <CardBody>
                        <CardTitle ><p style={{float: 'left'}}>{this.props.name}</p><p style={{float: 'right'}}>{this.props.price}€</p></CardTitle>
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className='mx-auto mt-5' size='lg'>
                    <ModalHeader toggle={this.props.toggle} className='mx-auto'><div >{this.props.name}</div></ModalHeader>
                    <ModalBody>
                            <div className='my-auto px-auto py-auto' style={{float: 'right'}}><img src={o} style={{height: 450, width: 380}} /></div>
                            <Container>
                                <Row>
                                    <Col xs='3'>
                                        <h5>Size </h5>
                                    </Col>
                                    <Col xs='2'><Button>L</Button></Col>
                                    <Col xs='2'><Button>M</Button></Col>
                                    <Col xs='2'><Button>S</Button></Col>
                                    <Col xs='2`'><Button>Xl</Button></Col>
                                    <Col></Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <p>{this.props.description}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <h4><strong>{this.props.price}€</strong></h4>
                                    </Col>
                                    </Row>
                                <Row>
                                    <Col>
                                        <Button>-</Button>
                                    </Col>
                                    <Col>
                                    <input type="number"  value="1" />
                                    </Col>
                                    <Col>
                                        <Button>+</Button>
                                    </Col>
                                </Row>
                            </Container>

          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Add to cart</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
