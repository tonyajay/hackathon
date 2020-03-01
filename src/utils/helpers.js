import url from "./URL";
// helper functions

//flatten
export function flattenProducts(data) {
  return data.map(item => {
    let image = (item.image && item.image.url) || null;
    return { ...item, image };
    //let image = `${url}${item.image.url}`
  });
}

export function featuredColleges(data) {
  return data.filter(item => {
    return item.featured === true;
  });
}
