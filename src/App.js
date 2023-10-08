import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Main from './pages/Main';
import Students from './pages/Students';
import Course from './pages/Course';
import Attend from './pages/Attend';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route exact path='/' element= {<Main/>}/>
  <Route exact path='/students' element= {<Students/>}/>
  <Route exact path='/course' element= {<Course/>}/>
  <Route exact path='/attend' element= {<Attend/>}/>


  

</Routes>



</BrowserRouter>
    </>
  );
}

export default App;
