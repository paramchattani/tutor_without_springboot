import React,{useContext,useState} from 'react';
import {UserContext} from '../App'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const AddCourse=()=>{
    const [id,setid]=useState(0);
    const [desc,setdesc]=useState('');
    const coursefunctionality=useContext(UserContext);
const handleform=(e)=>
{
e.preventDefault();
const newcourse={id:id,desc:desc}
coursefunctionality.dispatcher({type:'Add',payload:newcourse})
console.log(coursefunctionality.AllCourse)
}
   
    //coursefunctionality.dispatcher({type:"Add",payload:})
    return (
    <Form >
        <FormGroup>
            <Label for="id">ID</Label>
            <Input type="text"  name="id" value={id} onChange={(e)=>setid(e.target.value)}/>
            </FormGroup>
            <FormGroup>
            <Label for="desc">COURSE-DESCRIPTION</Label>
            <Input type="textarea"  name="desc" value={desc} onChange={(e)=>setdesc(e.target.value)}/>
            </FormGroup>
        <Button onClick={e=>handleform(e)}>SUBMIT</Button>
    </Form>
    )
}
export default AddCourse;