import CategoriesSection from '../components/Categories/CategoriesSection';

const Categories = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">Toy Categories</h1>
            <p className="page-subtitle">
              Explore our wide range of toy categories and find the perfect gift for every age
            </p>
          </div>
        </div>
      </section>
      <CategoriesSection />
    </>
  );
};

export default Categories;