import { Fragment } from "react";
import { useLocation } from "react-router-dom"; 
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../../component/seo";
import Breadcrumb from "../../wrapper/breadcrumb/Breadcrumb";
import BlogPagination from "../../wrapper/blog/BlogPagination";
import BlogPostsNoSidebar from "../../wrapper/blog/BlogPostsNoSidebar";

const BlogScreen = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="Нийтлэл"
        description="Нийтлэл"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Нүүр", path: process.env.PUBLIC_URL + "/" },
            {label: "Нийтлэл", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="blog-area pt-100 pb-100 blog-no-sidebar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mr-20">
                  <div className="row">
                    {/* blog posts */}
                    <BlogPostsNoSidebar />
                  </div>

                  {/* blog pagination */}
                  <BlogPagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default BlogScreen;
