import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1627213742863-46b836499634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80")`,
      // }}
    >
      <div className="container-xl py-[50px] mb-[50px]">
        <div className="text-center text-neutral-content">
          <div className="max-w-md">
            <div className="my-5">
              <Button text="Click Here" />
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-4 justify-center items-center">
              <Card
                image="https://images.unsplash.com/photo-1627213742863-46b836499634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80"
                alt="card image"
                title="Hello"
                text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                btnText="Get Started"
              />
              <Card
                image="https://images.unsplash.com/photo-1627213742863-46b836499634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80"
                alt="card image"
                title="Hello"
                text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                btnText="Get Started"
              />
              <Card
                image="https://images.unsplash.com/photo-1627213742863-46b836499634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80"
                alt="card image"
                title="Hello"
                text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                btnText="Get Started"
              />
            </div>

            <div className="mt-[50px]">
              <h1 className="mb-5 text-5xl font-bold">
                Hello there, My name is Abdillah Mufki
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to="/hero">
                <button className="btn btn-primary">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
