import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import Post from "./components/Post";
import { posts } from "./posts";
import SubNav from "./components/SubNav";

const Forums = () => {
  return (
    <>
      {posts.map((post, index) => {
        return <Post post={post} key={post.id} number={index} />;
      })}
      <h1>{posts[2].username}</h1>
    </>
  );
};
const Announcements = () => {
  return <h1>333</h1>;
};
const DashBoard = () => {
  return (
    <section className="dashBoard">
      <div className="forums">
        <Forums />
      </div>
      <div className="announcement">
        <Announcements />
      </div>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Nav />
      <SubNav />
      <DashBoard />
    </div>
  </React.StrictMode>
);
