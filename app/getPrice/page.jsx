"use client";
import { useEffect, useState } from "react";
import classes from "./page.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // استايل جاهز

function GetPricePage() {
  const [quotes, setQuotes] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("eg");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(storedQuotes);
    const formatted = storedQuotes.map(
      (item) => `- ${item.title} (x${item.quantity})`
    );
    setMessage(formatted.join("\n"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // حذف التحقق من الـ phone
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/myzepvbl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: `+${getCountryCode(country)} ${phone}`,
          message,
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setName("");
        setEmail("");
        setPhone("");
      } else {
        console.error("Failed to send");
      }
    } catch (err) {
      console.error("Error sending form:", err);
    } finally {
      setLoading(false);
    }
  };

  const getCountryCode = (code) => {
    const codes = {
      eg: "20",
      sa: "966",
      ae: "971",
      kw: "965",
      qa: "974",
      jo: "962",
      ma: "212",
      dz: "213",
      tn: "216",
      ly: "218",
    };
    return codes[code] || "";
  };

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Get a Quote</h1>
        {!isSent ? (
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.formField}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={classes.input}
              />
            </div>

            <div className={classes.formField}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={classes.input}
              />
            </div>

            <div className={classes.phoneRow}>
              <PhoneInput
                country={country}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                containerClass={classes.phoneContainer}
                inputClass={classes.phoneInput}
                buttonClass={classes.phoneButton}
              />
            </div>

            <textarea
              name="message"
              rows="5"
              value={message}
              className={classes.textarea}
              readOnly
            />

            <button
              type="submit"
              className={classes.submitBtn}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        ) : (
          <p className={classes.thankyou}>
            Thank you! We&apos;ll get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
}

export default GetPricePage;
