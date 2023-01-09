import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const BlogPostsNoSidebar = () => {
 
  const data = [
    {id:1, title: "1blog", shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image:"https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", createdAt: "2022-02-24",
  },
    {id:2, title: "1blog", shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image:"https://images.unsplash.com/photo-1672707895259-2975b5a51801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", createdAt: "2022-02-24",
  },
    {id:3, title: "1blog", shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image:"https://images.unsplash.com/photo-1672707895259-2975b5a51801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", createdAt: "2022-02-24",
  },
    {id:4, title: "1blog", shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    image:"https://images.unsplash.com/photo-1672707895259-2975b5a51801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", createdAt: "2022-02-24",
  }
  ]
  return (
    <Fragment>
        {data.map((item) => {
          return(
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="blog-wrap-2 mb-30" key={item.id}>
            <div className="blog-img-2">
              <Link to={process.env.PUBLIC_URL +"/blog-details/" + item.id}>
                <img
                  src={item.image}
                  alt=""
                />
              </Link>
            </div>
            <div className="blog-content-2">
              <div className="blog-meta-2">
                <ul>
                  <li>{item.createdAt}</li>
                </ul>
              </div>
              <h4>
                <Link to={process.env.PUBLIC_URL +"/blog-details/" + item.id}>
                 {item.title}
                </Link>
              </h4>
              <p>
              {item.shortDescription}
              </p>
              <div className="blog-share-comment">
                <div className="blog-btn-2">
                  <Link to={process.env.PUBLIC_URL +"/blog-details/" + item.id}>
                    Дэлгэрэнгүй
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
          )
        })}
    </Fragment>
  );
};

export default BlogPostsNoSidebar;
