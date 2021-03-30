import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
function Cards (){
 
    return (
        <div>
        <Card style={{marginTop:"25px",marginLeft: "270px",width:"710px"}}>
        <CardBody style={{textAlign:"-webkit-auto" ,padding:"30px",background:"#FFE3FA"}}>
        <table className="table col-md-6 mx-auto">
            <tbody style={{color:"blueviolet",}} >
              <tr>
                <td><b>Name</b> </td>
                :
                <td>AJ</td>
              </tr>
              <tr>
                <td><b>studentId</b></td>
                :
                <td>mca1</td>
              </tr>
              <tr>
                <td><b>department</b></td>
                :
                <td>mca</td>
              </tr>
              <tr>
                <td><b>Email</b></td>
                :
                <td>al@gmail.com</td>
              </tr>
            </tbody>
          </table>
            </CardBody> 
    </Card>
    
    


    </div>
    )
    
  }

export default Cards



// import React, { Component } from 'react';
// import { Container,Card, Button, CardTitle, CardText,CardBody, Row, Col } from 'reactstrap';
// class Users extends Component {
// constructor(props) {    super(props);
//     this.state = {
//       product: []
//     }
//   }
//   componentDidMount(){
//     fetch('http://localhost:5000/users/readgly', {
//       method: 'get',
//     }).then(res=>res.json())
//       .then(product=>{
//         return this.setState({ product });
//       })
//   }
// card(){
//   return this.state.product.map(data =>{
//     return (
      
// <Col lg="3">
       
// </Col>
//     )
//   });
// }
//   render() {
// return(
//   <Container fluid={true}>
//   <Row>
    
//     {this.card()}
//    </Row>
//    </Container>
// )
//   }
// }
// export default Users;