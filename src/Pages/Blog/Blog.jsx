import React from "react";
import "./Blog.css";
import { Radio } from "antd";
import { Link } from "react-router-dom";
import Questions from "../../Components/BlogQuestions/Questions";

const Blog = () => {
  return (
    <div className="blog">
      <div className="d-flex links mt-3">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp">/</span>
        <Link to="#" className="active">
          blog
        </Link>
      </div>
      <div className="d-flex headlist my-3">
        <h1>Blog</h1>
      </div>
      <Radio.Group defaultValue="a" buttonStyle="solid" className="d-flex flex-wrap">
        <Link to="#" ><Radio.Button value="a" className="mb-2">Buying Art <span className="sp6">6</span></Radio.Button></Link>
        <Link to="#" ><Radio.Button value="b" className="mx2 mb-2">Being an Artist <span className="sp6">2</span></Radio.Button></Link>
        <Link to="#" ><Radio.Button value="c">Artist <span className="sp6">1</span></Radio.Button></Link>
      </Radio.Group>
      <Questions/>
      <div className="div-btn text-center">
      <button className="btn-view">View all</button></div>
    </div>
  );
};

export default Blog;
