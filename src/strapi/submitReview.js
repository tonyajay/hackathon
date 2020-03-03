// submit review
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
  const totalavg = (teaching_env + quality + lab) / 3;
  console.log(user, college, course, teaching_env, quality, lab, comments);
  const data = {
    college,
    course,
    teaching_env,
    quality,
    lab: lab,
    comments,
    totalavg
  };
  const response = await axios({
    method: "POST",
    url: `${url}/reviews`,
    data
  })
    /* ,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    } */
    .catch(error => console.log(error));

  // const sum = key => reduce((a, b) => a + (b[key] || 0), 0);
  // const newlist = { ...[college.reviews] };

  // const reviewTotal = newlist.sum("totalavg");
  let avg = 0;
  const reviewTotal = college.reviews.forEach(
    review => (avg += review.totalavg)
  );
  console.log(avg);
  const id = college.id;
  const collegeAvg = avg / college.reviews.length;
  console.log(collegeAvg);
  await axios
    .put(
      `${url}/colleges/${id}`,
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
