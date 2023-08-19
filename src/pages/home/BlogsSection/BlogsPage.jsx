import BlogCard from "../../../components/BlogCard/BlogCard";
import Button from "../../../components/Button";
import PageHeader from "../../../components/PageHeader/PageHeader";

import blogData from "../../../constants/blogs";
import "./blogspage.css";

export default function BlogsPage() {
  const handleClick = () => alert("Blogs page: View more clicked ");
  const pageHeader = {
    title: "Blogs",
    heading: "Gerícht updates",
    btnText: "View More",
    btnClick: handleClick,
  };
  return (
    <>
      <div className="blogsPage">
        <section>
          <div className="page-container">
            <div className="blogs-header">
              <PageHeader
                title={pageHeader.title}
                heading={pageHeader.heading}
              />
            </div>
            <div className="blog-contents">
              {blogData.map((blog, index) => (
                <BlogCard
                  key={index}
                  content={blog}
                />
              ))}
            </div>
            <div className="blog-btn">
              {/* <Button text={pageHeader.btnText} btnClick={pageHeader.btnClick} /> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
