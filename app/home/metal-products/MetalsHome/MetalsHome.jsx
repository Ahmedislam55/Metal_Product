import Link from "next/link";
import classes from "./MetalsHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function MetalsHomePage() {
  return (
    <section className={classes.metal}>
      <div className={`${classes.container} container`}>
        <div className={`${classes.row} row`}>
          <div className={`${classes.caption} col-lg-6`}>
            <p> Online Shop </p>
            <h1>
              The biggest online
              <br />
              metal supplier
            </h1>
            <h3>
              Free Delivery in England & Central Europe
              <span> over 85 $ </span>
            </h3>
            <div className={classes.buttons}>
              <button className={classes.button}>
                <Link
                  href="https://wa.me/966115216216?text=Hello%20Ahmed%2C%20I%20am%20interested%20in%20your%20products.%20Can%20you%20help%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop now
                </Link>
              </button>
              <button className={classes.icon}>
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
              </button>
            </div>
          </div>
          <div className={`${classes.images} col-lg-6`}>
            <img
              src="//manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/home-5-rev-backgorund.png"
              alt="d"
              className={classes.image1}
            />
            <img
              src="//manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/home-5-rev-image.png"
              alt="metal"
              className={classes.image2}
            />
            {/* <img
              src="//manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/home-5-rev-small-image.png"
              alt="true"
              className={classes.image3}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MetalsHomePage;
