import Link from "next/link";
import classes from "./broadRange.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function BroadRange() {
  const images = [
    {
      id: 1,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-01.jpg",
      title: "Copper",
    },
    {
      id: 2,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-03.jpg",
      title: "Steel",
    },
    {
      id: 3,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-02.jpg",
      title: "Aluminum",
    },
    {
      id: 4,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-04.jpg",
      title: "Brass",
    },
    {
      id: 5,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/Shop-Category-05.jpg",
      title: "Lead",
    },
  ];
  return (
    <>
      <section className={classes.broadRange}>
        <div className={classes.items}>
          <p> View all </p>
          <div className={classes.item}>
            <h1> broad range of metal alloys </h1>
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
        </div>
        <div className="container-fuild">
          <div className={`row ${classes.row}`}>
            {images.map((img) => (
              <div className={classes.images} key={img.id}>
                  <div className={classes.hidden}>
                    <img
                      src={img.image}
                      className={classes.image}
                      alt={img.title}
                    />
                  </div>
                <h6> {img.title} </h6>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default BroadRange;
