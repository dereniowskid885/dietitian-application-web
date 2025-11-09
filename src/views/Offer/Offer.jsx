import "./Offer.scss";
import Breadcrumbs from "/src/components/layout/Breadcrumbs/Breadcrumbs";
import Carousel from "/src/components/layout/Carousel/Carousel";
import Item from "/src/components/layout/Carousel/Item/Item";
import Dialog from "/src/components/layout/Dialog/Dialog";
import { useCart } from "/src/contexts/CartContext";
import { useDialog } from "/src/contexts/DialogContext";
import { useBlog } from "/src/contexts/BlogContext";
import ProductAdd from "/src/components/layout/Dialog/Message/ProductAdd/ProductAdd";
import ProductList from "./ProductList/ProductList";

function Offer() {
  const {
    state: { cart },
  } = useCart();

  const { showDialog } = useDialog();
  const { posts } = useBlog();
  const addedProduct = cart[cart.length - 1];

  return (
    <main className="offer">
      <Breadcrumbs />

      <div className="offer__container">
        <ProductList />
      </div>

      <Carousel data={posts} Block={Item} page={"blog"} title={"Pedal & Plate - blog"} />

      {showDialog && (
        <Dialog>
          <ProductAdd product={addedProduct} />
        </Dialog>
      )}
    </main>
  );
}

export default Offer;
