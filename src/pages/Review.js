import React from "react";
import { CollegeContext } from "../context/colleges";
import { CourseContext } from "../context/courses";
import { UserContext } from "../context/user";
import submitReview from "../strapi/submitReview";
import { useHistory } from "react-router-dom";

export default function Review() {
  const { colleges } = React.useContext(CollegeContext);
  const { courses } = React.useContext(CourseContext);
  const { user, showAlert } = React.useContext(UserContext);
  const [college, setCollege] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [teaching_env, setTeaching] = React.useState("");
  const [quality, setQuality] = React.useState("");
  const [lab, setLab] = React.useState("");
  const [comments, setComments] = React.useState("");
  const history = useHistory();

  const selectCollege = e => {
    const theCollege = colleges.find(
      college => e.target.value === college.name
    );
    setCollege(theCollege);
  };
  const selectCourse = e => {
    const theCourse = courses.find(
      course => e.target.value === course.course_name
    );
    setCourse(theCourse);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    showAlert({
      msg: "submitting review. please wait..."
    });

    let response = await submitReview({
      user,
      college,
      course,
      teaching_env,
      quality,
      lab,
      comments
    });
    if (response) {
      showAlert({
        msg: `your review has been submitted ${user.username}.`
      });
      history.push("/");
    } else {
      showAlert({
        msg: "there was an error. please try again...",
        type: "danger"
      });
    }
  };
  return (
    <form className="checkout-form form-control" onSubmit={handleSubmit}>
      <label htmlFor="college">College</label>
      <select
        name="college"
        className="form-control"
        value={college.name}
        onChange={selectCollege}
      >
        <option>Select the college you wish to review</option>
        {colleges.map(college => {
          return (
            <option key={college.id} value={college.name}>
              {college.name}
            </option>
          );
        })}
      </select>
      <p></p>
      <label htmlFor="course">course</label>
      <select
        name="course"
        className="form-control"
        value={course.course_name}
        onChange={selectCourse}
      >
        <option>Select the course you wish to review</option>
        {courses.map(course => {
          return (
            <option key={course.id} value={course.course_name}>
              {course.course_name}
            </option>
          );
        })}
      </select>
      <p></p>
      <label>Learning Environment : </label>
      <input
        type="input"
        placeholder="Rate between 1 and 5"
        value={teaching_env}
        onChange={e => setTeaching(e.target.value)}
      ></input>
      <p></p>
      <label>Quality of Teaching : </label>
      <input
        type="input"
        placeholder="Rate between 1 and 5"
        value={quality}
        onChange={e => setQuality(e.target.value)}
      ></input>
      <p></p>
      <label>Lab Facilities</label>
      <input
        type="input"
        placeholder="Rate between 1 and 5"
        value={lab}
        onChange={e => setLab(e.target.value)}
      ></input>
      <p></p>
      <label>Review : </label>
      <input
        type="input"
        placeholder="Write your heart out"
        value={comments}
        onChange={e => setComments(e.target.value)}
      ></input>
      <p></p>
      <button type="submit">Submit Review</button>
    </form>
  );
}
