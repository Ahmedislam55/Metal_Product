import AllCategoriesPage from "./AllCategories/AllCategories";
import CategoryPage from "./category/CategoryPage";
import classes from "./page.module.css";
export const metadata = {
  title: 'Manufaktur Category – Industry and Factory Theme',
  description: 'Manufaktur Solutions – Industry and Factory Theme',
};
function PortfolioPage() {
  return (
    <section className={classes.portfolio}>
      <CategoryPage />
      <AllCategoriesPage />
    </section>
  );
}

export default PortfolioPage;
