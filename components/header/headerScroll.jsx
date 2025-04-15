"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import classes from "./header.module.css";
import BigNavbar from "./bigNavbar";
function HeaderScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 700);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {scrolled && ( // تأكد أن العنصر لا يتم تضمينه عندما لا يكون مطلوبًا
        <motion.div
          key="header-scroll" // أضف key لحل مشكلة إعادة الحساب
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} // قللت المدة قليلاً لتحسين السلاسة
          className={classes.scroll}
        >
          <BigNavbar />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HeaderScroll;
