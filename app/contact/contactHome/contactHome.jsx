import classes from "./contcatHome.module.css";
function ContactHome() {
  return (
    <>
      <section className={classes["section-contact"]}>
        <div className="container">
          <div className={`row ${classes.row}`}>
            <div className={classes.caption}>
              <p> Contact Us </p>
              <h1>
                KEEP
                <br />
                <span>IN TOUCH</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactHome;
