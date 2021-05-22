import React from "react";

export default function About() {
  return (
    <div>
      <section className="section about-section">
        <h1 className="section-title">about us</h1>
        <div>
          <img src={require("../components/cheers.png")} alt="Cheers Logo" />{" "}
        </div>
        <p>
          CheersDB
          <span role="img" aria-label="cocktail">
            🥃
          </span>{" "}
          is an database of drinks and cocktails from around the world.
        </p>
      </section>
    </div>
  );
}
