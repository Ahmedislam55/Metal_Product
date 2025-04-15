"use client";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./footer.module.css";
import { useState, useEffect } from "react";

function FooterButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function ScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <AnimatePresence>
      {scrolled && ( // تأكد أن العنصر لا يتم تضمينه في DOM عندما لا يكون مطلوبًا
        <motion.button
          key="scroll-button" // إضافة key لحل مشاكل إعادة الحساب
          className={classes.button}
          onClick={ScrollTop}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.5 }}
        >
          <svg className={classes.svgIcon} viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default FooterButton;
