import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";

const DUMMY_PRODUCTS = [
  { id: 1, name: "Kopi Tubruk", price: 15000 },
  { id: 2, name: "Teh Tarik", price: 12000 },
  { id: 3, name: "Air Mineral", price: 5000 },
];

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Store</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default App;
