import React, { Component } from 'react';
import { Button, Container,Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class Korpa extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      proizvodi: []

    }

    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount = () => {
    this.setState({
      proizvodi: [{
        'imgSrc': './uploads/exqkkfexfmlxoyg.jpg',
        "name": 'Dobrivoje',
        'price': 230
      },
    {
      'imgSrc': './uploads/nykypmuscxucjer.jpg',
        "name": 'Milivoje',
        'price': 350
    }]
    })
  }

  render() {
    return (
      <div className=' fas fa-2x fa-shopping-cart' to='/' style={{ float: 'right' }} onClick={this.toggle}>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className='mx-auto mt-5' >
            <ModalHeader>
              <h1>ModalHeader</h1>
            </ModalHeader>
            <ModalBody>
              <Container>
              {this.state.proizvodi.map(pro => {
               return( <Row >
                  <Col><img src={pro.imgSrc} style={{width: 60, height:60}}/></Col>
                  <Col>{pro.name}</Col>
                  <Col>{pro.price}</Col>
                </Row>)
              })}
              </Container>
            </ModalBody>
            <ModalFooter>
              <h1>ModalFooter</h1>
            </ModalFooter>
          </Modal>
      </div>
    )
  }
}
