import React from "react";
import College from "./College";

export default function CollegeList({ title, colleges }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {colleges.map((college, i) => {
          return <College key={college.id} index={i} {...college} />;
        })}
      </div>
    </section>
  );
}
//git remote add origin https://git.ellucian.com/scm/~tonya/college-ranking-system.git
