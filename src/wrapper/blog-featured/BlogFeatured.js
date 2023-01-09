import PropTypes from "prop-types";
import clsx from "clsx";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../component/blog-featured/BlogFeaturedSingle";
import SectionTitle from "../../component/section-title/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {
  const [data,setData] = useState()
  useEffect(() => {
    axios.get("https://altanzaan.org/api/v1/blogs").
    then((res) => {setData(res.data.data)})
    .catch((err) => {console.log(err);})
  },[])

  return (
    <div className={clsx("blog-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <SectionTitle
          titleText="Нийтлэл"
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <div className="row">
          {data?.map(singlePost => (
            <div className="col-lg-4 col-sm-6" key={singlePost.id}>
              <BlogFeaturedSingle singlePost={singlePost} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogFeatured;
