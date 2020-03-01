// submit review
import Axios from "axios";
import url from "../utils/URL";

async function submitReview({ name, items, userToken }) {
  const response = await axios
    .post(
      `${url}/colleges`,
      {
        name,
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
