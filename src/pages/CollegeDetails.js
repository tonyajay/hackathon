import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { CollegeContext } from "../context/colleges";
import Loading from "../components/Loading";
import { CartContext } from "../context/cart";

export default function CollegeDetails() {
  const { id } = useParams();
  const history = useHistory();

  const { colleges } = React.useContext(CollegeContext);
  const { addToCart } = React.useContext(CartContext);
  const college = colleges.find(item => item.id === parseInt(id));
  if (colleges.length === 0) {
    return <Loading />;
  } else {
    const {
      image,
      name,
      fee,
      description,
      location,
      courses,
      reviews,
      totalavg
    } = college;
    return (
      <>
        <section className="single-product">
          <img src={image} alt={name} className="single-product-image" />
          <article>
            <h1>{name}</h1>
            <h3>Current Score : {totalavg}/500</h3>
            <h2>Located in {location}</h2>
            <br />
            <h2>Courses Offered :</h2>
            {courses.map(course => (
              <div>{course.course_name}</div>
            ))}
            <br />
            <p>{description}</p>
            <h2>Tution Fees {`$${fee}`}</h2>
            <br />
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                addToCart(college);
                history.push("/cart");
              }}
            >
              save university
            </button>
          </article>
        </section>
        <h2>Reviews :</h2>
        <br />
        {reviews.map(review => (
          <h4>{review.comments}</h4>
        ))}
      </>
    );
  }
}
