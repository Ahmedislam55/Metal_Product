import classes from "./sellingProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MessageButton from "@/components/MessageButton";
function SellingProducts() {
  const ClipboardIcon = ({ className, size = 20 }) => (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 6.35 6.35"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          fill="currentColor"
          d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
        ></path>
      </g>
    </svg>
  );

  const images = [
    {
      id: 1,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/12/home-3-product-01.jpg",
      price: "$40.00",
      title: "Mini Bars",
    },
    {
      id: 2,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/12/home-3-product-02.jpg",
      price: "$40.00",
      title: "Round Pipe",
    },
    {
      id: 3,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/12/home-3-product-03.jpg",
      price: "$80.00",
      title: "Round Bar Alu",
    },
    {
      id: 4,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/product-single-img-08.jpg",
      price: "$150.00",
      title: "Copper Bars",
    },
    {
      id: 5,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/product-single-img-06.jpg",
      price: "$80.00",
      title: "Tips Aluminium 3mm",
    },
    {
      id: 6,
      image:
        "https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/product-single-img-05.jpg",
      price: "$115.00",
      title: "Aluminium Coil",
    },
  ];
  return (
    <>
      <section className={classes.sellingProducts}>
        <div className={classes.items}>
          <p> View all </p>
          <div className={classes.item}>
            <h1> Top selling products </h1>
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
        <div className={classes.images}>
          <div className="container-fuild">
            <div className={`${classes.row} row`}>
              {images.map((img) => (
                <div
                  key={img.id}
                  className={`${classes.images} col-xl-4 mb-4 col-lg-6 col-md-6`}
                >
                  <div className={classes.image}>
                    <img src={img.image} alt={img.title} />
                    <div className={classes.caption}>
                      <h3> {img.price} </h3>
                      <h4> {img.title} </h4>
                      <h6> New </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SellingProducts;
