const CategoryCard = ({ icon, name, description, itemCount }) => {
  return (
    <div className="category-card">
      <div className="category-icon">{icon}</div>
      <h3 className="category-name">{name}</h3>
      <p className="category-description">{description}</p>
      <span className="category-count">{itemCount} items</span>
    </div>
  );
};

export default CategoryCard;