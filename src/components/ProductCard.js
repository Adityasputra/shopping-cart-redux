import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>Price: Rp {product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
