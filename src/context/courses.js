import React from "react";
import Axios from "axios";
import url from "../utils/URL";

export const CourseContext = React.createContext();

export default function CourseProvider({ children }) {
  const [courses, setCourse] = React.useState([]);
  Axios.get(`${url}/courses`).then(response => {
    setCourse(response.data);
  });
  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
}
