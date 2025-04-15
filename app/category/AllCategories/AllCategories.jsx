import classes from "./AllCategory.module.css";
import CategoriesPage from "./Categories";
import SubCategoryPage from "./SubCategory";
function AllCategoriesPage() {
  return (
    <>
      <section className={classes.categories}>
        <h2> steel iron </h2>
        <div className="container">
          <div className={`row ${classes.row}`}>
            <div className={classes.category}>
              <CategoriesPage />
            </div>
            <div className={classes["sub-category"]}>
              <SubCategoryPage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AllCategoriesPage;
