export default function CourseCard({ title, price, desc, img, onAdd }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card course-card h-100">
        <div className="position-relative">
          <img src={img} className="card-img-top" alt={title} />
          <span className="price-tag position-absolute top-0 end-0 m-3">₹{price}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <button className="btn btn-primary" onClick={onAdd}>
            <i className="fas fa-cart-plus me-2"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
