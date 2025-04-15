"use client";
import { useState } from "react";
import classes from "./page.module.css";
function QouteForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    file: "",
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
        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          message: "",
          file: "",
        });
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
    <>
      <div className={classes["contact-form"]}>
        <div className={classes["form-card1"]}>
          <div className={classes["form-card2"]}>
            <form className={classes["form"]} onSubmit={handleSubmit}>
              <h1 className={classes["form-heading"]}>Get In Touch</h1>
              <div className={classes["form-field"]}>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Company Name"
                  className={classes["input-field"]}
                  type="text"
                />
              </div>
              <div className={classes["form-field"]}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Contact Person"
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
                  type="number"
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
              <div className={classes["form-field"]}>
                <input
                  name="file"
                  value={formData.file}
                  onChange={handleChange}
                  required
                  placeholder="Phone"
                  className={classes["input-field"]}
                  type="file"
                />
              </div>
              <button
                type="submit"
                className={classes["sendMessage-btn"]}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default QouteForm;
