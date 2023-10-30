export default function ProductCard({ props }) {
  return (
    <div className="productscard-container">
      <img src={props.image} alt={props.category} />
      <h3>{props.category}</h3>
    </div>
  );
}
