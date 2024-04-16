 
// import React from "react";
// import { render, cleanup, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
 
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "../../Redux/store";
// import CreateFlashCard from "../Create_flashcard/CreateFlashCard";

// const data = (component) =>
//   render(
//     <BrowserRouter>
//       <Provider store={store}>{component}</Provider>
//     </BrowserRouter>
//   );

// describe("CreateFlashCard", () => {
//   // Call the render function before each test
//   beforeEach(() => {
//     data(<CreateFlashCard />);
//   });

//   afterEach(() => {
//     cleanup();
//   });


//   test("should be group name", () => {
//     const groupname = screen.getByLabelText(/group name/i);
//     expect(groupname).toBeInTheDocument();
//   });

//   test("should be description", () => {
//     const description = screen.getByLabelText(/add description/i);
//     expect(description).toBeInTheDocument();
//   });

//   // test("should be image of group", () => {
//   //   // Update text matcher to be more flexible
//   //   const groupimage = screen.getByText((content, element) =>
//   //     content === "Upload Image" && element.tagName.toLowerCase() === "button"
//   //   );
//   //   expect(groupimage).toBeInTheDocument();
//   // });

//   // test("should be term", () => {
//   //   const term = screen.getByLabelText(/enter term/i);
//   //   expect(term).toBeInTheDocument();
//   // });

//    test("should be term", () => {
//     const termLabel = screen.getByText("Enter Term*", { selector: "label" });
//     expect(termLabel).toBeInTheDocument();
//   });


//    test("should be term image", () => {
//   const termImage = screen.getByText("Select Image", { selector: "span.text-blue-700.font-bold" });
//   expect(termImage).toBeInTheDocument();
// });


//   test("should be addmore button", () => {
//     const addmorebutton = screen.getByText(/add more/i);
//     expect(addmorebutton).toBeInTheDocument();
//   });

//   test("should be create button", () => {
//     // Update role matcher to be more flexible
//     const create = screen.getByRole("button", { name: /create/i });
//     expect(create).toBeInTheDocument();
//   });
// });





import React from "react";
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
 
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import CreateFlashCard from "../Create_flashcard/CreateFlashCard";

const data = (component) =>
  render(
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  );

describe("CreateFlashCard", () => {
  // Call the render function before each test
  beforeEach(() => {
    data(<CreateFlashCard />);
  });

  afterEach(() => {
    cleanup();
  });

  test("should be group name", () => {
    const groupname = screen.getByLabelText(/group name/i);
    expect(groupname).toBeInTheDocument();
  });

  test("should be description", () => {
    const description = screen.getByLabelText(/add description/i);
    expect(description).toBeInTheDocument();
  });

  test("should be term", () => {
    const termLabel = screen.getByText(/enter term/i);
    expect(termLabel).toBeInTheDocument();
  });
  

  test("should be term image", () => {
    const termImage = screen.getByText("Select Image", { selector: "span.text-blue-700.font-bold" });
    expect(termImage).toBeInTheDocument();
  });

  test("should be addmore button", () => {
    const addmorebutton = screen.getByText(/add more/i);
    expect(addmorebutton).toBeInTheDocument();
  });

  test("should be create button", () => {
    const create = screen.getByRole("button", { name: /create/i });
    expect(create).toBeInTheDocument();
  });
});

