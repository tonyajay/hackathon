import React, { useContext } from "react";
import { CollegeContext } from "../context/colleges";
import Loading from "../components/Loading";
import CollegeList from "../components/Colleges/CollegeList";

export default function College() {
  const { loading, colleges } = React.useContext(CollegeContext);
  console.log(colleges);
  if (loading) {
    return <Loading />;
  }
  return <CollegeList title="our colleges" colleges={colleges} />;
}
