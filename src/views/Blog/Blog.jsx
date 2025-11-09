import "./Blog.scss";
import BlogPostList from "./BlogPostList/BlogPostList";
import Breadcrumbs from "/src/components/layout/Breadcrumbs/Breadcrumbs";

function Blog() {
  return (
    <main className="blog">
      <Breadcrumbs />

      <div className="blog__content">
        <h1 className="blog__title">{"Kolarstwo oczami zakochanego w nim dietetyka."}</h1>

        <p className="blog__sub-title">
          {
            "Z przymrużeniem oka o najpiękniejszym sporcie na świecie, a do tego niewielka dawka żywieniowego naukowego bełkotu."
          }
        </p>

        <div className="blog__image">
          <img src="/src/assets/logo.jpg" alt="logo image" />
        </div>
      </div>

      <BlogPostList />
    </main>
  );
}

export default Blog;
