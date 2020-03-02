import React from "react";
import Axios from "axios";
import url from "../utils/URL";
import { featuredColleges, flattenColleges, paginate } from "../utils/helpers";

export const CollegeContext = React.createContext();

export default function CollegeProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [colleges, setColleges] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  // extra state values
  const [page, setPage] = React.useState(0);
  const [sorted, setSorted] = React.useState([]);
  const [filters, setFilters] = React.useState({
    search: "",
    courses: "all",
    financialAid: false,
    fee: "all"
  });
  const changePage = index => {
    setPage(index);
  };
  const updateFilters = e => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
  };

  React.useEffect(() => {
    setLoading(true);
    Axios.get(`${url}/colleges`).then(response => {
      const featured = featuredColleges(flattenColleges(response.data));
      const colleges = flattenColleges(response.data);
      setSorted(paginate(colleges));
      setColleges(colleges);
      setFeatured(featured);
      setLoading(false);
    });
    return () => {};
  }, []);

  React.useLayoutEffect(() => {
    let newColleges = [...colleges].sort((a, b) => a.fee - b.fee);
    const { search, course, shipping, fee } = filters;
    //
    if (course !== "all") {
      newColleges = newColleges.filter(college => college.course === course);
    }
    if (shipping !== false) {
      newColleges = newColleges.filter(
        college => college.free_shipping === shipping
      );
    }
    if (fee !== "all") {
      newColleges = newColleges.filter(college => {
        if (fee === 0) {
          return college.fee < 300;
        } else if (fee === 300) {
          return college.fee > 300 && college.fee < 650;
        } else {
          return college.fee > 650;
        }
      });
    }
    if (search !== "") {
      newColleges = newColleges.filter(college => {
        let name = college.name.toLowerCase().trim();
        return name.startsWith(search) ? college : null;
      });
    }

    setPage(0);

    setSorted(paginate(newColleges));
  }, [filters, colleges]);

  return (
    <CollegeContext.Provider
      value={{
        colleges,
        loading,
        featured,
        sorted,
        page,
        changePage,
        filters,
        updateFilters
      }}
    >
      {children}
    </CollegeContext.Provider>
  );
}
