import "./Product.scss";

function ProductPageSkeleton() {
  return (
    <div className="product__container product__container--skeleton">
      <div className="product__info">
        <div className="product__image"></div>

        <div className="product__content">
          <div className="product__wrapper">
            <h1></h1>
            <h2></h2>
            <p></p>
          </div>

          <button className="btn btn--transparent"></button>
        </div>
      </div>

      <div className="product__description">
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
}

export default ProductPageSkeleton;
