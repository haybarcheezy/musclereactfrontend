import React from "react";
export default function CalvesHero() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/calveshero.jpg")`,
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">
            Monster Calve Excercises
          </h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">View Excercises</button>
        </div>
      </div>
    </div>
  );
}
