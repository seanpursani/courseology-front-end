import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./AddCourse.scss"
import { type } from '@testing-library/user-event/dist/type';
import { number } from 'yup';

const AddCourse = (props) => {

  let navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: 'onSubmit' 
  });

  const {handleRefresh} = props;

  const [course, setCourse] = useState()

  const onSubmit = (data) => {
    setCourse(JSON.stringify(data))
    alert(course)
    // fetch('https://courseology.nw.r.appspot.com/course', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(course)
    // })
    // .then((response) => response.json())
    // .then((json => console.log(json)))
    // .catch(err => console.log(err))
    //  handleRefresh();
    //  navigate("/courseology");
  };

  return (
    <div className="log-form">
      <h2>Add A New Course</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text" 
          placeholder="course name" 
          {...register("name", {
            required: "Please enter a course name"
          })} 
        />
        {errors.name && <p className='log-form__error'>{errors.name.message}</p>}
        <input 
          type="text" 
          placeholder="course location" 
          {...register("location", {
            required: "Enter a course location"
          })} 
        />
        {errors.location && <p className='log-form__error'>{errors.location.message}</p>}
        <input 
          type="text" 
          placeholder="course duration" 
          {...register("duration", {
            required: "Enter a course duration"
          })} 
        />
        {errors.duration && <p className='log-form__error'>{errors.duration.message}</p>}
        <input 
          type="text" 
          placeholder="course price" 
          {...register("price", {
            pattern: { 
              value: /^[0-9]*$/, 
              message: "Enter a number"
            },
            required: "Enter a valid course price"
          })} 
        />
        {errors.price && <p className='log-form__error'>{errors.price.message}</p>}
        <input 
          type="text" 
          placeholder="course summary" 
          {...register("summary", {
            required: "Enter a course summary"
          })} 
        />
        {errors.summary && <p className='log-form__error'>{errors.summary.message}</p>}
        <div className='btn-wrapper'>
          <Link to="/courseology">
            <button type="submit" className="btn">Cancel</button>
          </Link>
          <button type="submit" className="btn">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default AddCourse