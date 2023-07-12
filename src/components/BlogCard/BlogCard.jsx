import "./blogcard.css";
export default function BlogCard({ blog }) {
  return (
    <>
      <div className="blogcard">
        <div className="blog-img-box">
          <div className="blog-img">
            <div className="blog-overlay"> </div>
            <img
              src={blog.image}
              alt="image"
            />
          </div>
        </div>
        <div className="blog-content">
          <div className="date-author">
            <p className="date">{blog.date}</p>
            <p className="author">- {blog.author}</p>
          </div>
          <div className="blog-title">
            <p>
              <a href={blog.blogLink}>{blog.title}</a>
            </p>
          </div>
          <div className="blog-summary">
            <p>{blog.summary}</p>
          </div>
          <div className="read-more">
            <p>
              <a href={blog.blogLink}>Read More</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
