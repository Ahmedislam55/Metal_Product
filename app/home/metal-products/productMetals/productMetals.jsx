import classes from "./productMetals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function CardsMetalsPage() {
  return (
    <>
      <section className={classes.cardsMetal}>
        <div className={`${classes.container} container-fuild`}>
          <div className={` ${classes.row} row `}>
            <div className={`${classes.item}`}>
              <div className={classes.caption}>
                <h2>
                  New online <span> catalogue </span> available
                </h2>
                <div className={classes.buttons}>
                  <button className={classes.button}>
                    <Link href="/category">Read more</Link>
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
                  </button>
                </div>
              </div>
              <div className={classes.image}>
                <img
                  src="https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/12/home-5-banner-001.jpg"
                  className={classes.image1}
                  alt=" d"
                />
              </div>
            </div>
            <div className={`${classes.item}`}>
              <div className={classes.caption}>
                <h2>
                  Buy industry items and save up to <span> 30% </span>
                </h2>
                <div className={classes.buttons}>
                  <button className={classes.button}>
                    <Link href="/category">Read more</Link>
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
                  </button>
                </div>
              </div>
              <div className={classes.image}>
                <img
                  src="https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/home-5-shop-banner-02.jpg"
                  className={classes.image1}
                  alt=" d"
                />
              </div>
            </div>
            <div className={`${classes.item}`}>
              <div className={classes.caption}>
                <h2>
                  Let us do the hard work with <span> Custom Cutting </span>
                </h2>
                <div className={classes.buttons}>
                  <button className={classes.button}>
                    <Link href="/category">Read more</Link>
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
                  </button>
                </div>
              </div>
              <div className={classes.image}>
                <img
                  src="https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/home-5-shop-banner-03.jpg"
                  className={classes.image1}
                  alt=" d"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CardsMetalsPage;
