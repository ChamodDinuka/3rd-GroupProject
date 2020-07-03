import React,{Component} from 'react'
import {Form,Row,Col,Button} from 'react-bootstrap'
import firebase from '../../../firebase'

class Report extends Component{
    constructor(props){
        super(props)
        this.state={
            view:'false',
            report_type:'',
            description:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.view)
        var db=firebase.firestore()
        // Add a new document in collection "cities"
        db.collection("reports").add({
             view:this.state.view,
             report_type:this.state.report_type,
             description:this.state.description
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
    reportType=(e)=>{
        console.log(e.target.value)
        this.setState({
            report_type:e.target.value
        });
    }
    reportDescription=(e)=>{
        console.log(e.target.value)
        this.setState({
            description:e.target.value
        });
    }
    render(){
    return(
        <Form onSubmit={this.handleSubmit}>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Guide Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text"  />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Report Type
    </Form.Label>
    <Col sm={10}>
    <Form.Control as="select" onChange={this.reportType} defaultValue="Choose...">
        <option>...</option>
        <option>Cheating</option>
        <option>Unusual Behavior</option>
        <option>Other</option>
      </Form.Control>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={10}>
    <Form.Control as="textarea"  rows="3" onChange={this.reportDescription} />
    </Col>
  </Form.Group>
  <Button variant="danger" type="submit">Report</Button>
  </Form>
    );
    }
}
export default Report