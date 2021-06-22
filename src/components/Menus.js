import React from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'
const Menus=()=>{
    return(
<ListGroup>
    <ListGroupItem tag="a" href="/" action>
    HOME
    </ListGroupItem>
    <ListGroupItem tag="a" href="/add-course" action>
        ADD COURSE
    </ListGroupItem>
    <ListGroupItem tag="a" href="/view-courses" action>
        VIEW COURSES 
    </ListGroupItem>
    <ListGroupItem tag="a" href="/contact-us" action>
        CONTACT US
    </ListGroupItem>
</ListGroup>
)
}
export default Menus;