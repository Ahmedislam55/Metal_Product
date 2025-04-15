"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import DropItem from "../DropItem";
const navLinks = [
  { title: "Homes", href: "/home" },
  { title: "Contact Us", href: "/contact" },
  { title: "All Categories", href: "/category" },
];
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      router.push(`/category/${searchTerm.trim()}`);
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(`.${classes["qodef-header-navigation"]}`)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav
      className={`${classes["qodef-header-navigation"]} ${
        menuOpen ? classes["menu-open"] : ""
      }`}
      role="navigation"
    >
      <ul className={classes["qodef-nav-list"]}>
        {navLinks.map((navItem, index) => {
          const isActiveMain = pathname === navItem.href;
          return (
            <li
              key={index}
              className={`${classes["qodef-nav-item"]} ${
                isActiveMain ? classes.active : ""
              }`}
            >
              <Link href={navItem.href}>
                <span className={classes["qodef-menu-item-text"]}>
                  {navItem.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={classes.InputContainer}>
      <input
        placeholder="Search"
        id="input"
        className={classes.input}
        name="text"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />

      <label className={classes.labelforsearch} htmlFor="input">
        <svg className={classes.searchIcon} viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
        </svg>
      </label>
    </div>

      {/* Button for icon mobile */}
      <div className={classes.moblieIcon} onClick={toggleMenu}>
        <label className={classes.menuButton}>
          <input
            id="check"
            type="checkbox"
            checked={menuOpen}
            onChange={toggleMenu}
            className={classes.checkbox}
          />
          <span className={classes.top}></span>
          <span className={classes.mid}></span>
          <span className={classes.bot}></span>
        </label>
      </div>

      {/* القائمة المحمولة */}
      <AnimatePresence>
        {menuOpen && (
          <div
            className={`${classes.mobileNavbar} navbar-nav w-100 d-lg-none py-3`}
          >
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={classes.mobileNavbar}
            >
              <ul className={classes["qodef-mobile-nav-list"]}>
                {navLinks.map((navItem, index) => {
                  const isActiveMain = pathname === navItem.href;
                  return (
                    <li
                      key={index}
                      className={`${classes["qodef-nav-item-mobile"]} ${
                        isActiveMain ? classes.active : ""
                      }`}
                    >
                      <div className="d-flex justify-content-between">
                        <Link href={navItem.href}>
                          <span className={classes["qodef-menu-item-text"]}>
                            {navItem.title}
                          </span>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <DropItem />
    </nav>
  );
}

export default Navbar;
