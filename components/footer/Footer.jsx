import Link from "next/link";
import classes from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
function FooterPage() {
  return (
    <>
      <section className={classes.footer}>
        <h1> Let&apos;s optimize your supply chain </h1>
        <div className={`row ${classes.row}`}>
          <div className={` ${classes.lists} col-xl-3 col-md-6 col-sm-12`}>
            <ul>
              <li>
                <span> Services </span>
              </li>
              <li>
                <Link href="#">Engeneering</Link>
              </li>
              <li>
                <Link href="#">Metallurgy</Link>
              </li>
              <li>
                <Link href="#">Machinery</Link>
              </li>
              <li>
                <Link href="#">Industry</Link>
              </li>
              <li>
                <Link href="#">Design</Link>
              </li>
              <li>
                <Link href="#">Shipping</Link>
              </li>
            </ul>
          </div>
          <div className={` ${classes.lists} col-xl-3 col-md-6 col-sm-12`}>
            <ul>
              <li>
                <span> Company </span>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">What We Do</Link>
              </li>
              <li>
                <Link href="#">News</Link>
              </li>
              <li>
                <Link href="#">Projects</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Store</Link>
              </li>
            </ul>
          </div>
          <div className={` ${classes.lists} col-xl-3 col-md-6 col-sm-12`}>
            <ul>
              <li>
                <span className={classes.light}> Email </span>
              </li>
              <li>
                <Link href="#">solutions@example.com</Link>
              </li>
              <li>
                <span className={classes.light}> Phone </span>
              </li>
              <li>
                <Link href="#">Main: 012 456 789 0123</Link>
              </li>
              <li>
                <Link href="#">Local: 234 567 890 1234</Link>
              </li>
            </ul>
          </div>
          <div className={` ${classes.lists} col-xl-3 col-md-6 col-sm-12`}>
            <ul>
              <li>
                <span className={classes.light}> Social </span>
              </li>
              <li>
                <Link href="#" className={classes.icon1}>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                  />
                </Link>
                <Link href="#" className={classes.icon}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                  />
                </Link>
                <Link href="#" className={classes.icon}>
                   <FontAwesomeIcon
                    icon={faPinterest}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p> Copyright © 2022 Qode Interactive, all rights reserved </p>
        
      </section>
    </>
  );
}

export default FooterPage;
