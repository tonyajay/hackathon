import React, { useContext } from "react";
import { CollegeContext } from "../context/colleges";
import Loading from "../components/Loading";
import PageColleges from "../components/Colleges/PageColleges";
import Filters from "../components/Colleges/Filters";

export default function College() {
  const { loading, colleges } = useContext(CollegeContext);
  console.log(colleges);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Filters />
      <PageColleges></PageColleges>
    </>
  );
}
