import classes from "./CategoryPage.module.css";
function CategoryPage() {
  return (
    <>
      <section className={classes["category-page"]}>
        <div className="container">
          <div className={`row ${classes.row}`}>
            <div className={classes.caption}>
              <p> Our Categories </p>
              <h1>
                Explore Our
                <br />
                <span>Categories</span>
              </h1>
              <h3>
                Discover a wide range of categories tailored to your needs. From
                the latest electronics to fashion and home essentials.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CategoryPage;
