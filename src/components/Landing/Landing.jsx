import React from 'react'
import img from "../../assets/courseology.jpg"
import "./Landing.scss"

const Landing = () => {

  return (
    <div className='header'>
      <h1 className='header__title'>Welcome to Courseology</h1>
      <p className='header__text'>To get started select to add a brand new course or sort through the courses already on offer...</p>
      <img className="header__img" src={img} alt="Courseology" />
    </div>
  )
}

export default Landing