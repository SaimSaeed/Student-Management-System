import React ,{useState}from 'react'
import { db } from "../config/firebase_config."
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { Modal, Button } from "react-bootstrap";
function Table(props) {
    const deleteStudent = async (id) => {

        const studentDoc = doc(db, "Students", id)
        await deleteDoc(studentDoc)
        


    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [updateName, setUpdateName] = useState("")
    const [updateStudentid, setUpdateStudentid] = useState("")
    const [updateContact, setUpdateContact] = useState("")

  

    const UpdateStudent = async (id) => {

        const StudentDoc = doc(db, "Students", id)
       
        await updateDoc(StudentDoc, {
          Name: updateName,
          ID: updateStudentid,
          Contact: updateContact,
         
        })
    
      }

    return (
        <>

            <div className='table d-flex justify-content-around'>
                <div className='items'>{props.name}</div>
                <div className='items'>{props.studentid}</div>
                <div className='items'>{props.desc}</div>
                <button className='btn btn-primary' onClick={handleShow}>Edit</button>
                <button className='btn btn-danger' onClick={() => deleteStudent(props.id)}>Delete</button>



            </div>

            <Modal show={show} onHide={handleClose} size="lg"  className='mt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex-wrap'>
                            <label style={{width:"30%"}}><h3>Name</h3>
                        <input type="text" name="title"  placeholder='Title' onChange={(e) => setUpdateName(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>ID</h3>
                        <input type="text" name="title"  placeholder='Detail'  onChange={(e) => setUpdateStudentid(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Contact</h3>
                        <input type="text" name="title"  placeholder='Title'  onChange={(e) => setUpdateContact(e.target.value)}/>
                        </label>
                        <br/>
                    
                        
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => UpdateStudent(props.id)}>
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

        </>
    )
}

export default Table