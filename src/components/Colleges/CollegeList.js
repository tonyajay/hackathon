import React from "react";
import College from "./College";

export default function CollegeList({ title, colleges }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {[...colleges]
          .sort((a, b) => a.totalavgM > b.totalavgM)
          .map(college => {
            return <College key={college.id} {...college} />;
          })}
      </div>
    </section>
  );
}
