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
    return college.rank > 6;
  });
}
