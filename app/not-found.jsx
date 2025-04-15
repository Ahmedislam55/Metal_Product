import Link from "next/link";
import classes from "./not-found.module.css";
function NotFound() {
  return (
    <>
      <section className={classes["section-notfound"]}>
        <div className="container">
          <div className={`row ${classes.row}`}>
            <div className={classes.caption}>
              <h1> Error Page </h1>
              <p>
                The page you are looking for doesn&apos;t exist. It may have been
                moved or removed altogether. Please try searching for some other
                page, or return to the website&apos;s homepage to find what you&apos;re
                looking for.
              </p>
              <div className={classes.buttons}>
              <button className={classes.button}>
                <Link href="/">Back to home</Link>
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

export default NotFound;
