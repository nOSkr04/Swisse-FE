import axios from "axios";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { photo } from "../../api";
const BlogPostsNoSidebar = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://altanzaan.org/api/v1/blogs")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Fragment>
      {data?.map((item) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
            <div className="blog-wrap-2 mb-30" key={item.id}>
              <div className="blog-img-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details/" + item.id}>
                  {item.thumbnail && <img src={photo + item.thumbnail} alt="" />}
                </Link>
              </div>
              <div className="blog-content-2">
                <div className="blog-meta-2">
                  <ul>
                    <li>{item.createdAt}</li>
                  </ul>
                </div>
                <h4>
                  <Link
                    to={process.env.PUBLIC_URL + "/blog-details/" + item.id}
                  >
                    {item.title}
                  </Link>
                </h4>
                <p>{item.shortDescription}</p>
                <div className="blog-share-comment">
                  <div className="blog-btn-2">
                    <Link
                      to={process.env.PUBLIC_URL + "/blog-details/" + item.id}
                    >
                      Дэлгэрэнгүй
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default BlogPostsNoSidebar;
