export default function ProductsCard({ props }) {
  const { category, description, id, image, price, rating, title } = props;
  return (
    <>
      <div className="card" key={id}>
        <img className="image-fluid" src={image} alt={id} />
        <h4>{title.slice(0, 11)}</h4>
        <h5>{description.slice(0, 20)}</h5>
        <p>$ {price}</p>
        <p>{category}</p>
        <p>
          {rating.rate}/5 | Total Vote : {rating.count}
        </p>
        {/* from boostrap */}
        <button
          className="btn btn-warning"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          ADD TO CART
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">...</div>
        </div>
      </div>
    </>
  );
}
