import React from 'react'
import"./Course.scss"

const Course = (props) => {
const {
  courseName,
  courseLocation,
  courseDuration,
  coursePrice,
  courseSummary
} = props;

  return (
    <div className="card">
        <h1 className="card__name">{courseName}</h1>
        <p className="card__location"><span>Location: </span>{courseLocation}</p>
        <p className="card__duration"><span>Duration: </span>{courseDuration}</p>
        <p className="card__price"><span>Cost: </span>£{coursePrice}</p>
        <p className="card__summary"><span>Summary: </span>{courseSummary}</p>
    </div>
  )
}

export default Course