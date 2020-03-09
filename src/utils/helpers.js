// helper functions

//flatten
export function flattenColleges(data) {
  return data.map(college => {
    let image = (college.thumbnail && college.thumbnail.url) || null;
    return { ...college, image };
  });
}

export function featuredColleges(data) {
  return [...data]
    .sort((a, b) => b.totalavg - a.totalavg)
    .filter((college, i) => {
      if (i < 8) {
        return college;
      } else return null;
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
