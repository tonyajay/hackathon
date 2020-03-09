import axios from "axios";
import url from "../utils/URL";

async function submitReview({
  user,
  college,
  course,
  teaching_env,
  quality,
  lab,
  comments
}) {
  const totalavg =
    (parseInt(teaching_env) + parseInt(quality) + parseInt(lab)) / 3;
  console.log(
    user,
    college,
    course,
    teaching_env,
    quality,
    lab,
    comments,
    totalavg
  );
  const data = {
    college,
    course,
    teaching_env: parseInt(teaching_env),
    quality: parseInt(quality),
    lab: parseInt(lab),
    comments,
    totalavg
  };
  const response = await axios
    .post(`${url}/reviews`, data, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .catch(error => console.log(error));
  const reviewTotal =
    college.reviews.reduce((acc, obj) => acc + obj.totalavg, 0) + totalavg;
  console.log(reviewTotal);
  console.log(college.reviews);
  const collegeAvg = reviewTotal / (college.reviews.length + 1);
  console.log(collegeAvg);
  await axios
    .put(
      `${url}/colleges/${college.id}`,
      {
        totalavg: collegeAvg * 100
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    )
    .catch(error => console.log(error));
  return response;
}
export default submitReview;
