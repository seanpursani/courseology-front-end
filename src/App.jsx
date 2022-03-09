import './App.scss';
import AddCourse from '././components/AddCourse/AddCourse'
import Nav from '././components/Nav/Nav'
import HomePage from './containers/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";


const App = () => {
  
  const [courses, setCourses] = useState([]);
  const [updated, setUpdated] = useState(true);

  const handleRefresh = () => {
    setUpdated(!setUpdated) 
  }

  const getCourses = () => {
    fetch("http://localhost:8080/courses")
      .then(res => res.json())
      .then(json => setCourses(json))
      .catch(err => console.log(err))
      console.log(courses);
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
  <Router>
    <Nav />
    <Routes>
      <Route path="/add-course" element={<AddCourse handleRefresh={handleRefresh}/>} />
      <Route path="/Courseology" element={<HomePage courses={courses}/> } />
    </Routes>
  </Router> 
  );
}

export default App;
