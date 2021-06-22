import React,{useContext} from 'react'
import {UserContext} from '../App'
import Course from './Course'
const ViewCourses=()=>
{
    
    const {AllCourse}=useContext(UserContext);
    const {dispatcher}=useContext(UserContext);
   return (
       <>
    {
        AllCourse.map((item)=><Course key={item.id} course={item} dispatching={dispatcher}/>)
    }
    </>
    )
}
export default ViewCourses;
