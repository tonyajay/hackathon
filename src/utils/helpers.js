import url from "./URL";
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
