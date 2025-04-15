"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import QuantityCounter from "@/components/QuantityCounter";
import classes from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoriesPage from "../AllCategories/Categories";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";
import TellPhoneButton from "@/components/TellphoneButton";
import MessageButton from "@/components/MessageButton";
function DescrptionCategory() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "Unknown Product";
  const image = searchParams.get("image")
    ? decodeURIComponent(searchParams.get("image"))
    : "";
  const desc = searchParams.get("desc")
    ? decodeURIComponent(searchParams.get("desc"))
    : "Unknown Description";
  const title = searchParams.get("title") || "Unknown Title";
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const handleGetQuote = () => {
    const productData = {
      name: product,
      title: title,
      quantity,
      image: image,
    };
  
    const existingQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  
    const updatedQuotes = [...existingQuotes, productData];
  
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
  
    router.push("/quote");
  };

  return (
    <>
      <section className={classes["category-descrption"]}>
        <div className="container">
          <div className={`row ${classes.row}`}>
            <div className={`col-lg-4 col-md-5 col-ms-12 ${classes.images}`}>
              <img src={image} alt={product} />
            </div>
            <div className={`col-lg-5 col-ms-12 ${classes.caption}`}>
              <h2>{title}</h2>
              <h3> {product} </h3>
              <p>{desc}</p>
            </div>
            <div className={`col-lg-3  col-ms-12 ${classes.buttons}`}>
              <span className={classes.stock}> in stock </span>
              <hr />
              <div className={classes.row}>
                <div className={classes.title}>
                  <span>Quantity</span>
                </div>
                <div className={classes.quantity}>
                  <QuantityCounter
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>
              </div>
              <button className={classes.file} onClick={handleGetQuote}>
                <FontAwesomeIcon icon={faClipboardList} />
                <span>Get Quote</span>
              </button>
              <div className={classes.tell}>
                <TellPhoneButton />
              </div>
              <div className={classes.message}>
                <MessageButton />
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className={classes.descrption}>
          <h3>Project Description</h3>
          <span>
            Get now the finest types of steel flat bar through the YouMats store
            , Steel Flat Bar is strong, durable and easy to use, form, weld and
            cut.
            <br /> It is used in construction and infrastructure projects
          </span>
          <ul>
            <li>Thickness: 20 mm</li>
            <li>Width: 40 mm</li>
            <li>Length: 6 meter</li>
          </ul>
        </div>

        {/* Related Products Section */}
        <div className={classes["related-products"]}>
          <h3>Related Products</h3>
          <CategoriesPage />
        </div>
      </section>
    </>
  );
}

export default DescrptionCategory;
