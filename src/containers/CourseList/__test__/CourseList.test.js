import { render, screen } from "@testing-library/react";
import CourseList from "../CourseList";

const mockCourses = [ 
  {
    id: 1,
    name: 'React',
    location: 'London',
    duration:'12 Weeks',
    price: 200,
    summary: "Learn React"
  },
  {
    id: 2,
    name: 'Java',
    location: 'Bristol',
    duration:'16 Weeks',
    price: 500,
    summary: "Learn Java"
  },
  {
    id: 3,
    name: 'Jest',
    location: 'Manchester',
    duration:'1 Month',
    price: 750,
    summary: "Learn Testing"
  }
]

beforeEach(() => {
  render(<CourseList courses={mockCourses}/>)
})

describe("Courses are rendering correctly", () => {

  it("should fetch and render course items", async () => {
    //Act
    const courseElements = await screen.findAllByTestId(/course-item/i);

    //Assert
    expect(courseElements.length).toBe(3);
  });
});