"use client";
import { useParams } from "next/navigation";
import CategoriesPage from "../AllCategories/Categories";
const CategoryPage = () => {
  const { category } = useParams();
  return (
    <div style={{ padding: "2rem" }}>
      <CategoriesPage filterBy={category} />
    </div>
  );
};

export default CategoryPage;
