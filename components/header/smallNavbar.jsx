import Link from "next/link";
import classes from "./smallNavbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
function SmallNavbar() {
  return (
    <>
      <div className={classes.smallNavbar}>
        <div className={classes.link1}>
          <ul className={`d-flex align-items-center gap-4 m-0 p-0`} role="list">
            <li>
              <Link href="#">Phone:+321 456 78 90</Link>
            </li>
            <li>|</li>
            <li>
              <Link href="#">Email:manufaktur@example.com</Link>
            </li>
          </ul>
        </div>
        <div className={classes.link2}>
          <ul className={`d-flex align-items-center gap-2 m-0 p-0`} role="list">
            <li>
              <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
            </li>
            <li>
              <Link href="#"><FontAwesomeIcon icon={faTwitter} /></Link>
            </li>
            <li>
              <Link href="#"><FontAwesomeIcon icon={faGoogle} /></Link>
            </li>
            <li>
              <Link href="#"><FontAwesomeIcon icon={faWhatsapp} /></Link>
            </li>
            <li>
              <Link href="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SmallNavbar;
