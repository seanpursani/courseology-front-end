import React from 'react'
import AddCourse from '../../components/AddCourse/AddCourse'
import Nav from '../../components/Nav/Nav'
import Searchbar from '../../components/Searchbar/Searchbar'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomePage = () => {

  const [updated, setUpdated] = useState(true);

  const handleRefresh = () => {
    setUpdated(!setUpdated) 
  }

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route  path="/add-course" element={<AddCourse handleRefresh={handleRefresh}/>} />
        </Routes>
      </Router> 
    </>
  )
}

export default HomePage