// submit review
import Axios from "axios";
import url from "../utils/URL";

async function submitReview({ title, userToken }) {
  const response = await axios
    .post(
      `${url}/colleges`,
      {
        title,
        total,
        items
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }
    )
    .catch(error => console.log(error));
  return response;
}
export default submitReview;
