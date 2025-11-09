import "./BlogPostList.scss";

function BlogPostListSkeleton({ items = 6 }) {
  return Array.from({ length: items }).map((_, index) => (
    <li key={`blog-post-item-skeleton-${index}`}>
      <div className="blog-post-list__post-container blog-post-list__post-container--skeleton">
        <div className="blog-post-list__post-image"></div>

        <div className="blog-post-list__post-content">
          <div className="blog-post-list__post-title"></div>
          <div className="blog-post-list__post-date"></div>
        </div>
      </div>
    </li>
  ));
}

export default BlogPostListSkeleton;
