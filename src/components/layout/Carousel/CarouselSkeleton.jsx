import "./Carousel.scss";

function CarouselSkeleton({ items }) {
  return Array.from({ length: items }, (_, i) => (
    <div key={`carousel-skeleton-item-${i}`} className="carousel-skeleton-item"></div>
  ));
}

export default CarouselSkeleton;
