import React,{useContext} from 'react';
import {ListGroup,ListGroupItem,Col} from 'reactstrap'
import { BrowserRouter  as Router , Route, Link  } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container,Row,CardHeader
} from 'reactstrap';
import {UserContext} from '../App'
import UpdateCourse from './UpdateCourse'
import Home from './Home'
const Course=({course,dispatching})=>
{
    
   // const {dispatcher}=useContext(UserContext);
    const functionality=useContext(UserContext);
    const handleclick=(e)=>
    {
        alert(course.id);
        e.preventDefault();
        functionality.dispatcher({type:"Delete",payload:course.id})
        console.log(functionality.AllCourse)
    }
return(
    <Container className="p-2">
    <Card color="light">
        <CardBody>
            <CardSubtitle className="p-2 justify-left">{course.id}</CardSubtitle>
            <CardText>{course.desc}</CardText>
            <Container>
                <Button onClick={(e)=>handleclick(e)}>DELETE</Button>
                <Button className="ml-3" tag="a" href={'/update-course/'+course.id} action >UPDATE</Button>  
            </Container>
        </CardBody>
    </Card>
    </Container>
)
}
export default Course;