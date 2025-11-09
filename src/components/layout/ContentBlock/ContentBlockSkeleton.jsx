import "./ContentBlock.scss";

function ContentBlockSkeleton({ items }) {
  return Array.from({ length: items }).map((_, index) => {
    const isBlockEven = ++index % 2 == 0;

    return (
      <div
        className={`content__block content__block--skeleton ${
          isBlockEven ? "content__block--reverse" : ""
        }`}
      >
        <div className="content__image"></div>
        <div className="content__wrapper">
          <h2 className="content__title"></h2>
          <p className="content__text"></p>
          <p className="content__text"></p>
          <p className="content__text"></p>
          <button className="content__button btn btn--transparent"></button>
        </div>
      </div>
    );
  });
}

export default ContentBlockSkeleton;
