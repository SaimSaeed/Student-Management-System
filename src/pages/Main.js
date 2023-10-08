import React ,{useState,useEffect}from 'react'
import Navbar from '../components/Navbar'
import {db}from "../config/firebase_config."
import {collection,onSnapshot} from "firebase/firestore"
function Main() {

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



<div className=' container box d-flex justify-content-left mt-2'>

  <div className='box1 text-center  bg-danger' style={{width:'35%',height:"20vh"}}>
  <b>Number of Students:{studentList.length}</b>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
  </div>
  <div className='box2 text-center bg-primary'style={{width:'35%',height:"20vh"}}><b>Number of Courses:{CourseList.length}</b> 
  <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="white" class="bi bi-journal-bookmark" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>

  </div>
 
</div>
</div>

</div>


</div>
</div>


    </>
   
  )
}

export default Main