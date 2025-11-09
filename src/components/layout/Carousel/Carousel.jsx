import "./Carousel.scss";
import ElasticCarousel from "@itseasy21/react-elastic-carousel";
import CarouselSkeleton from "./CarouselSkeleton";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 480, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
];

function Carousel({ randomProducts, data, Block, title, page }) {
  const items = randomProducts ? randomProducts : data;
  const isContentLoaded = items && items.length > 0;

  return (
    <div className="carousel">
      <h2>{title}</h2>

      <div className="carousel__content">
        <ElasticCarousel itemPadding={[0, 10]} breakPoints={breakPoints}>
          {isContentLoaded ? (
            items.map((item) => {
              return <Block page={page} key={item.id} data={item} />;
            })
          ) : (
            <CarouselSkeleton items={4} />
          )}
        </ElasticCarousel>
      </div>
    </div>
  );
}

export default Carousel;
