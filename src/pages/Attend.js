import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import {db}from "../config/firebase_config."
import {collection,onSnapshot,addDoc} from "firebase/firestore"
import Table from '../components/Table3'
import { Modal, Button } from "react-bootstrap";
function Attend() {
    const StudentCollectionRef = collection(db, "Attendance")
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
    const [newAttendanceID, setNewAttendanceID] = useState("")
  const [newStudentid, setNewStudentid] = useState("")
  const [newCourseID, setNewCourseID] = useState("")
  const [newDate, setNewDate] = useState("")
  const [newStatus, setNewStatus] = useState("")
  const submitAttendance = async () => {
    try {
      await addDoc(StudentCollectionRef, {
        Attendanceid: newAttendanceID,
        Studentid: newStudentid,
        Courseid: newCourseID,
        Date:newDate,
        Status:newStatus
      })
    } catch (error) {
      console.error(error)
    }


  }

  return (
    <>
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
    <h2 className='text-center'>Attendance</h2>
   <button className='btn btn-warning' onClick={handleShow}>Add Attendance</button>
   
   </div>
   
   <div className='table d-flex justify-content-around bg-danger' style={{border:"1px solid rgb(228, 55, 83)",borderTopLeftRadius:"10px"}}>
    <h4 className='items'>AttendID</h4>
    <h4 className='items'>StudentID</h4>
    <h4 className='items'>CourseID</h4>
    <h4 className='items'>Date</h4>
    <h4 className='items'>Status</h4>
    <h4 className='items'>Edit</h4>
    <h4 className='items'>Delete</h4>

   
  
           <Modal show={show} onHide={handleClose} size="lg"  className='mt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Attendance</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex-wrap'>
                            <label style={{width:"30%"}}><h3>AttendanceID</h3>
                        <input type="text" name="title"  placeholder='Name' onChange={(e) => setNewAttendanceID(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>StudentID</h3>
                        <input type="text" name="title"  placeholder='StudentID'  onChange={(e) => setNewStudentid(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>CourseID</h3>
                        <input type="text" name="title" placeholder='Contact' onChange={(e) => setNewCourseID(e.target.value)}/>
                        </label>
                        <label style={{width:"30%"}}><h3>Date</h3>
                        <input type="date" name="title" placeholder='Contact' onChange={(e) => setNewDate(e.target.value)}/>
                        </label>
                          <label style={{width:"30%"}}><h3>Status</h3>
                        <input type="text" name="title" placeholder='Contact' onChange={(e) => setNewStatus(e.target.value)}/>
                        </label>
                        
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={submitAttendance}>
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> 
    
            
        </div>
  {studentList.map((student)=>{
    return   <Table attendance={student.Attendanceid} student={student.Studentid} id = {student.id} course={student.Courseid} date={student.Date} status = {student.Status} />
   })
   }
   </div>
   
   </div>
   
   
   </div>
   </div>
    </>
  )
}

export default Attend