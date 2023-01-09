import { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom"; 
import SEO from "../../component/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";
import BlogPost from "../../wrapper/blog/BlogPost";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const BlogDetails = () => {
  let { pathname, } = useLocation();
  let { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://altanzaan.org/api/v1/blogs/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Fragment>
      <SEO
        titleTemplate="Blog Post"
        description="Blog Post of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Нүүр", path: process.env.PUBLIC_URL + "/" },
            {label: "Нийтлэл дэлгэрэнгүй", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-12">
                <div className="blog-details-wrapper ml-20">
                  {/* blog post */}
                  <BlogPost data={data} />
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogDetails;
