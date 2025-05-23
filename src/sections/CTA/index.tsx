import React from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <section id="cta" className={styles.section}>
      <div className={cn("container", styles.container)}>
        <h2 className={styles.title}>Start Growing Your Revenue</h2>
        <p className={styles.description}>
          Turn your traffic into profit with smarter, faster monetization.
        </p>
        <Link href="/contact" className={styles.button}>
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTA;
