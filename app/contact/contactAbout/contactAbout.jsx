"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./contactAbout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function ContactAbout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/myzepvbl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={classes["section-contact"]}>
      <div className="container-fuild">
        <div className="row">
          <div className={classes.caption}>
            <p className={classes.parg}> Contact Us Now </p>
            <h3> Happy to answer your questions </h3>
            <p className={classes.title}> Call us for all of your questions today. </p>
            <div className={classes.items}>
              <div className={classes.item}>
                <span> OUR ADDRESSES </span>
                <Link href="#" className={classes.link}> Building No 6249- Hamzah Ibn Abdul </Link>
                <Link href="#">Muttalib Street, Dhahrat Al</Link>
                <Link href="#">Badi&apos;ah, Riyadh 12982, Saudi Arabia</Link>
              </div>
              <div className={classes.item}>
                <span> Emails </span>
                <Link href="#" className={classes.link}> manufaktur@example.com </Link>
                <Link href="#">solutions@example.com</Link>
              </div>
              <div className={classes.item}>
                <span> Phones </span>
                <Link href="#" className={classes.link}> Main: +238 65 723 22 </Link>
                <Link href="#"> Local: +238 65 723 44 </Link>
              </div>
              <div className={classes.item}>
                <span> Social </span>
                <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
                <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
                <FontAwesomeIcon className={classes.icon} icon={faPinterest} />
              </div>
            </div>
          </div>
          <div className={classes["contact-form"]}>
            <div className={classes["form-card1"]}>
              <div className={classes["form-card2"]}>
                <form className={classes["form"]} onSubmit={handleSubmit}>
                  <p className={classes["form-heading"]}>Get In Touch</p>
                  
                  <div className={classes["form-field"]}>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className={classes["input-field"]}
                      type="text"
                    />
                  </div>
                  <div className={classes["form-field"]}>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className={classes["input-field"]}
                      type="email"
                    />
                  </div>
                  <div className={classes["form-field"]}>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone"
                      className={classes["input-field"]}
                      type="text"
                    />
                  </div>
                  <div className={classes["form-field"]}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Message"
                      cols="30"
                      rows="3"
                      className={classes["input-field"]}
                    ></textarea>
                  </div>
                  <button type="submit" className={classes["sendMessage-btn"]} disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactAbout;
