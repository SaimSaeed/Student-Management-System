import React,{useState} from 'react'
import { db } from "../config/firebase_config."
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { Modal, Button } from "react-bootstrap";

   
    
    


function Table2(props) {

    const deleteCourse = async (id) => {

        const studentDoc = doc(db, "Courses", id)
        await deleteDoc(studentDoc)
        


    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [updateName, setUpdateName] = useState("")
    const [updateCode, setUpdateCode] = useState("")
    const [updateDescription, setUpdateDescription] = useState("")

  

    const UpdateCourse = async (id) => {

        const CourseDoc = doc(db, "Courses", id)
       
        await updateDoc(CourseDoc, {
          Name: updateName,
          Code: updateCode,
          Description: updateDescription,
         
        })}
  return (
    <div>

<div className='table d-flex justify-content-around'>
                <div className='items'>{props.name}</div>
                <div className='items'>{props.code}</div>
                <div className='items' style={{overflow:"hidden"}}>{props.desc}</div>
                <button className='btn btn-primary' onClick={handleShow}>Edit</button>
                <button className='btn btn-danger' onClick={() => deleteCourse(props.id)}>Delete</button>



            </div>

            <Modal show={show} onHide={handleClose} size="lg"  className='mt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex-wrap'>
                            <label style={{width:"30%"}}><h3>Name</h3>
                        <input type="text" name="title"  placeholder='Title' onChange={(e) => setUpdateName(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Code</h3>
                        <input type="text" name="title"  placeholder='Detail'  onChange={(e) => setUpdateCode(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Description</h3>
                        <input type="text" name="title"  placeholder='Title'  onChange={(e) => setUpdateDescription(e.target.value)}/>
                        </label>
                        <br/>
                    
                        
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => UpdateCourse(props.id)}>
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

      



    </div>
  )
}

export default Table2