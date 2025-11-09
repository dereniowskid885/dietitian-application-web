import { Link } from "react-router-dom";
import "./ContentBlock.scss";
import ContentBlockSkeleton from "./ContentBlockSkeleton";

function ContentBlock({ data, skeletonItemsAmount = 3 }) {
  const isContentLoaded = data && data.length > 0;

  return (
    <ul className="content">
      {isContentLoaded ? (
        data.map((item, index) => {
          const buttonLink = item.button_link ? item.button_link : "#";
          const isBlockEven = ++index % 2 == 0;

          return (
            <li
              key={item.id}
              className={`content__block ${isBlockEven ? "content__block--reverse" : ""}`}
            >
              {item.img && (
                <>
                  <div className="content__image">
                    <img src={item.img} alt="content image" />
                  </div>

                  <div className="content__wrapper">
                    {item.title && <h2 className="content__title">{item.title}</h2>}
                    {item.content_1 && <p className="content__text">{item.content_1}</p>}
                    {item.content_2 && <p className="content__text">{item.content_2}</p>}
                    {item.content && <p className="content__text">{item.content}</p>}
                    {item.button_text && (
                      <Link to={buttonLink}>
                        <button className="content__button btn btn--transparent">
                          {item.button_text}
                        </button>
                      </Link>
                    )}
                  </div>
                </>
              )}
            </li>
          );
        })
      ) : (
        <ContentBlockSkeleton items={skeletonItemsAmount} />
      )}
    </ul>
  );
}

export default ContentBlock;
