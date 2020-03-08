import url from "./URL";
import axios from "axios";
import React from "react";
// helper functions

//flatten
export function flattenColleges(data) {
  return data.map(college => {
    let image = (college.thumbnail && college.thumbnail.url) || null;
    return { ...college, image };
    //let image = `${url}${item.image.url}`
  });
}

export function featuredColleges(data) {
  return data.filter(college => {
    return college.rank < 9;
  });
}

export function paginate(colleges) {
  const collegesPerPage = 8;
  const numberOfPages = Math.ceil(colleges.length / collegesPerPage);
  // const newColleges = Array.from({ length: numberOfPages }, (_, index) => {
  //   return colleges.splice(0, collegesPerPage);
  // });
  const newColleges = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * collegesPerPage;
    return colleges.slice(start, start + collegesPerPage);
  });
  return newColleges;
}

export async function updatetotalavg(college, user) {
  const reviewTotal = college.reviews.reduce(function(acc, obj) {
    return acc + obj.totalavg;
  }, 0);

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
}
