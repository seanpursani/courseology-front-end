import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = (props) => {

  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/courseology">
        Courses
      </Link>
      <Link className="nav-menu__item" to="/add-course">
        Add Course
      </Link>
    </div>
  )
}

export default Nav
