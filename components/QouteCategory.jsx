import Link from "next/link";
import classes from "./QouteCategory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function QouteCategory() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartCount = () => {
    const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
    const totalItems = quotes.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(totalItems);
  };

  useEffect(() => {
    // تحديث العدد عند التحميل
    updateCartCount();

    // الاستماع لحدث مخصص بدلاً من storage event
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <Link href="/quote" className={classes.cartLink}>
      {/* <FontAwesomeIcon className={classes.shop} icon={faCartShopping} /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className={classes.shop}
        viewBox="0 0 16 16"
      >
        <path d="M0 1a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .485.379L3.89 4H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.49-.402L1.61 1.607 1.5 1H1a1 1 0 0 1-1-1z" />
        <path d="M4.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>

      {cartItemCount > 0 && (
        <span className={classes.cartCount}>{cartItemCount}</span>
      )}
    </Link>
  );
}

export default QouteCategory;
