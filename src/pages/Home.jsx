import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1627213742863-46b836499634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80")`,
      // }}
    >
      <div className=""></div>
      <div className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Hello there, My name is Abdillah Mufki
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/hero">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
