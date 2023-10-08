import React,{useState,useEffect} from 'react'
import Table from '../components/Table2'

import Navbar from '../components/Navbar'
import {db}from "../config/firebase_config."
import {collection,onSnapshot,addDoc} from "firebase/firestore"
import { Modal, Button } from "react-bootstrap";

function Course() {


    const CourseCollectionRef = collection(db, "Courses")
    const [CourseList, setCourseList] = useState([])
    const getCourseList = async () => {
      //Read the Data
        onSnapshot(CourseCollectionRef, (snapshot) => {
          setCourseList(snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          
          })))
        })
        
      
  
    }
  
    useEffect(() => {
  
      getCourseList()
  
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newName, setNewName] = useState("")
  const [newCode, setNewCode] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const submitStudent = async () => {
    try {
      await addDoc(CourseCollectionRef, {
        Name: newName,
        Code: newCode,
        Description: newDescription,
    
     

      })
    } catch (error) {
      console.error(error)
    }


  }
  return (
    <div>
    <div>
    <div className='notes-container'>
        <div style={{paddingLeft:"85%"}}>
   
   </div>
       
         <div  className="notes-box"> 
    <div className='notes-left'>
   <Navbar/>
   </div>
   <div className='notes-right'>
   
   <div className=' mt-2 mb-2 d-flex justify-content-around'>
    <h4 className='text-center'>Course Details</h4>
   <button className='btn btn-warning' onClick={handleShow}>Add Course</button>
   
   </div>
   <div className='table d-flex justify-content-around bg-danger' style={{border:"1px solid rgb(228, 55, 83)",borderTopLeftRadius:"10px"}}>
    <h4 className='items'>Name</h4>
    <h4 className='items'>Code</h4>
    <h4 className='items '>Desc</h4>
    <h4 className='items'>Edit</h4>
    <h4 className='items'>Delete</h4>
   
    
    <Modal show={show} onHide={handleClose} size="lg"  className='mt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex-wrap'>
                            <label style={{width:"30%"}}><h3>Name</h3>
                        <input type="text" name="title"  placeholder='Name' onChange={(e) => setNewName(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Code</h3>
                        <input type="text" name="title"  placeholder='Code'  onChange={(e) => setNewCode(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Description</h3>
                        <input type="text" name="title" placeholder='Description' onChange={(e) => setNewDescription(e.target.value)}/>
                        </label>
                        
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={submitStudent}>
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            
        </div>
  {CourseList.map((student)=>{
    return   <Table name={student.Name} id={student.id}  code={student.Code} desc={student.Description} />
   })
   }
   </div>
   
   </div>
   
   
   </div>
   </div>










    </div>
  )
}

export default Course