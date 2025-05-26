import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

import HeroImg from "./img/abstract_metalic_shape.png";

import styles from "./Hero.module.scss";

import ArrowIcon from "@/assets/icons/ArrowIcon";

const Hero = () => {
  return (
    <section id="hero" className={styles.Hero}>
      <div className={cn("container", styles.Container)}>
        {/* <div className={styles.LabelWrapper}>
          <span className={styles.Label}>
            Make Every Interaction Count Count
          </span>
        </div> */}

        <h1 className={styles.title}>
          We help publishers unlock the full value of their traffic by
          strengthening their brand in a sustainable and results-driven way
        </h1>

        <Image
          src={HeroImg.src}
          width={HeroImg.width}
          height={HeroImg.height}
          alt="abstract metalic shape"
          className={styles.HeroImg}
        />

        <p className={styles.description}>
          Okiim-Digital empowers publishers to boost their revenue by monetizing
          traffic across search, CTV, and high-impact blog placements — using
          smart, compliant, and user-centric solutions.
        </p>

        <Link href={"/contacts"} className={styles.Button}>
          <span>Book a consultation</span>
          <div className={styles.ButtonArrowWrapper}>
            <ArrowIcon className={styles.ButtonArrowIcon} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
