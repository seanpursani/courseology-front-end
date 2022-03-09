import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar';
import CourseList from '../CourseList/CourseList';
import { useState } from "react";


const HomePage = (props) => {
  const {
    courses
  } = props;

  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const tempCourses = courses.filter(obj => {
      return obj.name.toLowerCase().includes(searchTerm)
      })
    if (searchTerm.length === 0) {
      setFilteredCourses(courses)
    } else {
      setFilteredCourses(tempCourses)
    }
  }

  return (
    <>
      <Searchbar handleSearch={handleSearch}/>
      <CourseList courses={filteredCourses}/>
    </>
  )
}

export default HomePage