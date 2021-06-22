import React,{useContext,useState,useEffect} from 'react';
import {UserContext} from '../App'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const UpdateCourse=(props)=>{
    useEffect(()=>{
        alert(props.match.params.id)
    },[])
    const id=parseInt(props.match.params.id);
    const [desc,setdesc]=useState('')
    const coursefunctionality=useContext(UserContext);
const handleform=(e)=>
{
    
e.preventDefault();

const newcourse={id,desc}
coursefunctionality.dispatcher({type:"Delete",payload:id})
coursefunctionality.dispatcher({type:"Update",payload:newcourse})

console.log(coursefunctionality.AllCourse)
}
    
    //coursefunctionality.dispatcher({type:"Add",payload:})
    return (
    <Form >
            <FormGroup>
            <Label for="desc">COURSE-DESCRIPTION</Label>
            <Input type="textarea" placeholder="enter here" name="desc" value={desc} onChange={(e)=>setdesc(e.target.value)}/>
            </FormGroup>
        <Button onClick={(e)=>handleform(e)}>SUBMIT</Button>
    </Form>
    )
}
export default UpdateCourse;