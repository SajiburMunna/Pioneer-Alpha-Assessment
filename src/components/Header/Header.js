import React, { useState } from "react";
import styles from "./Header.module.css";
import HeaderContent from "./../HeaderContent/HeaderContent";
import styles2 from "./Drawer.module.css";

const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.headerBackground}>
      <nav className={`"navbar  navbar-expand-lg navbar-light ${styles.nav}"`}>
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            {show ? <span class="navbar-toggler-icon"></span> : "X"}
          </button>
          <div
            class={
              show
                ? "collapse navbar-collapse"
                : `"collapse navbar-collapse ${styles2.sidebar}"`
            }
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="/">
                  <span className={styles.text}> Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  <span className={styles.text}> About</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  <span className={styles.text}>Service & Package</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active "
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <span className={styles.text}> Gallery</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active "
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <span className={styles.text}>Faq</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active "
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <span className={styles.text}> Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.content}>
        <HeaderContent />
      </div>
    </div>
  );
};

export default Header;
