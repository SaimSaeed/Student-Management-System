import React,{useState} from 'react'
import { db } from "../config/firebase_config."
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { Modal, Button } from "react-bootstrap";
function Table3(props) {

    const deleteCourse = async (id) => {

        const studentDoc = doc(db, "Attendance", id)
        await deleteDoc(studentDoc)
        


    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [updateAttendanceID, setUpdateAttendanceID] = useState("")
  const [updateStudentid, setUpdateStudentid] = useState("")
  const [updateCourseID, setUpdateCourseID] = useState("")
  const [updateDate, setUpdateDate] = useState("")
  const [updateStatus, setUpdateStatus] = useState("")
    const UpdateCourse = async (id) => {

        const CourseDoc = doc(db, "Attendance", id)
       
        await updateDoc(CourseDoc, {
            Attendanceid: updateAttendanceID,
            Studentid: updateStudentid,
            Courseid: updateCourseID,
            Date:updateDate,
            Status:updateStatus
         
        })}
  return (
    <div>





<div className='table d-flex justify-content-around'>
                <div className='items'>{props.attendance}</div>
                <div className='items'>{props.student}</div>
                <div className='items' >{props.course}</div>
                <div className='items' style={{overflow:"hidden"}}>{props.date}</div>
                <div className='items' style={{overflow:"hidden"}}>{props.status}</div>

                <button className='btn btn-primary' onClick={handleShow}>Edit</button>
                <button className='btn btn-danger' onClick={() => deleteCourse(props.id)}>Delete</button>



            </div>

            <Modal show={show} onHide={handleClose} size="lg"  className='mt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className='flex-wrap'>
                            <label style={{width:"30%"}}><h3>AttendanceID</h3>
                        <input type="text" name="title"  placeholder='Name' onChange={(e) => setUpdateAttendanceID(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>StudentID</h3>
                        <input type="text" name="title"  placeholder='StudentID'  onChange={(e) => setUpdateStudentid(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>CourseID</h3>
                        <input type="text" name="title" placeholder='Contact' onChange={(e) => setUpdateCourseID(e.target.value)}/>
                        </label>
                        <label style={{width:"30%"}}><h3>Date</h3>
                        <input type="date" name="title" placeholder='Contact' onChange={(e) => setUpdateDate(e.target.value)}/>
                        </label>
                          <label style={{width:"30%"}}><h3>Status</h3>
                        <input type="text" name="title" placeholder='Contact' onChange={(e) => setUpdateStatus(e.target.value)}/>
                        </label>
                        
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

export default Table3