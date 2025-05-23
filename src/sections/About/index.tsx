import React from "react";
import cn from "classnames";

import AboutImg from "./img/about_img.jpg";

import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={cn("container", styles.container)}>
        <h2 className={styles.title}>About us</h2>

        <p className={styles.subtitle}>
          Innovative Monetization & Optimization Solutions for Digital
          Publishers
        </p>

        <p className={styles.description}>
          Our strong partnerships with media houses, publishers, and digital
          platforms allow us to turn every click, view, and impression into real
          revenue. Whether your audience finds you through search or engages
          with your content on connected TVs, we ensure you're monetizing every
          opportunity — smartly, compliantly, and profitably.
        </p>

        <Image
          src={AboutImg.src}
          width={AboutImg.width}
          height={AboutImg.height}
          alt="statistic card"
          className={styles.AboutImg}
        />
      </div>
    </section>
  );
};

export default About;
