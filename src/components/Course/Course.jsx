import React from 'react'
import"./Course.scss"

const Course = (props) => {
const {
  courseName,
  courseLocation,
  courseDuration,
  coursePrice,
  courseSummary,
  datatestid
} = props;

  return (
    <div className="card" data-testid= {datatestid}>
        <h1 className="card__name">{courseName}</h1>
        <p className="card__details"><span>Location: </span>{courseLocation}</p>
        <p className="card__details"><span>Duration: </span>{courseDuration}</p>
        <p className="card__details"><span>Cost: </span>£{coursePrice}</p>
        <p className="card__details"><span>Summary: </span>{courseSummary}</p>
    </div>
  )
}

export default Course