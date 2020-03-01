import React from "react";
import { CollegeContext } from "../../context/colleges";
import CollegeList from "./CollegeList";
import Loading from "../Loading";

export default function FeaturedColleges() {
  const { loading, featured } = React.useContext(CollegeContext);
  if (loading) {
    return <Loading />;
  }
  return <CollegeList title="Featured Colleges" colleges={featured} />;
}
