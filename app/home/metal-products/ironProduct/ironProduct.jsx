import Link from "next/link";
import classes from "./ironProduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function IronProduct() {
  const images = [
    {
      id: 1,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/69405/conversions/Steel-rebar-size_150_150.webp",
      title: "Reinforcing iron",
      desc: "Steel rebar thickness 16 mm brand Watani , the iron rods are cold drawn according to the Saudi specifications and the American specifications .",
    },
    {
      id: 2,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/89105/conversions/Steel-Angle-size_150_150.webp",
      title: "Iron angle",
      desc: "We have the finest types of iron anglestore Steel Angle Thickness 3 mm Size 30 × 30 mm Length 6 Meter, It is characterized by strength and durability .",
    },
    {
      id: 3,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/90871/conversions/steel-beams-H-size_150_150.webp",
      title: "Steel Profiles",
      desc: "High-quality steel beams in the shape of H The YoMats store provides them to you in a wide range of sizes , Size 350 × 350 mm thickness 12 × 19 mm,Length 12 meter steel .",
    },
];
  return (
    <>
      <section className={classes.broadRange}>
        <div className={classes.itemRange}>
          <div className={classes.items}>
            <p> View all </p>
            <div className={classes.item}>
              <h1> Product Range  Applications </h1>
              <div className={classes.buttons}>
                <button className={classes.button}>
                  <Link href="#">Shop now</Link>
                </button>
                <button className={classes.icon}>
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
                </button>
              </div>
            </div>
          </div>
          <div className="container-fuild">
            <div className={`row ${classes.row}`}>
              {images.map((img) => (
                <div className={`card ${classes.card}`} key={img.id}>
                  <div className={classes.cardHeader}>
                      <div className={classes.images}>
                        <img
                          src={img.image}
                          className={classes.image}
                          alt={img.title}
                        />
                      </div>
                  </div>
                  <div className={classes.cardBody}>
                      <h3 className={classes.title}>
                        {img.title}
                      </h3>
                      <p> {img.desc} </p>
                  </div>
                  <button className={classes.buttonCard}>
                        <Link href="/category">
                          see more
                        </Link>
                      </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IronProduct;
