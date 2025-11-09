import "./BlogPostList.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useBlog } from "/src/contexts/BlogContext";
import BlogPostListSkeleton from "./BlogPostListSkeleton";

function BlogPostList() {
  const [isShowMoreClicked, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!isShowMoreClicked);
  };

  const { posts } = useBlog();
  const showBtn = posts.length > 6;
  const isContentLoaded = posts.length > 0;

  return (
    <div className="blog-post-list">
      <div className="blog-post-list__title">{"Najnowsze posty"}</div>

      <ul className={`${isShowMoreClicked ? "" : "blog-post-list__hide-more"}`}>
        {isContentLoaded ? (
          posts.map((item) => {
            return (
              <li key={item.id}>
                {item.img && (
                  <Link to={`/blog/${item.id}`}>
                    <div className="blog-post-list__post-container">
                      <div className="blog-post-list__post-image">
                        <img src={item.img} alt="post" />
                      </div>
                      <div className="blog-post-list__post-content">
                        <div className="blog-post-list__post-title">{item.title}</div>
                        <div className="blog-post-list__post-date">{item.date}</div>
                      </div>
                    </div>
                  </Link>
                )}
              </li>
            );
          })
        ) : (
          <BlogPostListSkeleton />
        )}
      </ul>

      {showBtn && (
        <button
          className={`blog-post-list__button btn btn--transparent ${
            isShowMoreClicked ? "blog-post-list__button--hidden" : ""
          }`}
          onClick={toggleShowMore}
        >
          {"Pokaż więcej"}
        </button>
      )}
    </div>
  );
}

export default BlogPostList;
