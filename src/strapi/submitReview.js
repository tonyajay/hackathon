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

  let reviewTotal = 0;
  for (let i = 0; i < college.reviews.length; i++) {
    reviewTotal += college.reviews[i].totalavg;
  }

  console.log(reviewTotal);
  const collegeAvg = reviewTotal / college.reviews.length;
  console.log(collegeAvg);
  await axios
    .put(
      `${url}/colleges/${college.id}`,
      {
        totalavg: collegeAvg
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
