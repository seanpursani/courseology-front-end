import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "./AddCourse.scss"

const AddCourse = (props) => {
  const {handleRefresh} = props;
  const [course, setCourse] = useState({
    name: "",
    location: "",
    duration: "",
    price: null,
    summary: ""
  })

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://courseology.nw.r.appspot.com/course', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
     e.target.reset();
     handleRefresh();
     navigate("/courseology");
  }


  return (
    <div className="log-form">
      <h2>Add A New Course</h2>
      <form className="log-form__input-fields" onSubmit={handleSubmit}>
        <input type="text" placeholder="course name" onInput={(e) => setCourse({ ...course, name: e.target.value })} />
        <input type="text" placeholder="course location" onInput={(e) => setCourse({ ...course, location: e.target.value })} />
        <input type="text" placeholder="course duration" onInput={(e) => setCourse({ ...course, duration: e.target.value })} />
        <input type="text" placeholder="course price" onInput={(e) => setCourse({ ...course, price: e.target.value })} />
        <input type="text" placeholder="course summary" onInput={(e) => setCourse({ ...course, summary: e.target.value })} />
        <div className='btn-wrapper'>
          <Link to="/courseology">
            <button className="btn">Cancel</button>
          </Link>
          <button type="submit" className="btn">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default AddCourse