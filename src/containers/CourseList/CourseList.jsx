import React from 'react'
import Course from '../../components/Course/Course'
import './CourseList.scss'

const CourseList = (props) => {

  const { courses } = props;

  const renderCourseCards = () => courses.map((obj, index) => (
    <Course className="course_list__card" key={"Course" + (index + 1)} datatestid={`course-item-${index+1}`}
    courseName={obj.name}
    courseLocation={obj.location}
    courseDuration={obj.duration}
    coursePrice={obj.price}
    courseSummary={obj.summary}
    /> 
  ));

  return (
    <section className='course-list'>
      {renderCourseCards()}
    </section>
  )
}

export default CourseList