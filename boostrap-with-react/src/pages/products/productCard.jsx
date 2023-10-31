export default function ProductCard({ props }) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.category}</h5>
        <p className="card-text">{props.description.slice(0,50)}</p>
        <a href="#" className="btn btn-danger">
          Buy Now
        </a>{" "}
        <a href="#" className="btn btn-warning">
          Add to cart
        </a>
      </div>
    </div>
  );
}
