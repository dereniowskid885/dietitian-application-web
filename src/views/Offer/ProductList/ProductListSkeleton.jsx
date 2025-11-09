import "./ProductList.scss";

function ProductListSkeleton({ items }) {
  return Array.from({ length: items }).map((_, index) => (
    <li key={`product-list-skeleton-item=${index}`} className="product-list-skeleton">
      <div className="product-list-skeleton__image"></div>

      <div className="product-list-skeleton__content">
        <div className="product-list-skeleton__title"></div>
        <div className="product-list-skeleton__price"></div>
        <div className="product-list-skeleton__button btn"></div>
      </div>
    </li>
  ));
}

export default ProductListSkeleton;
