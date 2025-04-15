import classes from "./PortfolioList.module.css";
import image1 from "@/public/assets/image4.jpg";
import image2 from "@/public/assets/image3.jpg";
import image3 from "@/public/assets/image2.jpg";
function PortfolioList() {
  const images = [
    {
      id: 1,
      image: image1.src,
      title: "cInnovative new construction projects",
    },
    {
      id: 2,
      image: image2.src,
      title: "Projects with fine copper tool materials",
    },
    {
      id: 3,
      image: image3.src,
      title: "High tower modern and innovative projects",
    },
  ];
  return (
    <>
      <section className={classes.broadRange}>
        <div className={classes.itemRange}>
          <div className={classes.items}>
            <p> Our projects </p>
            <div className={classes.item}>
              <h1> Portfolio List standard </h1>
            </div>
          </div>
          <div className="container-fuild">
            <div className={`row ${classes.row}`}>
              {images.map((img) => (
                <div className={classes.card} key={img.id}>
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
                    <h3 className={classes.title}>{img.title}</h3>
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

export default PortfolioList;
