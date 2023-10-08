import React ,{useState,useEffect}from 'react'
import Navbar from '../components/Navbar'
import {db}from "../config/firebase_config."
import {collection,onSnapshot,addDoc} from "firebase/firestore"
import Table from '../components/Table'
import { Modal, Button } from "react-bootstrap";
function Students() {

    const StudentCollectionRef = collection(db, "Students")
    const [studentList, setStudentList] = useState([])
    const getStudentList = async () => {
      //Read the Data
        onSnapshot(StudentCollectionRef, (snapshot) => {
          setStudentList(snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          
          })))
        })
        
      
  
    }
  
    useEffect(() => {
  
      getStudentList()
  
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newName, setNewName] = useState("")
  const [newStudentid, setNewStudentid] = useState("")
  const [newContact, setNewContact] = useState("")

  const submitStudent = async () => {
    try {
      await addDoc(StudentCollectionRef, {
        Name: newName,
        Studentid: newStudentid,
        Contact: newContact,
    
     

      })
    } catch (error) {
      console.error(error)
    }


  }
  
  return (
    <div>
    <div className='notes-container'>
        <div style={{paddingLeft:"85%"}}>
   
   </div>
       
         <div  className="notes-box"> 
    <div className='notes-left'>
   <Navbar/>
   </div>
   <div className='notes-right'>
   <div className='mt-2 mb-2 d-flex justify-content-around'>
    <h4 className='text-center'>Students Details</h4>
   <button className='btn btn-warning' onClick={handleShow}>Add Student</button>
   
   </div>
   
   <div className='table d-flex justify-content-around bg-danger' style={{border:"1px solid rgb(228, 55, 83)",borderTopLeftRadius:"10px"}}>
    <h4 className='items'>Name</h4>
    <h4 className='items'>ID</h4>
    <h4 className='items'>Contact</h4>
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
                        <label style={{width:"30%"}}><h3>StudentID</h3>
                        <input type="text" name="title"  placeholder='StudentID'  onChange={(e) => setNewStudentid(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Contact</h3>
                        <input type="text" name="title" placeholder='Contact' onChange={(e) => setNewContact(e.target.value)}/>
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
  {studentList.map((student)=>{
    return   <Table name={student.Name} id={student.id}  studentid={student.Studentid} desc={student.Contact} />
   })
   }
   </div>
   
   </div>
   
   
   </div>
   </div>
   
   
  )
}

export default Students