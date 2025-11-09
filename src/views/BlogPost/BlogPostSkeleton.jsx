import "./BlogPost.scss";

function BlogPostSkeleton() {
  return (
    <div className="blog-post__container blog-post__container--skeleton">
      <h1 className="blog-post__title"></h1>
      <div className="blog-post__info"></div>
      <div className="blog-post__image"></div>

      <div className="blog-post__wrapper">
        <div className="blog-post__content"></div>
        <div className="blog-post__content-img"></div>
        <div className="blog-post__content"></div>
      </div>
    </div>
  );
}

export default BlogPostSkeleton;
