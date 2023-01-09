import React, { Fragment } from "react";
import { photo } from "../../api";

const BlogPost = (props) => {
  const {data} = props
  return (
    <Fragment>
      <div className="blog-details-top">
        {data.thumbnail && 
        <div className="blog-details-img">
          <img
            alt=""
            src={photo+ data.thumbnail}
            />
        </div>
          }
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>{data.createdAt}</li>
            </ul>
          </div>
          <h3>{data.title}</h3>
          {data.description && <div dangerouslySetInnerHTML={{__html: data.description}} />}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
