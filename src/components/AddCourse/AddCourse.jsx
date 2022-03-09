import React from 'react'
import { useState } from 'react';

const AddCourse = (props) => {
  const {handleRefresh} = props;
  const [greeting, setGreeting] = useState({
    createdBy: "",
    greeting: "",
    originCountry: ""
  })


  return (
    <div>AddCourse</div>
  )
}

export default AddCourse