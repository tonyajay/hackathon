import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import FeaturedColleges from "../components/Colleges/FeaturedColleges";

export default function Home() {
  return (
    <>
      <Hero>
        <Link to="/colleges" className="btn btn-primary btn-hero">
          Colleges
        </Link>
      </Hero>
      <FeaturedColleges />
    </>
  );
}
