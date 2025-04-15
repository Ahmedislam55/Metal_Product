import classes from "./MetalInformation.module.css";
function MetalInformation() {
  return (
    <>
      <section className={classes["metal-information"]}>
        <div className="container-fuild">
            <div className={`row ${classes.row}`}>
                <div className={classes.caption}>
                    <h2> For all informaton you need </h2>
                    <h3> CALL US: +367868787 </h3>
                </div>
                <div className={classes.image}>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default MetalInformation;
