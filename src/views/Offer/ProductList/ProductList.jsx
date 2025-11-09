import { useCart } from "/src/contexts/CartContext";
import { useDialog } from "/src/contexts/DialogContext";
import { Link } from "react-router-dom";
import "./ProductList.scss";
import ProductListSkeleton from "./ProductListSkeleton";

function ProductList() {
  const { toggleDialog } = useDialog();

  const { setCart, ACTIONS, products } = useCart();
  const isContentLoaded = products && products.length > 0;

  const cartIconHandler = (product) => {
    const priceValue = parseInt(product.amount_with_currency.split(" ")[0]);

    setCart({
      type: ACTIONS.ADD_TO_CART,
      payload: {
        id: product.id,
        img: product.img,
        title: product.title,
        price: product.amount_with_currency,
        priceValue: priceValue,
      },
    });

    toggleDialog();
  };

  return (
    <ul>
      {isContentLoaded ? (
        products.map((product) =>
          product.img ? (
            <li key={product.id} className="product-list-item">
              <div className="product-list-item__image">
                <img
                  className="product-list-item__icon"
                  src="/src/assets/cart.svg"
                  alt="cart"
                  onClick={() => cartIconHandler(product)}
                />

                <img src={product.img} alt="product" />
              </div>

              <div className="product-list-item__content">
                <h3>{product.title}</h3>
                <h4>{product.amount_with_currency}</h4>

                <Link to={`/oferta/${product.id}`}>
                  <button className="btn">{"Dowiedz się więcej"}</button>
                </Link>
              </div>
            </li>
          ) : null
        )
      ) : (
        <ProductListSkeleton items={4} />
      )}
    </ul>
  );
}

export default ProductList;
