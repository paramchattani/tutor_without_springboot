import React,{useReducer,useEffect } from 'react'
import './App.css';
import {Row,Col,Container,ListGroup,ListGroupItem} from 'reactstrap'
import Header from './components/Header'
import Home from './components/Home'
import Menus from './components/Menus'
import ViewCourses from './components/ViewCourses'
import { BrowserRouter  as Router , Route, Link  } from "react-router-dom";
import AddCourse from './components/AddCourse'
import UpdateCourse from './components/UpdateCourse'
import User from './components/User'


const Apreducer=(state,action)=>
{
  switch(action.type)
  {
    case 'Delete':
      return {...state,course:state.course.filter(item=>item.id!==action.payload)}
      case 'Update':
        return {...state,course:[action.payload,...state.course]}
        case 'Add':
          return {...state,course:[action.payload,...state.course]}
        default:
      return state
  }
}
//first step is to create a userconetxt
//this is provider and it must wrap child components to make them availavble with this valuwe b
const initialcourse={
  course:[{id:121,desc:"CORE JAVA"},
{id:100,desc:"React js"},
{id:200,desc:"Machine Learning "}]
}
export const UserContext=React.createContext();
function App() {
  useEffect(()=>{<User/>},[]);
 const [state,dispatch]=useReducer(Apreducer,initialcourse)
 //courses has current state and reducer method takes in current state and action and return new state that becomes current state and is stored in courses as of this example 
  return (
    
      <UserContext.Provider value={{AllCourse:state.course,dispatcher:dispatch}}>
     <Container>
      <Header/>
       <Row>
         <Col md={3}>
           <Menus/>
         </Col>
         <Col md={7}>
           <Router>
         <Route path="/" component={Home} exact/>
         <Route path="/view-courses" component={ViewCourses} exact/>
         <Route path="/add-course" component={AddCourse} exact/>
         <Route path={`/update-course/:id`} component={UpdateCourse} exact/>
        {/* <Route path="/contact-us" co  mponent={Contactus} exact/>*/}
        </Router>
         </Col>
       </Row>
     </Container>
     </UserContext.Provider>
    
  );
}

export default App;
