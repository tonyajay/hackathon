import React from "react";
import Axios from "axios";
import url from "../utils/URL";
import { featuredColleges, flattenProducts } from "../utils/helpers";

export const CollegeContext = React.createContext();

export default function CollegeProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [colleges, setColleges] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  // extra state values
  const [sorted, setSorted] = React.useState([]);
  const [filters, setFilters] = React.useState({
    search: "",
    courses: "all",
    financialAid: false,
    price: "all"
  });

  React.useEffect(() => {
    setLoading(true);
    Axios.get(`${url}/colleges`).then(response => {
      const featured = featuredColleges(flattenProducts(response.data));
      const colleges = flattenProducts(response.data);
      setSorted(colleges);
      setColleges(colleges);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  const updateFilters = e => {
    console.log(e);
  };

  return (
    <CollegeContext.Provider
      value={{ loading, colleges, featured, sorted, filters, updateFilters }}
    >
      {children}
    </CollegeContext.Provider>
  );
}
