"use client";
import classes from "./QuantityCounter.module.css";

function QuantityCounter({ quantity, setQuantity }) {
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <section className={classes["quantity-section"]}>
      <div className={classes.counter}>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`${classes.crease} ${quantity === 0 ? classes.disabled : ""}`}
        >
          -
        </button>
        <div className={classes.quantity}>
          <span>{quantity}</span>
        </div>
        <button onClick={increment} className={classes.crease}>+</button>
      </div>
    </section>
  );
}

export default QuantityCounter;
