import Link from "next/link";
import classes from "./contactHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faPinterest,
  } from "@fortawesome/free-brands-svg-icons";
function ContactHeader() {
  return (
    <>
      <section className={classes["section-contact"]}>
        <div className={classes.caption}>
          <p className={classes.parg}> Contact Us </p>
          <h3> Happy to answer your questions </h3>
          <p className={classes.title}>
            Call us for all of your questions today.
          </p>
          <strong>CONTACT</strong>
          <Link href="#" className={classes.link}>
          manufaktur@example.com
          </Link>
          <Link href="#">
          solutions@example.com
          </Link>
          <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
          <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
          <FontAwesomeIcon className={classes.icon} icon={faPinterest} />
        </div>
      </section>
    </>
  );
}

export default ContactHeader;
