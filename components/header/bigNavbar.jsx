"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo-80.png";
import Navbar from "./Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./header.module.css";
import ContactHeader from "@/app/contact/contactHeader/contactHeader";
import QouteForm from "@/app/form/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import QouteCategory from "../QouteCategory";

function BigNavbar() {
  const [showContact, setShowContact] = useState(false);
  const contactVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };
  const [showForm, setShowForm] = useState(false);
  const formVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <>
      <header className={`${classes["qodef-page-header"]}`} role="banner">
        <div className={classes["qodef-page-header-inner"]}>
          <div className={classes["qodef-header-wrapper"]}>
            {/* اللوجو */}
            <div className={classes["qodef-header-logo"]}>
              <Link href="/" className={classes["qodef-header-logo-link"]}>
                <Image
                  src={logo.src}
                  alt="logo"
                  width={174}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* قائمة الروابط اللي تظهر عند الضغط */}

            <Navbar />
            <div className={classes.icons}>
              <div className={classes.card}>
                <QouteCategory />
              </div>
              <div className={classes.qoute} onClick={() => setShowForm(true)}>
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <AnimatePresence>
                {showForm && (
                  <motion.div
                    className={classes.contactBox}
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ transformOrigin: "right" }}
                  >
                    <div
                      className={classes.close}
                      onClick={() => setShowForm(false)}
                    >
                      <button className={classes.button}>
                        <span className={classes.X}></span>
                        <span className={classes.Y}></span>
                      </button>
                    </div>
                    <QouteForm />
                  </motion.div>
                )}
              </AnimatePresence>
              <div
                className={classes.icon}
                onClick={() => setShowContact(true)} // فتح الصفحة
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <AnimatePresence>
                {showContact && (
                  <motion.div
                    className={classes.contactBox}
                    variants={contactVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ transformOrigin: "right" }}
                  >
                    <div
                      className={classes.close}
                      onClick={() => setShowContact(false)}
                    >
                      <button className={classes.button}>
                        <span className={classes.X}></span>
                        <span className={classes.Y}></span>
                      </button>
                    </div>
                    <ContactHeader />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default BigNavbar;
