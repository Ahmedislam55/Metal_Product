import Link from "next/link";
import classes from "./not-found.module.css";
function NotFoundCategory() {
  return (
    <>
      <section className={classes["section-notfound"]}>
        <div className="container">
          <div className={`row ${classes.row}`}>
            <div className={classes.caption}>
              <h1>  Category not found </h1>
              <p>
                The page you are looking for doesn&apos;t exist. It may have
                been moved or removed altogether. Please try searching for some
                other page, or return to the website&apos;s homepage to find
                what you&apos;re looking for.
              </p>
              <div className={classes.buttons}>
                <button className={classes.button}>
                  <Link href="/category">Show All Categories</Link>
                </button>
                {/* <button className={classes.icon}>
                  <Link href="#">
                    <div className={classes.icons}>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={classes.faAngleRight}
                      />
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={classes.faAngleRighttwo}
                      />
                    </div>
                  </Link>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFoundCategory;
