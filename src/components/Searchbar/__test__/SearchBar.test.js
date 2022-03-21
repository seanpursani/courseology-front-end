import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbar from "../Searchbar";

const mockedHandleSearch = jest.fn()

describe("Add Input", () => {
  it('should render input element', async () => {
    //Arrange
    render(<Searchbar handleSearch={mockedHandleSearch}/>)
  
    //Act
    const inputElement = screen.getByPlaceholderText(/Search.../i)

    //Assert
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into the input box', async () => {
    //Arrange
    render(<Searchbar handleSearch={mockedHandleSearch}/>)
  
    //Act
    const inputElement = screen.getByPlaceholderText(/Search.../i)
    userEvent.click(inputElement)
    userEvent.type(inputElement, 'React')

    //Assert
    expect(inputElement.value).toBe('React')
  });
});