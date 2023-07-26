import "./blogcard.css";
export default function BlogCard({ content = {}, isBlog = true }) {
  return (
    <>
      <div className="blogcard">
        <div className="blog-img-box">
          <div className="blog-img">
            <div className="blog-overlay"> </div>
            <img
              src={content.image}
              alt="image"
            />
          </div>
        </div>
        <div className="blog-content">
          <div className="date-author">
            <p className="date">{content.date}</p>
            {isBlog && <p className="author">- {content.author}</p>}
          </div>
          <div className="blog-title">
            <p>
              <a href={content.blogLink}>{content.title}</a>
            </p>
          </div>
          <div className="blog-summary">
            <p>{content.summary}</p>
          </div>
          {isBlog && (
            <div className="read-more">
              <p>
                <a href={content.blogLink}>Read More</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
