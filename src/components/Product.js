import React, { Component } from 'react'
import Slicica from './Slicica';
import { Container, Row, Col} from 'reactstrap';

var url = '';


export default class Product extends Component {

  constructor(props) {

    super(props);
    this.state = {
      category: '',
      proizvodi: [],
      modal: false
    }
    this.toggle = this.toggle.bind(this);

  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount = () => {
    

    if (this.props.match.params.category !== this.state.category) {
      this.setState({
        category: this.props.match.params.category
      });
    }

    url = '/product';

    fetch(url)
      .then(res => res.json())
      .then(proizvodi => {
        this.setState({
          proizvodi: proizvodi
        }
        );
      });
  }


  componentDidUpdate = () => {
    
    if (this.props.match.params.category !== this.state.category) {
      this.setState({
        category: this.props.match.params.category
      });
    }



  }


  
  render() {
    console.log(
      this.state.category
    );




    return (
      <div>
        <Container className="mb-2 mt-5" >
          
          <Row>

            <Col>
              {this.state.proizvodi.map(pro => {
                if (this.state.category !== undefined) {
                  if (pro.category === this.state.category) {
                    return <div className='col-3  my-2' style={{ float: "left" }}><Slicica  className='col-3' imageSrc={pro.imgSrc} category={pro.category} name={pro.name} description={pro.description} price={pro.price} /></div>

                  } if (this.state.category === 'sale') {
                    if (pro.sale) {
                      return <div className='col-3  my-2' style={{ float: "left" }}><Slicica className='col-3' imageSrc={pro.imgSrc} category={pro.category} name={pro.name} description={pro.description} price={pro.price} /></div>
                    }
                  }
                }
                else {
                  return <div className='col-3 my-2' style={{ float: "left" }}><Slicica className='col-3' imageSrc={pro.imgSrc} category={pro.category} name={pro.name} description={pro.description} price={pro.price} /></div>
                }
              })}
            </Col>


          </Row>


        </Container>

        
      </div>
    )
  }
}
